import { readdir } from 'fs/promises';
import path from 'path';
import os from 'os';
import moment from 'moment-timezone';

export const execute = async (Matrix, mek, { pushName, from, prefix }) => {
    const plugins = [];
    const pluginsDir = path.resolve('./plugins');
    const sessionsDir = path.resolve('./sessions');
    const restoreSessionsDir = path.resolve('./restored_sessions');
    const botName = "sʜɪᴢxʏ ʙᴏᴛ ᴍᴅ ★★★";
    const freeRam = formatBytes(os.freemem());
    const totalRam = formatBytes(os.totalmem());
    const platform = 'vps (Linux generic)';
    const owner = '13056978303';
    const ownerName = '𝙼𝚛𝚕𝚒𝚝 𝙰𝚗𝚍𝚢';

    const currentTime = moment().tz("America/Port-au-Prince").format("HH:mm:ss");
    const day = moment().tz("America/Port-au-Prince").format("dddd");
    const date = moment().tz("America/Port-au-Prince").format("YYYY-MM-DD");
    const uptimeFormatted = formatUptime(process.uptime() * 1000);

    try {
        const pluginFiles = await readdir(pluginsDir);
        const pluginCount = pluginFiles.filter(file => file.endsWith('.js')).length;
        const sessionFolders = await readdir(sessionsDir);
        const restoreSessionFolders = await readdir(restoreSessionsDir);
        const activeSessionsCount = sessionFolders.length + restoreSessionFolders.length;

        for (const file of pluginFiles) {
            if (file.endsWith('.js')) {
                const pluginModule = await import(path.join(pluginsDir, file));
                const commands = Array.isArray(pluginModule.command) ? pluginModule.command : [pluginModule.command];
                const category = pluginModule.category || 'General';

                for (const command of commands) {
                    if (command) {
                        plugins.push({ command, category });
                    }
                }
            }
        }

        let menuMessage = `\`\`\`┌───═❖═『 LEVANTER BETA 』═❖═───┐\n`;
        menuMessage += `│\n`;
        menuMessage += `│ ✦ Prefix : ${prefix}\n`;
        menuMessage += `│ ✦ User : ${pushName}\n`;
        menuMessage += `│ ✦ Creator : andy_mr_lit\n`;
        menuMessage += `│ ✦ User connected : *${activeSessionsCount}*\n`;
        menuMessage += `│ ✦ Version : 1.0.0-beta\n`;
        menuMessage += `│ ✦ Uptime : ${uptimeFormatted}\n`;
        menuMessage += `│ ✦ Platform : ${platform}\n`;
        menuMessage += `│\n`;
        menuMessage += `└───═❖═════════════════❖═───┘\`\`\`\n\n`;

        const categories = {};
        for (const { command, category } of plugins) {
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(command);
        }

        const categoryOrder = ['Downloader', 'AI', 'Converter', 'Main', 'General', 'Owner'];
        for (const category of categoryOrder) {
            if (categories[category]) {
                menuMessage += `╭━━━━━━━━━━━━━━━⪼\n`;
                menuMessage += `*\`➤❖${category.toUpperCase()} ᴍᴇɴᴜ❖\`*\n`;
                menuMessage += `╰━━━━━━━━━━━━━━━⪼\n\n`;
                for (const command of categories[category]) {
                    menuMessage += `*◦ 𖣘ᴄᴏᴍᴍᴀɴᴅ:* ${command}\n\n`;
                }
            }
        }

        menuMessage += `> *\`© 𝚈𝚘𝚘 𝙼𝚏 𝚃𝚑𝚒𝚜 𝙱𝚘𝚝 𝚆𝚊𝚜 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙼𝚛𝚕𝚒𝚝 𝙰𝚗𝚍𝚢 ♉︎\`*`;

        await Matrix.sendMessage(mek.key.remoteJid, { 
            image: { url: 'https://img101.pixhost.to/images/404/552534361_than.jpg' },
            caption: menuMessage,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Yo ${pushName}, Welcome to ${botName}!`,
                    body: `${botName} - Always Ready!`,
                    thumbnailUrl: "https://img101.pixhost.to/images/404/552534361_than.jpg",
                    mediaType: 2,
                    mediaUrl: "https://img101.pixhost.to/images/404/552534361_than.jpg"
                }
            },
        }, { quoted: mek });
    } catch (err) {
        console.error('Error loading plugins:', err);
    }
};

function formatUptime(ms) {
    let seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const command = ['menu'];
export const description = 'Get the list of all available commands.';
export const category = 'Main';