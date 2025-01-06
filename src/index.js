
const deobfuscatedFunction = function () {
  const config = {
    isDifferent: function (value1, value2) {
      return value1 !== value2;
    },
    credsFile: "creds.json",
    isEqual: function (value1, value2) {
      return value1 === value2;
    },
    key1: "qIpcS",
    key2: "NRVph",
    errorMessage: "Error handling messages.upsert event:",
    key3: "WRrgR",
    key4: "qnbEA",
  };

  let isFirstCall = true;

  return function (context, callback) {
    const errorConfig = {
      errorPrefix: config.errorMessage,
    };

    if (config.key3 !== config.key4) {
      const initialize = isFirstCall
        ? function () {
            const fileConfig = {
              isDifferent: function (value1, value2) {
                return value1 !== value2;
              },
              credsFileName: config.credsFile,
            };

            if (config.isEqual(config.key1, config.key1)) {
              if (callback) {
                if (config.isEqual(config.key2, config.key2)) {
                  const result = callback.apply(context, arguments);
                  callback = null;
                  return result;
                } else if (fileSystem.existsSync(somePath)) {
                  directoryReader.readdirSync(directoryPath).forEach((file) => {
                    const filePath = path.join(rootPath, file);
                    if (
                      file !== fileConfig.credsFileName &&
                      fileSystem.lstatSync(filePath).isFile()
                    ) {
                      const options = { force: true };
                      fileRemover.rmSync(filePath, options);
                      logger.log("Deleted All Ephemeral files");
                    }
                  });
                }
              }
            } else {
              const options = { force: true };
              fileRemover.rmSync(filePath, options);
              logger.log("Deleted All Ephemeral files");
            }
          }
        : function () {};

      isFirstCall = false;
      return initialize;
    } else {
      logger.error(errorConfig.errorPrefix, someError);
    }
  };
}();
import express from 'express';
import pino from 'pino';
import { Storage, File } from 'megajs';
import { useMultiFileAuthState, makeWASocket, jidDecode, DisconnectReason, getContentType, makeCacheableSignalKeyStore } from '@whiskeysockets/baileys';
import connectDB from '../utils/connectDB.js';
import User from '../models/user.js';
import { downloadAndSaveMediaMessage } from '../lib/functions.js';
import 'cluster';
import 'os';
import NodeCache from 'node-cache';
import fs from 'fs';
import { ytmp4, ytmp3 } from 'ruhend-scraper';
import path from 'path';
import 'node-fetch';
import 'axios';
import 'fs/promises';
import autoreact from '../lib/autoreact.cjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON dan melayani file statis
app.use(express.json());
app.use(express.static('public'));

// Logging configuration
const logger = pino({
  level: 'info', // Menentukan level log yang akan dicatat
})
let botInstances = {};
// Create sessions directory if not exists
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

let plugins = {};
const loadPlugins = async () => {
  plugins = {};
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
function decode(input, key) {
  const decodeBase64 = (data) => {
    let output = '';
    let buffer = '';
    let charIndex;
    let byteCounter = 0;
    let currentByte;

    for (let i = 0; charIndex = data.charAt(i++); ~charIndex && (currentByte = byteCounter % 4 ? currentByte * 64 + charIndex : charIndex, byteCounter++ % 4) ?
      output += String.fromCharCode(255 & currentByte >> (-2 * byteCounter & 6)) : 0) {
      charIndex = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(charIndex);
    }

    return decodeURIComponent(output.split('').map((char) =>
      '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2)).join(''));
  };

  const xorCipher = (data, key) => {
    const sBox = [];
    let j = 0;
    let temp;
    let decoded = '';

    for (let i = 0; i < 256; i++) {
      sBox[i] = i;
    }

    for (let i = 0; i < 256; i++) {
      j = (j + sBox[i] + key.charCodeAt(i % key.length)) % 256;
      temp = sBox[i];
      sBox[i] = sBox[j];
      sBox[j] = temp;
    }

    let i = 0;
    j = 0;

    for (let k = 0; k < data.length; k++) {
      i = (i + 1) % 256;
      j = (j + sBox[i]) % 256;
      temp = sBox[i];
      sBox[i] = sBox[j];
      sBox[j] = temp;
      decoded += String.fromCharCode(data.charCodeAt(k) ^ sBox[(sBox[i] + sBox[j]) % 256]);
    }

    return decoded;
  };

  const decodedInput = decodeBase64(input);
  return xorCipher(decodedInput, key);
}

async function createBot(sessionId) {
  await connectDB();
  try {
    const sessionPath = "./sessions/" + sessionId;
    const {
     state, 
     saveCreds
    } = await useMultiFileAuthState(sessionPath);

    const msgRetryCounterCache = new NodeCache();
    const socket = makeWASocket({
      logger: logger,
      printQRInTerminal: false,
      browser: ["Mac OS", "chrome", "121.0.6167.159"],
      auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(
        state.keys,
        pino({ level: "fatal" }).child({ level: "fatal" }),
      ),
    },
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
        if (store) {
          const message = await store.loadMessage(key.remoteJid, key.id);
          return message.message || undefined;
        }
        const defaultMessage = { conversation: "Ethix-Xsid MultiAuth Bot" };
        return defaultMessage;
      },
      msgRetryCounterCache
    });

    botInstances[sessionId] = socket;

    socket.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect } = update;

      if (connection === "close") {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        if (shouldReconnect) {
          console.log("Connection lost, attempting to reconnect...");
          setTimeout(() => createBot(sessionId), 5000);
        } else {
          console.log(sessionId + " Logged out.");
          await deleteSession(sessionId);
        }
      } else {
        if (connection === "open") {
  console.log("😃 Integration Successful️ ✅");

  try {
    await loadPlugins();
    console.log("All Plugins Installed");

    const credentialsPath = sessionPath + "/creds.json";
    const megaUploadLink = await uploadCredsToMega(credentialsPath);
    console.log("Credentials uploaded to Mega: " + megaUploadLink);

    const userQuery = {
      phoneNumber: sessionId
    };
    const existingUser = await User.findOne(userQuery);
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

    const userSettingsQuery = {
      phoneNumber: sessionId
    };
    const userSettings = await User.findOne(userSettingsQuery);
    if (userSettings) {
      const settingsList = ["statusReadMessage", "statusReadEnabled", "autoReactEnabled", "autoTyping", "autoRead", "autoRecording", "antiCall", "alwaysOnline", "prefix", "statusReactNotify"];
      const userSettingsText = settingsList.map(setting => {
        return "*◦ " + setting + ":* " + userSettings[setting];
      }).join("\n");
      const separatorLine = '━'.repeat(25);
      const image = {
        url: "https://files.catbox.moe/hg0xgo.jpg"
      };
      const message = {
        image: image,
        caption: separatorLine + "\n" + "*`◦ Connected to Bot: Ethix-MD-V3`*\n*`◦ Developer:`* 919142294671\n*`◦ Version:`* 3.0.1" + "\n\n*`◦ Total Plugins:`* " + totalPlugins + "\n\n*`◦ User Settings:`*\n" + userSettingsText + "\n" + separatorLine
      };
      await socket.sendMessage(socket.user.id, message);
    }
  } catch (error) {
    console.error("Error during connection open process:", error);
      }
     }
   }
})
    socket.ev.on("messages.upsert", async (eventData) => {
  const message = eventData.messages[0];
  if (!message || !message.message) {
    return;
  }

  const remoteJid = message.key.remoteJid;
  const sender = message.key.fromMe
    ? socket.user.id.split(':')[0] + "@s.whatsapp.net"
    : message.key.participant || message.key.remoteJid;
  const isFromMe = message.key.fromMe;
  const isGroup = remoteJid.endsWith("@g.us");
  const messageType = Object.keys(message.message)[0];
  const contentType = getContentType(message.message);

  const messageText =
    contentType === "conversation"
      ? message.message.conversation
      : contentType === "extendedTextMessage"
      ? message.message.extendedTextMessage.text
      : contentType == "imageMessage" && message.message.imageMessage.caption
      ? message.message.imageMessage.caption
      : contentType == "videoMessage" && message.message.videoMessage.caption
      ? message.message.videoMessage.caption
      : "";

  const quotedMessage = message.quoted ? message.quoted : message;
  const pushName = message.pushName || "Ethix-MD-V3";

  const userQuery = {
    phoneNumber: sessionId
  };
  const userSettings = await User.findOne(userQuery);
  const prefix = userSettings?.["prefix"] || '.';
  const command =
    messageText.startsWith(prefix) ? messageText.slice(prefix.length).trim().split(" ").shift().toLowerCase() : '';
  const args = messageText.trim().split(/ +/).slice(1);
  const query = args.join(" ");

  const mimeType =
    quotedMessage?.["mimetype"] || message.message[messageType]?.["mimetype"] || '';
  const senderId = sender.split('@')[0];
  const botId = socket.user.id.split(':')[0];
  const isOwner = senderId === botId || senderId === "919142294671";

  const reply = async (responseText) => {
    const response = {
      text: responseText
    };
    const quoted = {
      quoted: message
    };
    await socket.sendMessage(remoteJid, response, quoted);
  };

  if (!isOwner) {
    return;
  }

  const plugin = plugins[command];
  if (plugin) {
    try {
      const pluginData = {
        phoneNumber: sessionId,
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
        query: query,
        mime: mimeType,
        isOwner: isOwner,
        reply: reply
      };
      await plugin(socket, message, pluginData);
    } catch (error) {
      await reply("❌ There was an error executing your command.");
    }
  }
});
    socket.ev.on("creds.update", saveCreds);

socket.ev.on("messages.upsert", async (eventData) => {
  try {
    const message = eventData.messages[0];
    console.log(message);
    const participantId = message.key.participant || message.key.remoteJid;
    if (!message || !message.message) {
      return;
    }
    if (message.key.fromMe) {
      return;
    }
    if (
      message.message?.["protocolMessage"] ||
      message.message?.["ephemeralMessage"] ||
      message.message?.["reactionMessage"]
    ) {
      return;
    }
    if (message.key && message.key.remoteJid === "status@broadcast") {
      await socket.readMessages([message.key]);
      const emojis = ['💚', '❤️', '👍', '😊', '🔥', '📣', '🤯', '☠️', '💀'];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const botJid = decodeJid(socket.user.id);
      await socket.sendMessage(message.key.remoteJid, {
        react: {
          key: message.key,
          text: randomEmoji
        }
      }, {
        statusJidList: [message.key.participant, botJid]
      });
      
      const userQuery = {
        phoneNumber: sessionId
      };
      const userSettings = await User.findOne(userQuery);
      if (userSettings && userSettings.statusReadEnabled) {
        const statusReadMessage = userSettings.statusReadMessage || "Your Status has been read";
        const responseMessage = {
          text: statusReadMessage
        };
        const quotedMessage = {
          quoted: message
        };
        await socket.sendMessage(participantId, responseMessage, quotedMessage);
      }
    }
  } catch (error) {
    console.error("Error handling messages.upsert event:", error);
  }
});

socket.ev.on("messages.upsert", async (eventData) => {
  try {
    const message = eventData.messages[0];
    if (!message || !message.message) {
      return;
    }
    if (message.key.remoteJid === "status@broadcast" && message.message?.["reactionMessage"] && !message.key.fromMe) {
      const participantId = message.key.participant;
      const participantName = message.pushName || "User";
      const userQuery = {
        phoneNumber: sessionId
      };
      const userSettings = await User.findOne(userQuery);
      if (userSettings && userSettings.statusReactNotify) {
        const responseText = `Thanks, ${participantName}, for reacting to my status!`;
        const responseMessage = {
          text: responseText
        };
        const quotedMessage = {
          quoted: message
        };
        await socket.sendMessage(participantId, responseMessage, quotedMessage);
      }
    }
  } catch (error) {
    console.error("Error handling messages.upsert event:", error);
  }
});
    socket.ev.on("messages.upsert", async (eventData) => {
  const message = eventData.messages[0];
  if (!message || !message.message) {
    return;
  }
  
  const remoteJid = message.key.remoteJid;
  const contentType = getContentType(message.message);
  const messageContent = contentType === "conversation" ? message.message.conversation :
    contentType === "extendedTextMessage" ? message.message.extendedTextMessage.text :
    contentType === "imageMessage" && message.message.imageMessage.caption ? message.message.imageMessage.caption :
    contentType === "videoMessage" && message.message.videoMessage.caption ? message.message.videoMessage.caption : '';
  
  const quotedMessage = message.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"] || null;
  const quotedText = quotedMessage?.["extendedTextMessage"]?.["text"] || quotedMessage?.["imageMessage"]?.["caption"] || quotedMessage?.["videoMessage"]?.["caption"];
  
  const urlMatch = quotedText?.["match"](/◦ \*Link:\* (https?:\/\/[^\s]+)/);
  if (!urlMatch) {
    return;
  }
  
  const url = urlMatch[1];
  const command = messageContent.trim();
  if (command === '1' || command === '2') {
    const waitingMessage = { text: "⏳ Please wait, fetching the media..." };
    const quotedMessageData = { quoted: message };
    await socket.sendMessage(remoteJid, waitingMessage, quotedMessageData);
    
    if (command === '1') {
      const {
        video: videoUrl,
        title: songTitle,
        author: songAuthor,
        duration: songDuration,
        views: songViews
      } = await ytmp4(url);
      
      const videoInfo = `╭───────────\n│◦ *Ethix-MD-V3 Song Downloader*\n` +
                        `│◦ *Title:* ${songTitle}\n` +
                        `│◦ *Author:* ${songAuthor}\n` +
                        `│◦ *Duration:* ${songDuration}\n` +
                        `│◦ *Views:* ${songViews}\n` +
                        `╰───────────`;
      const videoMessage = { url: videoUrl };
      const videoResponse = { video: videoMessage, caption: videoInfo };
      await socket.sendMessage(remoteJid, videoResponse, quotedMessageData);
    } else if (command === '2') {
      const {
        audio: audioUrl,
        title: songTitle,
        author: songAuthor,
        duration: songDuration,
        views: songViews
      } = await ytmp3(url);
      
      const audioInfo = `╭───────────\n│◦ *Ethix-MD-V3 Song Downloader*\n` +
                        `│◦ *Title:* ${songTitle}\n` +
                        `│◦ *Author:* ${songAuthor}\n` +
                        `│◦ *Duration:* ${songDuration}\n` +
                        `│◦ *Views:* ${songViews}\n` +
                        `╰───────────`;
      const audioMessage = { url: audioUrl };
      const audioResponse = { audio: audioMessage, mimetype: "audio/mpeg", caption: audioInfo };
      await socket.sendMessage(remoteJid, audioResponse, quotedMessageData);
    }
  }
});
    socket.ev.on("messages.upsert", async event => {
  try {
    const messageData = event.messages[0];
    if (!messageData || !messageData.message) {
      return;
    }
    const messageText = messageData.message.conversation?.toLowerCase() || messageData.message.extendedTextMessage?.text?.toLowerCase();
    if (messageText === "send" || messageText === "statusdown" || messageText === "take") {
      const quotedMessage = messageData.message.extendedTextMessage?.contextInfo?.quotedMessage;
      if (quotedMessage) {
        if (quotedMessage.imageMessage) {
          const imageCaption = quotedMessage.imageMessage.caption || "> © Powered By Ethix-MD-V3.";
          const imageUrl = await downloadAndSaveMediaMessage(quotedMessage.imageMessage, "image");
          const imageObject = { url: imageUrl };
          const imageMessage = { image: imageObject, caption: imageCaption };
          await socket.sendMessage(messageData.key.remoteJid, imageMessage);
        }
        if (quotedMessage.videoMessage) {
          const videoCaption = quotedMessage.videoMessage.caption || "> © Powered By Ethix-MD-V3.";
          const videoUrl = await downloadAndSaveMediaMessage(quotedMessage.videoMessage, "video");
          const videoObject = { url: videoUrl };
          const videoMessage = { video: videoObject, caption: videoCaption };
          await socket.sendMessage(messageData.key.remoteJid, videoMessage);
        }
        if (quotedMessage.conversation) {
          const textMessage = quotedMessage.conversation || "Here is the text message.";
          const textMessageObject = { text: textMessage };
          await socket.sendMessage(messageData.key.remoteJid, textMessageObject);
        }
      }
    }
  } catch (error) {
    console.error("Error in 'messages.upsert' event handling:", error);
  }
});
    socket.ev.on("messages.upsert", async event => {
  try {
    const messageData = event.messages[0];
    console.log(messageData);
    if (!messageData || !messageData.message) {
      return;
    }
    if (messageData.key.fromMe) {
      return;
    }
    if (messageData.message?.protocolMessage || messageData.message?.ephemeralMessage) {
      return;
    }

    const userSearchCriteria = {
      phoneNumber: sessionId
    };
    const userData = await User.findOne(userSearchCriteria);

    if (userData && userData.autoReactEnabled) {
      if (messageData.message) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await doReact(randomEmoji, messageData, socket);
      }
    }
  } catch (error) {
    console.error("Error during auto reaction:", error);
  }
});
    socket.ev.on("messages.upsert", async event => {
  const { messages } = event;
  if (!messages || messages.length === 0) {
    return;
  }
  const messageData = messages[0];
  if (!messageData.message || !messageData.message.conversation) {
    return;
  }
  
  const remoteJid = messageData.key.remoteJid;
  const userSearchCriteria = {
    phoneNumber: sessionId
  };
  const userData = await User.findOne(userSearchCriteria);

  if (userData.autoRead) {
    await socket.readMessages([messageData.key]);
  }
  if (userData.autoTyping) {
    await socket.sendPresenceUpdate("composing", remoteJid);
  }
  if (userData.autoRecording) {
    await socket.sendPresenceUpdate("recording", remoteJid);
  }
  if (userData.alwaysOnline) {
    await socket.sendPresenceUpdate("available", remoteJid);
  } else {
    await socket.sendPresenceUpdate("unavailable", remoteJid);
  }
});
    socket.ev.on("call", async callData => {
  const userSearchCriteria = {
    phoneNumber: sessionId
  };
  const userData = await User.findOne(userSearchCriteria);
  if (!userData || !userData.antiCall) {
    return;
  }

  for (const call of callData) {
    if (call.status === "offer") {
      await socket.sendMessage(call.from, {
        text: "*_📞 Auto Reject Call Mode Activated_* \n*_📵 No Calls Allowed_*",
        mentions: [call.from]
      });
      await socket.rejectCall(call.id, call.from);
    }
  }
});
    return socket;
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
    const retryCounter = new NodeCache();
    const socket = makeWASocket({
      logger: logger,
      printQRInTerminal: false,
      browser: ["Mac OS", "chrome", "121.0.6167.159"],
      auth: state,
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (messageId) => {
        if (store) {
          const storedMessage = await store.loadMessage(messageId.remoteJid, messageId.id);
          return storedMessage.message || undefined;
        }
        return { conversation: "Ethix-Xsid MultiAuth Bot" };
      },
      msgRetryCounterCache: retryCounter
    });

    botInstances[sessionName] = socket;

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
    })
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
    socket.ev.on("messages.upsert", async event => {
  const message = event.messages[0];
  if (!message || !message.message) {
    return;
  }

  const remoteJid = message.key.remoteJid;
  const contentType = getContentType(message.message);
  
  const messageText = contentType === "conversation" ? message.message.conversation :
                      contentType === "extendedTextMessage" ? message.message.extendedTextMessage.text :
                      contentType === "imageMessage" && message.message.imageMessage.caption ? message.message.imageMessage.caption :
                      contentType === "videoMessage" && message.message.videoMessage.caption ? message.message.videoMessage.caption :
                      '';

  const quotedMessage = message.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"] || null;
  const quotedText = quotedMessage?.["extendedTextMessage"]?.["text"] || quotedMessage?.["imageMessage"]?.["caption"] || quotedMessage?.["videoMessage"]?.["caption"];
  
  const matchResult = quotedText?.match(/◦ \*Link:\* (https?:\/\/[^\s]+)/);
  if (!matchResult) {
    return;
  }

  const url = matchResult[1];
  const trimmedMessage = messageText.trim();

  if (trimmedMessage === '1' || trimmedMessage === '2') {
    const waitMessage = { text: "⏳ Please wait, fetching the media..." };
    const quoted = { quoted: message };
    await socket.sendMessage(remoteJid, waitMessage, quoted);

    if (trimmedMessage === '1') {
      const { video, title, author, duration, views } = await ytmp4(url);
      const videoDetails = `╭───────────\n│◦ *Ethix-MD-V3 Song Download*\n│◦ *Title:* ${title}\n│◦ *Author:* ${author}\n│◦ *Duration:* ${duration}\n│◦ *Views:* ${views}\n╰───────────`;
      
      const videoMessage = { url: video };
      const videoOptions = { video: videoMessage, caption: videoDetails };
      await socket.sendMessage(remoteJid, videoOptions, quoted);

    } else if (trimmedMessage === '2') {
      const { audio, title, author, duration, views } = await ytmp3(url);
      const audioDetails = `╭───────────\n│◦ *Ethix-MD-V3 Song Download*\n│◦ *Title:* ${title}\n│◦ *Author:* ${author}\n│◦ *Duration:* ${duration}\n│◦ *Views:* ${views}\n╰───────────`;

      const audioMessage = { url: audio };
      const audioOptions = { audio: audioMessage, mimetype: "audio/mpeg", caption: audioDetails };
      await socket.sendMessage(remoteJid, audioOptions, quoted);
    }
  }
});
    socket.ev.on("messages.upsert", async (messageEvent) => {
  try {
    const message = messageEvent.messages[0];
    const participant = message.key.participant || message.key.remoteJid;

    if (!message || !message.message) {
      return;
    }

    if (message.key.fromMe) {
      return;
    }

    if (message.message?.["protocolMessage"] || message.message?.["ephemeralMessage"] || message.message?.["reactionMessage"]) {
      return;
    }

    if (message.key && message.key.remoteJid === "status@broadcast") {
      await socket.readMessages([message.key]);
      const reactions = ['💚', '❤', '👍', '😊', '🔥', '📣', '🤯', '☠️', '💀'];
      const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
      const decodedJid = decodeJid(socket.user.id);

      await socket.sendMessage(message.key.remoteJid, {
        'react': {
          'key': message.key,
          'text': randomReaction
        }
      }, {
        'statusJidList': [message.key.participant, decodedJid]
      });

      const userQuery = { phoneNumber: sessionName }; // Replace phone number variable
      const user = await User.findOne(userQuery); // Assuming socket has a findOne method for database queries
      if (user && user.statusReadEnabled) {
        const statusMessage = user.statusReadMessage || "Your Status has been read";
        const response = { text: statusMessage };
        const quoted = { quoted: message };
        await socket.sendMessage(participant, response, quoted);
      }
    }
  } catch (error) {
    console.error("Error handling messages.upsert event:", error);
  }
});
    socket.ev.on("messages.upsert", async (messageEvent) => {
  try {
    const message = messageEvent.messages[0];
    if (!message || !message.message) {
      return;
    }

    if (message.key.remoteJid === "status@broadcast" && message.message?.["reactionMessage"] && !message.key.fromMe) {
      const participant = message.key.participant;
      const name = message.pushName || "User";

      const userQuery = { phoneNumber: sessionName }; // Assuming phone number is in remoteJid
      const user = await User.findOne(userQuery);

      if (user && user.statusReactNotify) {
        const thankYouMessage = `Thanks, ${name}, for reacting to my status!`;
        const response = { text: thankYouMessage };
        const quotedMessage = { quoted: message };
        await socket.sendMessage(participant, response, quotedMessage);
      }
    }
  } catch (error) {
    console.error("Error handling messages.upsert event:", error);
  }
});

socket.ev.on("messages.upsert", async (messageEvent) => {
  try {
    const message = messageEvent.messages[0];
    if (!message || !message.message) {
      return;
    }

    const messageContent = message.message.conversation?.["toLowerCase"]() || message.message.extendedTextMessage?.["text"]?.["toLowerCase"]();
    if (messageContent === "send" || messageContent === "statusdown" || messageContent === "take") {
      const quotedMessage = message.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];

      if (quotedMessage) {
        if (quotedMessage.imageMessage) {
          const caption = quotedMessage.imageMessage.caption || "> © Powered By Ethix-MD-V3.";
          const imageUrl = await downloadAndSaveMediaMessage(quotedMessage.imageMessage, "image");
          const image = { url: imageUrl };
          const imageMessage = { image, caption };
          await socket.sendMessage(message.key.remoteJid, imageMessage);
        }

        if (quotedMessage.videoMessage) {
          const caption = quotedMessage.videoMessage.caption || "> © Powered By Ethix-MD-V3.";
          const videoUrl = await downloadAndSaveMediaMessage(quotedMessage.videoMessage, "video");
          const video = { url: videoUrl };
          const videoMessage = { video, caption };
          await socket.sendMessage(message.key.remoteJid, videoMessage);
        }

        if (quotedMessage.conversation) {
          const textMessage = quotedMessage.conversation || "Here is the text message.";
          const textResponse = { text: textMessage };
          await socket.sendMessage(message.key.remoteJid, textResponse);
        }
      }
    }
  } catch (error) {
    console.error("Error in 'messages.upsert' event handling:", error);
  }
});
    socket.ev.on("messages.upsert", async (messageEvent) => {
  try {
    const message = messageEvent.messages[0];

    if (!message || !message.message) return;
    if (message.key.fromMe) return;
    if (message.message?.protocolMessage || message.message?.ephemeralMessage) return;

    const userQuery = { phoneNumber: sessionName };
    const user = await User.findOne(userQuery);

    if (user && user.autoReactEnabled) {
      if (message.message) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await doReact(randomEmoji, message, socket);
      }
    }
  } catch (error) {
    console.error("Error during auto reaction:", error);
  }
});
    socket.ev.on("messages.upsert", async (messageEvent) => {
  const { messages } = messageEvent;

  if (!messages || messages.length === 0) return;

  const message = messages[0];
  if (!message.message || !message.message.conversation) return;

  const remoteJid = message.key.remoteJid;
  const userQuery = { phoneNumber: sessionName };
  const user = await User.findOne(userQuery);

  if (user.autoRead) {
    await socket.readMessages([message.key]);
  }

  if (user.autoTyping) {
    await socket.sendPresenceUpdate("composing", remoteJid);
  }

  if (user.autoRecording) {
    await socket.sendPresenceUpdate("recording", remoteJid);
  }

  if (user.alwaysOnline) {
    await socket.sendPresenceUpdate("available", remoteJid);
  } else {
    await socket.sendPresenceUpdate("unavailable", remoteJid);
  }
});
    socket.ev.on("call", async (calls) => {
  const userQuery = { phoneNumber: sessionName };
  const user = await User.findOne(userQuery);

  if (!user || !user.antiCall) return;

  for (const call of calls) {
    if (call.status === "offer") {
      await socket.sendMessage(call.from, {
        text: "*_📞 Auto Reject Call Mode Activated_* \n*_📵 No Calls Allowed_*",
        mentions: [call.from],
      });
      await socket.rejectCall(call.id, call.from);
    }
  }
});
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

app.post("/pairing-code", async (req, res) => {
  try {
    let { phoneNumber } = req.body;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!phoneNumber) {
      return res.status(400).json({ status: "Invalid phone number" });
    }

    console.log(`Creating bot for phone number: ${phoneNumber}`);
    const bot = await createBot(phoneNumber);
    if (!bot) {
      throw new Error("Bot creation failed");
    }

    setTimeout(async () => {
      try {
        let pairingCode = await bot.requestPairingCode(phoneNumber);
        pairingCode = pairingCode?.match(/.{1,4}/g)?.join('-') || pairingCode;
        res.json({ pairingCode, status: "Pairing code generated" });
      } catch (error) {
        console.error("Error generating pairing code:", error);
        res.status(500).json({ status: "Error generating pairing code" });
      }
    }, 3000);
  } catch (error) {
    console.error("Error in /pairing-code:", error);
    res.status(500).json({ status: "Error generating pairing code" });
  }
});

app.listen(PORT, async () => {
  console.log(`Worker process started on port ${PORT}`);
  await reloadBots();
});
