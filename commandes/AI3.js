const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const Taphere = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    cm.map(async (com, index) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");

    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
╭─────═━┈┈━═──━┈⊷
┇ ʙᴏᴛ ɴᴀᴍᴇ: *ᴅᴜʟʟᴀʜ ᴍᴅ*
┇ ᴍᴏᴅᴇ: *${mode}*
┇ ᴘʀᴇғɪx: *[ ${prefixe} ]*
┇ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┇ ᴅᴀᴛᴇ: *${date}*
┇ ᴛɪᴍᴇ: *${temps}*
┇ ᴄᴀᴘᴀᴄɪᴛʏ: ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
╰─────═━┈┈━═──━┈⊷

${readmore} `; // Adding the read-more effect

    const botPicUrl = mybotpic(); // This returns the bot picture URL

    try {
        if (botPicUrl.match(/\.(mp4|gif)$/i)) {
            // If the bot picture is a video or GIF
            await zk.sendMessage(dest, {
                video: { url: botPicUrl },
                caption: infoMsg,
                footer: "*Dullah MD*, developed by Ibrahim Adams",
                gifPlayback: true,
            }, { quoted: ms });
        } else if (botPicUrl.match(/\.(jpeg|png|jpg)$/i)) {
            // If the bot picture is an image
            await zk.sendMessage(dest, {
                image: { url: botPicUrl },
                caption: infoMsg,
                footer: "*Dullah MD*, developed by Ibrahim Adams",
            }, { quoted: ms });
        } else {
            // Default text response if no media type matches
            repondre(infoMsg);
        }
    } catch (e) {
        console.log("🥵🥵 Error sending bot picture: " + e);
        repondre("🥵🥵 Error sending bot picture: " + e);
    }

    // Preparing commands to display
    let commandList = "Available Commands:\n";
    for (let category in coms) {
        commandList += `\n*${category}*\n`;
        commandList += coms[category].map((cmd) => `- ${prefixe}${cmd}`).join("\n") + "\n";
    }

    // Sending commands after read-more
    try {
        await zk.sendMessage(dest, {
            text: commandList,
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵🥵 Error sending commands: " + e);
        repondre("🥵🥵 Error sending commands: " + e);
    }

    // Sending audio as a voice note
    const audioUrl = "https://files.catbox.moe/bewdug.mp3"; // URL to the audio file
    try {
        await zk.sendMessage(dest, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            ptt: true, // Send as a voice note
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵🥵 Error sending audio as voice note: " + e);
        repondre("🥵🥵 Error sending audio as voice note: " + e);
    }
});
