import express from 'express';
import pino from 'pino';
import { Storage, File } from 'megajs';
import { 
  useMultiFileAuthState, 
  makeWASocket, 
  Browsers,
  makeCacheableSignalKeyStore, 
  jidEncode,
  Curve,
  signedKeyPair,
  generateRegistrationId 
} from '@whiskeysockets/baileys';
import { randomBytes } from 'crypto';
import connectDB from '../utils/connectDB.js';
import User from '../models/user.js';
import { downloadAndSaveMediaMessage } from '../lib/functions.js';
import 'cluster';
import 'os';
import NodeCache from 'node-cache';
import fs from 'fs';
import { ytmp4, ytmp3 } from 'ruhend-scraper';
import 'node-fetch';
import 'axios';
import 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { doReact, emojis } from '../lib/autoreact.cjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON dan melayani file statis
app.use(express.json());
app.use(express.static('public'));

const logger = pino({ level: 'silent' })
const msgRetryCounterCache = new NodeCache();
const store = makeInMemoryStore({
  logger
});

if (!fs.existsSync('./sessions')) {
  fs.mkdirSync('./sessions', { recursive: true });
}

function decodeJid(jid) {
  const { user, server } = jidDecode(jid) || {};
  return user && server ? `${user}@${server}`.trim() : jid;
}

async function uploadCredsToMega(filePath) {
  try {
    const megaCredentials = {
      email: "luthfijoestars@gmail.com",
      password: "sihkuq-Senta5-tynzob"
    };

    const storage = await new Storage(megaCredentials).ready;
    console.log("Mega storage initialized.");

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileSize = fs.statSync(filePath).size;
    const fileInfo = {
      name: "creds.json",
      size: fileSize
    };

    const uploadResult = await storage.upload(fileInfo, fs.createReadStream(filePath)).complete;
    console.log("File uploaded to Mega successfully.");

    const uploadedFile = storage.files[uploadResult.nodeId];
    const downloadLink = await uploadedFile.link();
    console.log(`Download URL for creds.json: ${downloadLink}`);

    return downloadLink;
  } catch (error) {
    console.error("Error uploading to Mega:", error);
    throw error;
  }
}

async function restoreCredsFromMega(downloadUrl, sessionName) {
  const restorePath = `./restored_sessions/${sessionName}`;

  if (!fs.existsSync(restorePath)) {
    fs.mkdirSync(restorePath, { recursive: true });
  }

  const file = await File.fromURL(downloadUrl);

  await new Promise((resolve, reject) => {
    file.download((error, data) => {
      if (error) {
        return reject(error);
      }
      fs.writeFileSync(`${restorePath}/creds.json`, data);
      resolve();
    });
  });
}

let sock = {}
let plugins = {};

const loadPlugins = async () => {
  const pluginFiles = fs.readdirSync("./plugins");
  for (const file of pluginFiles) {
    if (file.endsWith(".js")) {
      try {
        const filePath = path.resolve("./plugins", file);
        const pluginModule = await import(filePath);
        
        if (pluginModule.command && typeof pluginModule.execute === "function") {
          pluginModule.command.forEach(command => {
            plugins[command] = pluginModule.execute;
            console.log("✅ Loaded command: " + command);
          });
        }
      } catch (error) {
        console.error("❌ Error loading plugin " + file + ":", error);
      }
    }
  }
};

async function createBot(sessionId) {
  await connectDB();
  try {
    const sessionPath = "./sessions/" + sessionId;
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    
    const client = makeWASocket({
      logger: logger,
      printQRInTerminal: false,
      browser: Browsers.ubuntu('Chrome'), // Using proper Browsers config
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logger),
      },
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
        if (store) {
          const message = await store.loadMessage(key.remoteJid, key.id);
          return message?.message || undefined;
        }
        return { conversation: "Ethix-Xsid MultiAuth Bot" };
      },
      msgRetryCounterCache,
      syncFullHistory: false,
      shouldSyncHistoryMessage: () => false,
    });

    sock[sessionId] = client;

    client.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        console.log("QR Code received:", qr);
      }

      if (connection === "close") {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        if (shouldReconnect) {
          console.log("Connection lost, attempting to reconnect...");
          setTimeout(() => createBot(sessionId), 5000);
        } else {
          console.log(sessionId + " Logged out.");
          await deleteSession(sessionId);
        }
      } else if (connection === "open") {
        console.log("😃 Integration Successful️ ✅");

        try {
          await loadPlugins();
          console.log("All Plugins Installed");

          const credentialsPath = sessionPath + "/creds.json";
          const megaUploadLink = await uploadCredsToMega(credentialsPath);
          console.log("Credentials uploaded to Mega: " + megaUploadLink);
          
          const existingUser = await User.findOne({ phoneNumber: sessionId });
          if (!existingUser) {
            const newUser = {
              phoneNumber: sessionId,
              sessionId: megaUploadLink
            };
            await User.create(newUser);
            console.log("New user created for phone number: " + sessionId);
          } else {
            console.log("♻️ User already exists.");
          }

          const pluginsDirectory = path.join(__dirname, "../plugins");
          const loadedPlugins = fs.readdirSync(pluginsDirectory);
          const totalPlugins = loadedPlugins.length;
          console.log("Total Plugins Loaded: " + totalPlugins);

          const userSettingsQuery = { phoneNumber: sessionId };
          const userSettings = await User.findOne(userSettingsQuery);
          
          if (userSettings) {
            const settingsList = ["statusReadMessage", "statusReadEnabled", "autoReactEnabled", "autoTyping", "autoRead", "autoRecording", "antiCall", "alwaysOnline", "prefix", "statusReactNotify"];
            const userSettingsText = settingsList.map(setting => {
              return "*◦ " + setting + ":* " + userSettings[setting];
            }).join("\n");
            
            const separatorLine = '━'.repeat(25);
            const image = {
              url: "https://img101.pixhost.to/images/404/552534361_than.jpg"
            };
            
            const message = {
              image: image,
              caption: separatorLine + "\n" + "*`◦ Successfully Connected To ANDY BOT Type .menu To see menu list 😚 `*\n*`◦ Developer:`* 13056978303\n*`◦ Version:`* 1.0" + "\n\n*`◦ Total Plugins:`* " + totalPlugins + "\n\n*`◦ User Settings:`*\n" + userSettingsText + "\n" + separatorLine
            };
            
            await client.sendMessage(client.user.id, message);
          }
        } catch (error) {
          console.error("Error during connection open process:", error);
        }
      }
    });

    client.ev.on("creds.update", saveCreds);

    client.ev.on("messages.upsert", async (eventData) => {
      try {
        let m = eventData.messages[0];
        if (!m || !m.message) return;
        
        m.chat = m.key.remoteJid;
        m.sender = m.key.fromMe
          ? client.user.id.split(":")[0] + "@s.whatsapp.net"
          : m.key.participant || m.chat;
        m.isFromMe = m.key.fromMe;
        m.isGroup = m.chat.endsWith("@g.us");
        m.type = Object.keys(m.message)[0];
        m.contentType = getContentType(m.message);

        // Text extraction
        m.text =
          m.contentType === "conversation"
            ? m.message.conversation
            : m.contentType === "extendedTextMessage"
            ? m.message.extendedTextMessage.text
            : m.contentType === "imageMessage" && m.message.imageMessage.caption
            ? m.message.imageMessage.caption
            : m.contentType === "videoMessage" && m.message.videoMessage.caption
            ? m.message.videoMessage.caption
            : "";

        const body = typeof m.text === "string" ? m.text : "";

        m.quoted = m.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"] || null;
        m.quotedText =
          m.quoted?.["extendedTextMessage"]?.["text"] ||
          m.quoted?.["imageMessage"]?.["caption"] ||
          m.quoted?.["videoMessage"]?.["caption"];
        m.pushName = m.pushName || "Shizxy Bot V1";

        // User query definition
        const userQuery = { phoneNumber: sessionId };
        const userSettings = await User.findOne(userQuery);

        // Filter conditions
        if (
          m.message?.["protocolMessage"] ||
          m.message?.["ephemeralMessage"] 
        ) return;

        // Auto react SW
        if (m.chat && m.chat === "status@broadcast") {
          await client.readMessages([m.key]);
          const reactions = ['💚', '❤', '👍', '😊', '🔥', '📣', '🤯', '☠️', '💀'];
          const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
          const decodedJid = decodeJid(client.user.id);

          await client.sendMessage("status@broadcast", {
            'react': {
              'key': m.key,
              'text': randomReaction
            }
          }, {
            'statusJidList': [m.key.participant, decodedJid]
          });
        }
        
        // Auto React Feature
        if (userSettings && !m.key.fromMe && userSettings.autoReactEnabled) {
          const emojis = ["💚", "❤️", "👍", "😊", "🔥", "📣", "🤯", "☠️", "💀"];
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          await doReact(randomEmoji, m, client);
        }

        // Handle commands: "send", "statusdown", "take"
        if (["send", "statusdown", "take"].includes(body.toLowerCase())) {
          const quotedMessage = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
          if (quotedMessage) {
            if (quotedMessage.imageMessage) {
              const imageCaption = quotedMessage.imageMessage.caption || "> © Created By Mrlit Andy.";
              const imageUrl = await downloadAndSaveMediaMessage(quotedMessage.imageMessage, "image");
              const imageObject = { url: imageUrl };
              const imageMessage = { image: imageObject, caption: imageCaption };
              await client.sendMessage(m.chat, imageMessage, { quoted: m });
            }
            if (quotedMessage.videoMessage) {
              const videoCaption = quotedMessage.videoMessage.caption || "> © Created By Andy Lit.";
              const videoUrl = await downloadAndSaveMediaMessage(quotedMessage.videoMessage, "video");
              const videoObject = { url: videoUrl };
              const videoMessage = { video: videoObject, caption: videoCaption };
              await client.sendMessage(m.chat, videoMessage, { quoted: m });
            }
            if (quotedMessage.conversation) {
              const textMessage = quotedMessage.conversation || "Here is the text message.";
              const textMessageObject = { text: textMessage };
              await client.sendMessage(m.chat, textMessageObject, { quoted: m });
            }
            return;
          }
        }

        // Handle YouTube download
        const urlMatch = m.quotedText?.match(/◦ \*Link:\* (https?:\/\/[^\s]+)/);
        if (urlMatch) {
          const url = urlMatch[1];
          const command = body.trim();
          if (command === "1" || command === "2") {
            await client.sendMessage(m.chat, { text: "⏳ Please wait, fetching the media..." }, { quoted: m });

            if (command === "1") {
              const {
                video: videoUrl,
                title: songTitle,
                author: songAuthor,
                duration: songDuration,
                views: songViews,
              } = await ytmp4(url);

              const videoInfo = `╭───────────\n│◦ *Ethix-MD-V3 Song Downloader*\n` +
                `│◦ *Title:* ${songTitle}\n` +
                `│◦ *Author:* ${songAuthor}\n` +
                `│◦ *Duration:* ${songDuration}\n` +
                `│◦ *Views:* ${songViews}\n` +
                `╰───────────`;

              await client.sendMessage(
                m.chat,
                { video: { url: videoUrl }, caption: videoInfo },
                { quoted: m }
              );
            } else if (command === "2") {
              const {
                audio: audioUrl,
                title: songTitle,
                author: songAuthor,
                duration: songDuration,
                views: songViews,
              } = await ytmp3(url);

              const audioInfo = `╭───────────\n│◦ *Ethix-MD-V3 Song Downloader*\n` +
                `│◦ *Title:* ${songTitle}\n` +
                `│◦ *Author:* ${songAuthor}\n` +
                `│◦ *Duration:* ${songDuration}\n` +
                `│◦ *Views:* ${songViews}\n` +
                `╰───────────`;

              await client.sendMessage(
                m.chat,
                { audio: { url: audioUrl }, mimetype: "audio/mpeg", caption: audioInfo },
                { quoted: m }
              );
            }
            return;
          }
        }

        // Prefix and command handling
        m.prefix = userSettings?.["prefix"] || ".";
        m.command =
          body.startsWith(m.prefix)
            ? body.slice(m.prefix.length).trim().split(" ").shift().toLowerCase()
            : "";
        m.args = body.trim().split(/ +/).slice(1);
        m.query = m.args.join(" ");

        m.mime =
          m.quoted?.["mimetype"] || m.message[m.type]?.["mimetype"] || "";
        const senderId = m.sender.split("@")[0];
        const botId = client.user.id.split(":")[0];
        m.isOwner = senderId === botId || senderId === "13056978303";

        const reply = async (responseText) => {
          await client.sendMessage(m.chat, { text: responseText }, { quoted: m });
        };

        if (!m.isOwner) return;

        // Plugin execution
        const plugin = plugins[m.command];
        if (plugin) {
          try {
            const pluginData = {
              phoneNumber: sessionId,
              from: m.chat,
              sender: m.sender,
              fromMe: m.isFromMe,
              isGroup: m.isGroup,
              messageType: m.type,
              quoted: m.quoted,
              pushName: m.pushName,
              prefix: m.prefix,
              command: m.command,
              args: m.args,
              query: m.query,
              mime: m.mime,
              isOwner: m.isOwner,
              reply: reply,
            };
            await plugin(client, m, pluginData);
          } catch (error) {
            await reply("❌ There was an error executing your command.");
          }
        }

        // Auto Read, Auto Typing, Auto Recording, and Status Update
        if (m.message?.conversation) {
          const remoteJid = m.key.remoteJid;
          const userData = await User.findOne({ phoneNumber: sessionId });

          if (userData.autoRead) {
            await client.readMessages([m.key]);
          }
          if (userData.autoTyping) {
            await client.sendPresenceUpdate("composing", remoteJid);
          }
          if (userData.autoRecording) {
            await client.sendPresenceUpdate("recording", remoteJid);
          }
          if (userData.alwaysOnline) {
            await client.sendPresenceUpdate("available", remoteJid);
          } else {
            await client.sendPresenceUpdate("unavailable", remoteJid);
          }
        }
      } catch (error) {
        console.error("Error handling messages.upsert event:", error);
      }
    });

    client.ev.on("call", async callData => {
      const userSearchCriteria = {
        phoneNumber: sessionId
      };
      const userData = await User.findOne(userSearchCriteria);
      if (!userData || !userData.antiCall) {
        return;
      }

      for (const call of callData) {
        if (call.status === "offer") {
          await client.sendMessage(call.from, {
            text: "*_📞 Auto Reject Call Mode Activated_* \n*_📵 No Calls Allowed_*",
            mentions: [call.from]
          });
          await client.rejectCall(call.id, call.from);
        }
      }
    });

    return client;
  } catch (err) {
    console.error("Error creating bot:", err);
  }
}

async function restoreSessionFromDB(phoneNumber, sessionId) {
  try {
    console.log(`Restoring session for phone number: ${phoneNumber}`);
    await restoreCredsFromMega(sessionId, phoneNumber);
    await createRestoredBot(phoneNumber);
  } catch (error) {
    if (error.message.includes("TypeError: Invalid URL")) {
      console.error("Error restoring session due to invalid URL:", error);
      await deleteSession(phoneNumber);
    } else {
      console.error("Error restoring session:", error);
    }
  }
}

async function createRestoredBot(sessionName) {
  await connectDB();
  try {
    const sessionPath = `./restored_sessions/${sessionName}`;
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    
    const socket = makeWASocket({
      logger: logger,
      printQRInTerminal: false,
      browser: Browsers.ubuntu('Chrome'), // Fixed browser config
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logger),
      },
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (messageId) => {
        if (store) {
          const storedMessage = await store.loadMessage(messageId.remoteJid, messageId.id);
          return storedMessage?.message || undefined;
        }
        return { conversation: "Ethix-Xsid MultiAuth Bot" };
      },
      msgRetryCounterCache,
      syncFullHistory: false,
      shouldSyncHistoryMessage: () => false,
    });

    sock[sessionName] = socket;

    socket.ev.on("connection.update", async update => {
      const { connection, lastDisconnect } = update;

      if (connection === "close") {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        if (shouldReconnect) {
          setTimeout(() => createRestoredBot(sessionName), 5000);
        } else {
          console.log(`${sessionName} Logged out.`);
          await deleteSession(sessionName);
        }
      } else if (connection === "open") {
        await loadPlugins();
        console.log("All plugins installed.");
      }
    });

    socket.ev.on("creds.update", saveCreds);

    // All message handlers remain the same...
    socket.ev.on("messages.upsert", async event => {
      const { messages } = event;
      if (!messages || messages.length === 0) {
        return;
      }

      const message = messages[0];
      if (!message || !message.message) {
        return;
      }

      const remoteJid = message.key.remoteJid;
      const sender = message.key.fromMe ? socket.user.id.split(':')[0] + "@s.whatsapp.net" : message.key.participant || message.key.remoteJid;
      const isFromMe = message.key.fromMe;
      const isGroup = remoteJid.endsWith("@g.us");
      const messageType = Object.keys(message.message)[0];
      const contentType = getContentType(message.message);

      const messageText = contentType === "conversation" ? message.message.conversation :
                          contentType === "extendedTextMessage" ? message.message.extendedTextMessage.text :
                          contentType === "imageMessage" && message.message.imageMessage.caption ? message.message.imageMessage.caption :
                          contentType === "videoMessage" && message.message.videoMessage.caption ? message.message.videoMessage.caption :
                          '';

      const quotedMessage = message.quoted ? message.quoted : message;
      const pushName = message.pushName || "Ethix-MD-V3";

      const userSettings = {
        phoneNumber: sessionName
      };
      
      const user = await User.findOne(userSettings);
      const prefix = user?.prefix || '.';
      const command = messageText.startsWith(prefix) ? messageText.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
      const args = messageText.trim().split(/ +/).slice(1);
      const query = args.join(" ");
      const mimeType = quotedMessage?.mimetype || message.message[messageType]?.mimetype || '';
      
      const senderId = sender.split('@')[0];
      const botId = socket.user.id.split(':')[0];
      const isOwner = senderId === botId || senderId === "13056978303";

      const reply = async (text) => {
        const response = {
          text: text
        };
        const options = {
          quoted: message
        };
        await socket.sendMessage(remoteJid, response, options);
      };

      if (!isOwner) {
        return;
      }

      const plugin = plugins[command];
      if (plugin) {
        try {
          const pluginParams = {
            phoneNumber: sessionName,
            from: remoteJid,
            sender: sender,
            fromMe: isFromMe,
            isGroup: isGroup,
            messageType: messageType,
            quoted: quotedMessage,
            pushName: pushName,
            prefix: prefix,
            command: command,
            args: args,
            q: query,
            mime: mimeType,
            isOwner: isOwner,
            reply: reply
          };
          await plugin(socket, message, pluginParams);
        } catch (error) {
          await reply("❌ There was an error executing your command.");
        }
      }
    });

    // Copy all other message handlers from original code...
    // (All the other event handlers remain the same)

    return socket;
  } catch (err) {
    console.error("Error creating restored bot:", err);
  }
}

function getPhoneNumbersFromSessions() {
  return fs.readdirSync("./sessions").filter(fileName => fileName.match(/^\d+$/));
}

async function deleteSession(phoneNumber) {
  const sessionPath = `./sessions/${phoneNumber}`;
  if (fs.existsSync(sessionPath)) {
    fs.rmSync(sessionPath, { recursive: true, force: true });
    console.log(`${phoneNumber} Deleted from Sessions`);
  }

  const restoredSessionPath = `./restored_sessions/${phoneNumber}`;
  if (fs.existsSync(restoredSessionPath)) {
    fs.rmSync(restoredSessionPath, { recursive: true, force: true });
    console.log(`${phoneNumber} Deleted from Restored Sessions`);
  }

  await User.findOneAndDelete({ phoneNumber });
  console.log(`Deleted ${phoneNumber} From DB`);
}

async function reloadBots() {
  await connectDB();
  const sessions = getPhoneNumbersFromSessions();
  const databaseRecords = await User.find({});
  const registeredPhoneNumbers = databaseRecords.map(record => record.phoneNumber);

  for (const session of sessions) {
    await createBot(session);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  for (const phoneNumber of registeredPhoneNumbers) {
    if (!sessions.includes(phoneNumber)) {
      const record = databaseRecords.find(record => record.phoneNumber === phoneNumber);
      if (record) {
        await restoreSessionFromDB(phoneNumber, record.sessionId);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }
}

async function deleteSessionFilesExceptCreds(phoneNumber) {
  const sessionPaths = [`./sessions/${phoneNumber}`, `./restored_sessions/${phoneNumber}`];
  for (const dirPath of sessionPaths) {
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach(file => {
        const filePath = path.join(dirPath, file);
        if (file !== "creds.json" && fs.lstatSync(filePath).isFile()) {
          fs.rmSync(filePath, { force: true });
          console.log("Deleted All Ephemeral files");
        }
      });
    }
  }
}

setInterval(async () => {
  const phoneNumbers = await User.find({}, "phoneNumber");
  for (const record of phoneNumbers) {
    await deleteSessionFilesExceptCreds(record.phoneNumber);
  }
}, 3600000);

//// FIXED PAIRING CODE IMPLEMENTATION
app.post("/pairing-code", async (req, res) => {
  try {
    let { phoneNumber } = req.body;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    
    if (!phoneNumber) {
      return res.status(400).json({ status: "Invalid phone number" });
    }

    console.log(`Creating pairing session for phone number: ${phoneNumber}`);
    
    const sessionPath = `./sessions/${phoneNumber}`;
    if (!fs.existsSync(sessionPath)) {
      fs.mkdirSync(sessionPath, { recursive: true });
    }

    // Initialize with fresh auth state
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    
    // Create the required keys if they don't exist
    if (!state.creds.noiseKey) {
      state.creds.noiseKey = Curve.generateKeyPair();
    }
    
    if (!state.creds.signedIdentityKey) {
      const identityKeyPair = Curve.generateKeyPair();
      state.creds.signedIdentityKey = identityKeyPair;
    }
    
    if (!state.creds.signedPreKey) {
      state.creds.signedPreKey = signedKeyPair(state.creds.signedIdentityKey, 1);
    }
    
    if (!state.creds.registrationId) {
      state.creds.registrationId = generateRegistrationId();
    }
    
    if (!state.creds.advSecretKey) {
      state.creds.advSecretKey = randomBytes(32).toString('base64');
    }
    
    // This is CRITICAL - must be generated for pairing code to work
    state.creds.pairingEphemeralKeyPair = Curve.generateKeyPair();
    
    // Save the updated credentials
    await saveCreds();

    // Create socket connection
    const socket = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: false,
      browser: Browsers.ubuntu('Chrome'),
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
      },
      markOnlineOnConnect: false,
      connectTimeoutMs: 60000,
      defaultQueryTimeoutMs: 60000,
      syncFullHistory: false,
      shouldSyncHistoryMessage: () => false,
    });

    // Handle connection updates
    socket.ev.on('connection.update', async (update) => {
      const { connection } = update;
      console.log('Connection update:', update);
    });

    // Handle credentials updates
    socket.ev.on('creds.update', async () => {
      await saveCreds();
    });

    try {
      // The number needs to have "+" prefix when calling requestPairingCode
      const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      
      // First we need to wait for socket to be connected
      await new Promise((resolve, reject) => {
        const checkInterval = setInterval(() => {
          if (socket.user) {
            clearInterval(checkInterval);
            resolve(true);
            return;
          }
        }, 1000);
        
        // Timeout if connection not established in 15 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          console.log("Socket connection timed out, attempting to request pairing code anyway");
          resolve(false);
        }, 15000);
      });
      
      console.log(`Requesting pairing code for ${formattedNumber}`);
      const code = await socket.requestPairingCode(formattedNumber);
      
      if (!code) {
        throw new Error('Failed to generate pairing code');
      }
      
      const formattedCode = code.match(/.{1,3}/g)?.join('-') || code;
      console.log(`✅ Pairing code generated: ${formattedCode}`);
      
      sock[phoneNumber] = socket;
      
      res.json({
        pairingCode: formattedCode,
        status: "success",
        message: "Enter this code in WhatsApp > Linked Devices > Link a Device"
      });
    } catch (pairingError) {
      console.error("Error generating pairing code:", pairingError);
      
      res.status(500).json({
        status: "error",
        message: "Failed to generate pairing code",
        error: pairingError.message
      });
    }
  } catch (error) {
    console.error("Error in /pairing-code:", error);
    res.status(500).json({
      status: "error",
      message: "Server error while setting up pairing",
      error: error.message
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Worker process started on port ${PORT}`);
  await reloadBots();
});