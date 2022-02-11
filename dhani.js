//══════════[ NOTE]════════════════════════════//
//note:sorry guys gw bakalan pensi tapi santay aja nanti gw bakal balik lagi
//Scrip Bot masih dalam tahap pengembangan
//udah no pw free apikey masa gak subscribe channel yt Dhani Ofc
//untuk THQ TO nya jangan kalian ubah-ubah nanti eror
//yang mau ambil case ambil aja jangan lupa add nama gw di thq to 😁
//══════════[ PERINGATAN]════════════════════════════//
//yang waktu kemaren gw pernah update scrip bot yang dari perangkat tertaut kalian keluarin aja
//terus scan bot yang ini
//klo masih gak paham hubungi/chat gw aja
//klo gak liat tutorial yang gw kasih diyt
//bagi yang blm scan gak usah ngikutin tutorial nya
//══════════[ THANKS TO]════════════════════════════//
//~ZEEONE
//~DHANIGANS
//~DHANI OFC
//~RYUU
//~AKIRA
//~HELGA
//══════════[ THANKS DAH MAKE SCRIP NYA]════════════════════════════//

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const client = new WAConnection()

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
const { lirikLagu } = require('./lib/lirik.js')

//══════════[ Setting ]══════════//

dhakey = apikey.dhakey
self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
autocomposing = setting.autocomposing
autorecording = setting.autorecording
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
fake = setting.Fake
gaya = setting.gaya
const fakeimage = fs.readFileSync ('./media/dhani.jpg')
const fakedhani = fs.readFileSync ('./media/thumb.jpg')

//══════════[ VARIABEL]══════════//
var hx = require('hxz-api')
//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { wikiSearch } = require('./lib/wiki.js')
const yts = require( 'yt-search')
const ggs = require('google-it')
const brainly = require('brainly-scraper')
const ytsd = require('ytsr')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const imgbb = require('imgbb-uploader')

//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}

//══════════[ Module Export ]══════════//
		
module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Dhani.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'Proses kak',
eror: 'Maaf terjadi kesalahan !!',
success: 'Sukses️',
error: {
stick: 'Itu bukan sticker kak !!',
Iv: 'Link invalid !!'
},
only: {
nsfw: 'Fitur nsfw belum di aktifkan silakan hubungi admin untuk mengaktifkan',
group: 'Fitur khusus grup !!',
owner: 'Fitur khusus owner !!',
admin: 'Fitur khusus admin !!',
Badmin: 'Silakan jadikan bot admin dulu !!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Dhani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Dhani.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Dhani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return Dhani.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
Dhani.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Dhani.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            Dhani.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/dhani.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            Dhani.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/dhani.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakedhani, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//══════════[ Storage ]══════════//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Dhani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Dhani.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Dhani.sendMessage(from, hasil, type, options).catch(e => {
	       Dhani.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
            })
           })
          })
         })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Dhani.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
           let anu = await Dhani.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/dhani.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Dhani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Dhani.groupRemove(from, [sender])
}     

//══════════[ Dll ]══════════//

if (autoread){
Dhani.chatRead(from, "read")
} else if (autocomposing) {
Dhani.updatePresence(from, Presence.composing)
} else if (autorecording) {
Dhani.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ FITUR FITURNYA ]══════════//

case 'allmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

\`\`\`❏「 WAKTU INDONESIA 」\`\`\`
${gaya} *Tanggal* : ${tanggal}
${gaya} *Wib* : ${time}
${gaya} *Wita* : ${timeMak}
${gaya} *Wit* : ${timeJay}

\`\`\`❏「 INFO BOT 」\`\`\`
${gaya} *Nama Bot* : ${botname}
${gaya} *Nama Owner* : ${ownername}
${gaya} *Mode :* ${self ? "Self" : "Public"}
${gaya} *Autoread* : ${autoread ? "Aktif" : "Off"}
${gaya} *Autoketik* : ${autoketik ? "Aktif" : "Off"}
${gaya} *Autovn* : ${autovn ? "Aktif" : "Off"}

╔═❲ *GROUP MENU* ❳═>
║${gaya} ${prefix}antilink _on / off_
║${gaya} ${prefix}antivirtex _on / off_
║${gaya} ${prefix}welcome _on / off_
║${gaya} ${prefix}group _buka / tutup_
║${gaya} ${prefix}promote _@tag / reply_
║${gaya} ${prefix}demote _@tag / reply_
║${gaya} ${prefix}add _628xx_
║${gaya} ${prefix}kick _@tag / reply_
║${gaya} ${prefix}setpp _reply_
║${gaya} ${prefix}setdesc _teks_
║${gaya} ${prefix}setname _teks_
║${gaya} ${prefix}hidetag _teks_
║${gaya} ${prefix}linkgrup
║${gaya} ${prefix}infogrup
║${gaya} ${prefix}getbio
║${gaya} ${prefix}infobot
║${gaya} ${prefix}listonline
║${gaya} ${prefix}resetlinkgrup
║${gaya} ${prefix}googlesearch _teks_
║${gaya} ${prefix}wiki _teks_
║${gaya} ${prefix}hacked
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *JADIBOT MENU* ❳═>
║${gaya} ${prefix}jadibot
║${gaya} ${prefix}stopjadibot
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *DOWNLOAD MENU* ❳═>
║${gaya} ${prefix}ytsearch _Link_
║${gaya} ${prefix}ytmp3 _Link_
║${gaya} ${prefix}ytmp4 _Link_
║${gaya} ${prefix}joox _teks_
║${gaya} ${prefix}tiktokaudio _Link_
║${gaya} ${prefix}tiktokwm _Link_
║${gaya} ${prefix}tiktoknowm _Link_
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *GAME MENU* ❳═>
║${gaya} ${prefix}caklontong
║${gaya} ${prefix}family100
║${gaya} ${prefix}tebakbendera
║${gaya} ${prefix}tebakgambar
║${gaya} ${prefix}suit [ _gunting/batu/kertas_ ]_
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *FUN MENU NEW* ❳═>
║${gaya} ${prefix}bego
║${gaya} ${prefix}tolol
║${gaya} ${prefix}pinter
║${gaya} ${prefix}pintar
║${gaya} ${prefix}asu
║${gaya} ${prefix}bodoh
║${gaya} ${prefix}gay
║${gaya} ${prefix}lesby
║${gaya} ${prefix}bajingan
║${gaya} ${prefix}jancok
║${gaya} ${prefix}anjing
║${gaya} ${prefix}ngentod
║${gaya} ${prefix}ngentot
║${gaya} ${prefix}monyet
║${gaya} ${prefix}mastah
║${gaya} ${prefix}newbie
║${gaya} ${prefix}bangsat
║${gaya} ${prefix}bangke
║${gaya} ${prefix}sange
║${gaya} ${prefix}sangean
║${gaya} ${prefix}dakjal
║${gaya} ${prefix}horny
║${gaya} ${prefix}wibu
║${gaya} ${prefix}puki
║${gaya} ${prefix}pantek
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *MAKER MENU* ❳═>
║${gaya} ${prefix}blackpink _Teks_
║${gaya} ${prefix}halloween _Teks_
║${gaya} ${prefix}halloween2 _Teks_
║${gaya} ${prefix}3dgradient _Teks_
║${gaya} ${prefix}naturalleaves _Teks_
║${gaya} ${prefix}dropwater _Teks_
║${gaya} ${prefix}blood _Teks_
║${gaya} ${prefix}blood2 _Teks_
║${gaya} ${prefix}snow _Teks_
║${gaya} ${prefix}cloud _Teks_
║${gaya} ${prefix}neondevil _Teks_
║${gaya} ${prefix}neon _Teks_
║${gaya} ${prefix}glowingneonlight _Teks_
║${gaya} ${prefix}neonlight _Teks_
║${gaya} ${prefix}neonlight2 _Teks_
║${gaya} ${prefix}neonlight3 _Teks_
║${gaya} ${prefix}greenneon _Teks_
║${gaya} ${prefix}toxic _Teks_
║${gaya} ${prefix}matrix _Teks_
║${gaya} ${prefix}thunder _Teks_
║${gaya} ${prefix}thunder2 _Teks_
║${gaya} ${prefix}bokeh _Teks_
║${gaya} ${prefix}carbontext _Teks_
║${gaya} ${prefix}christmas _Teks_
║${gaya} ${prefix}breakwall _Teks_
║${gaya} ${prefix}roadwarning _Teks_
║${gaya} ${prefix}engraved3d _Teks_
║${gaya} ${prefix}embossed _Teks_
║${gaya} ${prefix}3dstone _Teks_
║${gaya} ${prefix}futuristic _Teks_
║${gaya} ${prefix}sketch _Teks_
║${gaya} ${prefix}bluecircuit _Teks_
║${gaya} ${prefix}space _Teks_
║${gaya} ${prefix}magmahot _Teks_
║${gaya} ${prefix}artpapercut _Teks_
║${gaya} ${prefix}3dluxurygold _Teks_
║${gaya} ${prefix}robotr2d2 _Teks_
║${gaya} ${prefix}harrypotter _Teks_
║${gaya} ${prefix}glitch3 _Teks_
║${gaya} ${prefix}greenhorror _Teks_
║${gaya} ${prefix}horrorgift _Teks_
║${gaya} ${prefix}erodedmetal _Teks_
║${gaya} ${prefix}3dglowingmetal _Teks_
║${gaya} ${prefix}blackmetal _Teks_
║${gaya} ${prefix}bluemetal _Teks_
║${gaya} ${prefix}shynimetal _Teks_
║${gaya} ${prefix}rustymetal _Teks_
║${gaya} ${prefix}metalpurple _Teks_
║${gaya} ${prefix}metalrainbow _Teks_
║${gaya} ${prefix}metaldarkgold _Teks_
║${gaya} ${prefix}colorfullluxurymetal _Teks_
║${gaya} ${prefix}glossybluemetal _Teks_
║${gaya} ${prefix}3dglossymetal _Teks_
║${gaya} ${prefix}3ddeepseametal _Teks_
║${gaya} ${prefix}leddisplayscreen _Teks_
║${gaya} ${prefix}metallic _Teks_
║${gaya} ${prefix}skeleton _Teks_
║${gaya} ${prefix}glossymetallic _Teks_
║${gaya} ${prefix}christmastree _Teks_
║${gaya} ${prefix}sparklesmerrychristmas _Teks_
║${gaya} ${prefix}countryflag3d _Teks_
║${gaya} ${prefix}americanflag3d _Teks_
║${gaya} ${prefix}3dscfi _Teks_
║${gaya} ${prefix}3drainbow _Teks_
║${gaya} ${prefix}3dwaterpipe _Teks_
║${gaya} ${prefix}3dchrome _Teks_
║${gaya} ${prefix}bluegem _Teks_
║${gaya} ${prefix}purplegem _Teks_
║${gaya} ${prefix}pinkcandy _Teks_
║${gaya} ${prefix}transformer _Teks_
║${gaya} ${prefix}berry _Teks_
║${gaya} ${prefix}brokenglass _Teks_
║${gaya} ${prefix}3drealistic _Teks_
║${gaya} ${prefix}3dunderwater _Teks_
║${gaya} ${prefix}writeinsandsummerbeach
║${gaya} ${prefix}sandwriting _Teks_
║${gaya} ${prefix}foilballoon _Teks_
║${gaya} ${prefix}3dglue _Teks_
║${gaya} ${prefix}1917 _Teks_
║${gaya} ${prefix}minion _Teks_
║${gaya} ${prefix}doubleexposure _Teks_
║${gaya} ${prefix}holographic3d _Teks_
║${gaya} ${prefix}deluxegold _Teks_
║${gaya} ${prefix}deluxesilver _Teks_
║${gaya} ${prefix}glossycarbon _Teks_
║${gaya} ${prefix}fabric _Teks_
║${gaya} ${prefix}xmascards3d _Teks_
║${gaya} ${prefix}wicker _Teks_
║${gaya} ${prefix}fireworksparkle _Teks_
║${gaya} ${prefix}skeleton _Teks_
║${gaya} ${prefix}ultragloss _Teks_
║${gaya} ${prefix}denim _Teks_
║${gaya} ${prefix}decorategreen _Teks_
║${gaya} ${prefix}peridot _Teks_
║${gaya} ${prefix}rock _Teks_
║${gaya} ${prefix}lava _Teks_
║${gaya} ${prefix}rainbowequalizer _Teks_
║${gaya} ${prefix}purpleglass _Teks_
║${gaya} ${prefix}decorativeglass _Teks_
║${gaya} ${prefix}chocolatecake _Teks_
║${gaya} ${prefix}strawberry _Teks_
║${gaya} ${prefix}koifish _Teks_
║${gaya} ${prefix}bread _Teks_
║${gaya} ${prefix}3dbox _Teks_
║${gaya} ${prefix}freeadvancedglow _Teks_
║${gaya} ${prefix}honey _Teks_
║${gaya} ${prefix}marble _Teks_
║${gaya} ${prefix}marbleslabs _Teks_
║${gaya} ${prefix}icecold _Teks_
║${gaya} ${prefix}fruitjuice _Teks_
║${gaya} ${prefix}abstragold _Teks_
║${gaya} ${prefix}biscuit _Teks_
║${gaya} ${prefix}bagel _Teks_
║${gaya} ${prefix}wood _Teks_
║${gaya} ${prefix}hexagolden _Teks_
║${gaya} ${prefix}wonderfulgraffitiart _Teks_
║${gaya} ${prefix}8bit _Teks1&Teks2_
║${gaya} ${prefix}pornhub _Teks1&Teks2_
║${gaya} ${prefix}glitch _Teks1&Teks2_
║${gaya} ${prefix}glitch2 _Teks1&Teks2_
║${gaya} ${prefix}layered _Teks1&Teks2_
║${gaya} ${prefix}3dsteel _Teks1&Teks2_
║${gaya} ${prefix}realistic _Teks1&Teks2_
║${gaya} ${prefix}lionlogo _Teks1&Teks2_
║${gaya} ${prefix}ninjalogo _Teks1&Teks2_
║${gaya} ${prefix}wolf _Teks1&Teks2_
║${gaya} ${prefix}wolf2 _Teks1&Teks2_
║${gaya} ${prefix}halloween3 _Teks1&Teks2_
║${gaya} ${prefix}marvel _Teks1&Teks2_
║${gaya} ${prefix}marvel2 _Teks1&Teks2_
║${gaya} ${prefix}cinematichorror _Teks_
║${gaya} ${prefix}avengers _Teks1&Teks2_
║${gaya} ${prefix}graffiti3 _Teks1&Teks2_
║${gaya} ${prefix}captainamerica _Teks1&Teks2_
║${gaya} ${prefix}girlneko _Teks1&Teks2_
║${gaya} ${prefix}sadboy _Teks1&Teks2_
║${gaya} ${prefix}makerkaneki _Teks1&Teks2_
║${gaya} ${prefix}rem _Teks1&Teks2_
║${gaya} ${prefix}lolimaker _Teks1&Teks2_
║${gaya} ${prefix}gura _Teks1&Teks2_
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *NEKOPOI MENU* ❳═>
║${gaya} ${prefix}nekopoi1
║${gaya} ${prefix}nekopoi2
║${gaya} ${prefix}nekopoi3
║${gaya} ${prefix}nekopoi4
║${gaya} ${prefix}nekopoi5
║${gaya} ${prefix}nekopoi6
║${gaya} ${prefix}nekopoi7
║${gaya} ${prefix}nekopoi8
║${gaya} ${prefix}nekopoi9
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *ISLAMI MENU* ❳═>
║${gaya} ${prefix}alquran
║${gaya} ${prefix}asmaulhusna
║${gaya} ${prefix}alquranaudio
║${gaya} ${prefix}listsurah
║${gaya} ${prefix}jadwalsholat
║${gaya} ${prefix}kisahnabi
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *REPORT MENU* ❳═>
║${gaya} ${prefix}chatowner
║${gaya} ${prefix}request
║${gaya} ${prefix}bugreport
║${gaya} ${prefix}jawaban
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *RANDOM TEXT* ❳═>
║${gaya} ${prefix}faktaunik
║${gaya} ${prefix}truth
║${gaya} ${prefix}dare
║${gaya} ${prefix}pantun
║${gaya} ${prefix}puisi
║${gaya} ${prefix}quotes
║${gaya} ${prefix}quoteskanye
║${gaya} ${prefix}quotesislami
║${gaya} ${prefix}quotesanime
║${gaya} ${prefix}quotesdilan
║${gaya} ${prefix}quotesff
║${gaya} ${prefix}quotespubg
║${gaya} ${prefix}quoteshacker
║${gaya} ${prefix}katabijak
║${gaya} ${prefix}katailham
║${gaya} ${prefix}katasindiran
║${gaya} ${prefix}katabucin
║${gaya} ${prefix}katabucin2
║${gaya} ${prefix}kataml
║${gaya} ${prefix}katagalau
║${gaya} ${prefix}katagombal
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *RANDOM IMAGE* ❳═>
║${gaya} ${prefix}ppcouple
║${gaya} ${prefix}meme
║${gaya} ${prefix}wallpaperhp
║${gaya} ${prefix}wallpaperhp2
║${gaya} ${prefix}wallpaperkpop
║${gaya} ${prefix}wallpaperblackpink
║${gaya} ${prefix}quotesimage
║${gaya} ${prefix}renungan
║${gaya} ${prefix}wallpapergame
║${gaya} ${prefix}wallpaperpubg
║${gaya} ${prefix}wallpaperhacker
║${gaya} ${prefix}wallpaperharley
║${gaya} ${prefix}wallpaperjoker
║${gaya} ${prefix}wallpapermuslim
║${gaya} ${prefix}wallpapercyberspace
║${gaya} ${prefix}wallpapermountain
║${gaya} ${prefix}wallpaperprogramming
║${gaya} ${prefix}wallpapertechnology
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *ASUPAN MENU* ❳═>
║${gaya} ${prefix}asupan
║${gaya} ${prefix}hijaber
║${gaya} ${prefix}bocil
║${gaya} ${prefix}rikagusriani
║${gaya} ${prefix}santuy
║${gaya} ${prefix}ukhty
║${gaya} ${prefix}gheayubi
║${gaya} ${prefix}nantalia
║${gaya} ${prefix}ghea
║${gaya} ${prefix}chika
║${gaya} ${prefix}mangayutri
║${gaya} ${prefix}alcakenya
║${gaya} ${prefix}aura
║${gaya} ${prefix}delvira
║${gaya} ${prefix}bunga
║${gaya} ${prefix}ayu
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *CECAN MENU* ❳═>
║${gaya} ${prefix}cogan
║${gaya} ${prefix}cecan
║${gaya} ${prefix}cecan2
║${gaya} ${prefix}cogan2
║${gaya} ${prefix}jeni
║${gaya} ${prefix}jiso
║${gaya} ${prefix}justina
║${gaya} ${prefix}lisa
║${gaya} ${prefix}rose
║${gaya} ${prefix}ryujin
║${gaya} ${prefix}china
║${gaya} ${prefix}vietnam
║${gaya} ${prefix}thailand
║${gaya} ${prefix}indonesia
║${gaya} ${prefix}korea
║${gaya} ${prefix}japan
║${gaya} ${prefix}malaysia
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *ANIME MENU* ❳═>
║${gaya} ${prefix}wallpapernaruto
║${gaya} ${prefix}loli
║${gaya} ${prefix}waifu
║${gaya} ${prefix}neko
║${gaya} ${prefix}chara
║${gaya} ${prefix}husbu
║${gaya} ${prefix}milf
║${gaya} ${prefix}cosplay
║${gaya} ${prefix}nekonime
║${gaya} ${prefix}shota
║${gaya} ${prefix}wallml
║${gaya} ${prefix}megumin
║${gaya} ${prefix}poke
║${gaya} ${prefix}sao
║${gaya} ${prefix}lovelive
║${gaya} ${prefix}hsdxd
║${gaya} ${prefix}ana
║${gaya} ${prefix}akira
║${gaya} ${prefix}akiyama
║${gaya} ${prefix}asuna
║${gaya} ${prefix}ayuzawa
║${gaya} ${prefix}boruto
║${gaya} ${prefix}chico
║${gaya} ${prefix}eba
║${gaya} ${prefix}chitoge
║${gaya} ${prefix}deidara
║${gaya} ${prefix}akiyama
║${gaya} ${prefix}elaina
║${gaya} ${prefix}emilia
║${gaya} ${prefix}erza
║${gaya} ${prefix}gremory
║${gaya} ${prefix}hestia
║${gaya} ${prefix}isuzu
║${gaya} ${prefix}itachi
║${gaya} ${prefix}itori
║${gaya} ${prefix}kagura
║${gaya} ${prefix}kaori
║${gaya} ${prefix}kanekii
║${gaya} ${prefix}kotori
║${gaya} ${prefix}kurumi
║${gaya} ${prefix}madara
║${gaya} ${prefix}mikasa
║${gaya} ${prefix}miku
║${gaya} ${prefix}nezuko
║${gaya} ${prefix}sagiri
║${gaya} ${prefix}kanna
║${gaya} ${prefix}shina
║${gaya} ${prefix}shinaka
║${gaya} ${prefix}shinomiya
║${gaya} ${prefix}shizuka
║${gaya} ${prefix}toukachan
║${gaya} ${prefix}tsunade
║${gaya} ${prefix}yotsuba
║${gaya} ${prefix}yuki
║${gaya} ${prefix}yumeko
║${gaya} ${prefix}funart
║${gaya} ${prefix}nino
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *INFORMASI MENU* ❳═>
║${gaya} ${prefix}kbbi
║${gaya} ${prefix}jarak
║${gaya} ${prefix}infogempa
║${gaya} ${prefix}cuaca
║${gaya} ${prefix}covidindo
║${gaya} ${prefix}covidglobal
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *BOKEP MENU* ❳═>
║${gaya} ${prefix}bokep1
║${gaya} ${prefix}bokep2
║${gaya} ${prefix}bokep3
║${gaya} ${prefix}bokep4
║${gaya} ${prefix}bokep5
║${gaya} ${prefix}bokep6
║${gaya} ${prefix}bokep7
║${gaya} ${prefix}bokep8
║${gaya} ${prefix}bokep9
║${gaya} ${prefix}bokep10
║${gaya} ${prefix}bokep11
║${gaya} ${prefix}bokep12
║${gaya} ${prefix}bokep13
║${gaya} ${prefix}bokep14
║${gaya} ${prefix}bokep15
║${gaya} ${prefix}bokep16
║${gaya} ${prefix}bokep17
║${gaya} ${prefix}bokep18
║${gaya} ${prefix}bokep19
║${gaya} ${prefix}bokep20
║${gaya} ${prefix}bokep21
║${gaya} ${prefix}bokep22
║${gaya} ${prefix}bokep23
║${gaya} ${prefix}bokep24
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *Move & Story* ❳═>
║${gaya} ${prefix}cerpen
║${gaya} ${prefix}wattpad
║${gaya} ${prefix}wattpadsearch
║${gaya} ${prefix}lk21
║${gaya} ${prefix}ceritahoror
║${gaya} ${prefix}cersex
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *SERTIFIKAT MENU* ❳═>
║${gaya} ${prefix}serti1
║${gaya} ${prefix}serti2
║${gaya} ${prefix}serti3
║${gaya} ${prefix}nickepep
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *ANIMASI HEWAN* ❳═>
║${gaya} ${prefix}fox
║${gaya} ${prefix}dog
║${gaya} ${prefix}cat
║${gaya} ${prefix}panda
║${gaya} ${prefix}panda1
║${gaya} ${prefix}bird
║${gaya} ${prefix}koala
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *OWNER MENU* ❳═>
║${gaya} ${prefix}infosc
║${gaya} ${prefix}owner
║${gaya} ${prefix}public
║${gaya} ${prefix}self
║${gaya} ${prefix}delete
║${gaya} ${prefix}setnamebot
║${gaya} ${prefix}setbiobot
║${gaya} ${prefix}bc _Teks_
║${gaya} ${prefix}bc2 _Teks_
║${gaya} ${prefix}spam [_teks|jumlah_]
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *CEK MENU* ❳═>
║${gaya} ${prefix}hobby
║${gaya} ${prefix}cantikcek
║${gaya} ${prefix}seberapagay
║${gaya} ${prefix}watak
║${gaya} ${prefix}tercantik
║${gaya} ${prefix}terganteng
║${gaya} ${prefix}tercantik
║${gaya} ${prefix}jadian
║${gaya} ${prefix}bagaimanakah
╚═════════════════❋ཻུ۪۪⸙

╔═❲ *NSFW MENU* ❳═>
║${gaya} ${prefix}hentai
║${gaya} ${prefix}ass
║${gaya} ${prefix}ahegao
║${gaya} ${prefix}bdsm
║${gaya} ${prefix}cuckold
║${gaya} ${prefix}foot
║${gaya} ${prefix}gangbang
║${gaya} ${prefix}glasses
║${gaya} ${prefix}jahy
║${gaya} ${prefix}masturbation
║${gaya} ${prefix}orgy
║${gaya} ${prefix}panties
║${gaya} ${prefix}thighs
║${gaya} ${prefix}nsfwloli
║${gaya} ${prefix}nsfwneko
║${gaya} ${prefix}nsfwtrap
║${gaya} ${prefix}nsfwpussy
║${gaya} ${prefix}nsfwyuri
║${gaya} ${prefix}nsfwlesbian
║${gaya} ${prefix}nsfwclassic
║${gaya} ${prefix}nsfwavatar
║${gaya} ${prefix}nsfwkitsune
║${gaya} ${prefix}nsfwero
║${gaya} ${prefix}nsfwblowjob
║${gaya} ${prefix}nsfwkuni
║${gaya} ${prefix}nsfwfutanari
║${gaya} ${prefix}nsfwholoero
║${gaya} ${prefix}nsfwholo
║${gaya} ${prefix}nsfwkemonomimi
║${gaya} ${prefix}nsfwketa
║${gaya} ${prefix}nsfwpussyart
║${gaya} ${prefix}nsfwgirlsolo
║${gaya} ${prefix}nsfwanal
║${gaya} ${prefix}nsfwbj
║${gaya} ${prefix}nsfwtits
║${gaya} ${prefix}nsfwboobs
║${gaya} ${prefix}nsfwcumsluts
║${gaya} ${prefix}nsfweroyuri
║${gaya} ${prefix}nsfwfeet
║${gaya} ${prefix}nsfwfemdom
║${gaya} ${prefix}nsfwfeet
║${gaya} ${prefix}nsfwcumarts
║${gaya} ${prefix}nsfweroneko
║${gaya} ${prefix}nsfwspank     
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *STICKER MENU* ❳═>
║${gaya} ${prefix}sticker _reply_
║${gaya} ${prefix}toimg _reply_
║${gaya} ${prefix}attp _teks_
║${gaya} ${prefix}ttp _teks_
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *NULIS MENU* ❳═>
║${gaya} ${prefix}nulis _teks_
║${gaya} ${prefix}nuliskiri _teks_
║${gaya} ${prefix}nuliskanan _teks_
║${gaya} ${prefix}foliokiri _teks_
║${gaya} ${prefix}foliokanan _teks_
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *SOUND MENU* ❳═>
║${gaya} ${prefix}tupai
║${gaya} ${prefix}balik
║${gaya} ${prefix}gemuk
║${gaya} ${prefix}bass
║${gaya} ${prefix}reverse
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *RANDOM VIDIO* ❳═>
║${gaya} ${prefix}storyanime
║${gaya} ${prefix}beatvn
║${gaya} ${prefix}jedagjedugml
║${gaya} ${prefix}jedagjedugpubg
║${gaya} ${prefix}jedagjedugff
║${gaya} ${prefix}storygalau
║${gaya} ${prefix}storywa
║${gaya} ${prefix}storytruk
║${gaya} ${prefix}storybus
║${gaya} ${prefix}storysholawatan
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *RANDOM IMAGE* ❳═>
║${gaya} ${prefix}katakataimage
║${gaya} ${prefix}renungan
║${gaya} ${prefix}memeindo
║${gaya} ${prefix}aesthetic
║${gaya} ${prefix}yulibocil
║${gaya} ${prefix}doraemon
║${gaya} ${prefix}pokemon
║${gaya} ${prefix}pentol
║${gaya} ${prefix}tatasurya
║${gaya} ${prefix}kartun
║${gaya} ${prefix}anjing
║${gaya} ${prefix}kucing
║${gaya} ${prefix}stanic
║${gaya} ${prefix}boneka
║${gaya} ${prefix}mobil
║${gaya} ${prefix}motor
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *SOUND MENU* ❳═>
║${gaya} ${prefix}sound1
║${gaya} ${prefix}sound2
║${gaya} ${prefix}sound3
║${gaya} ${prefix}sound4
║${gaya} ${prefix}sound5
║${gaya} ${prefix}sound6
║${gaya} ${prefix}sound7
║${gaya} ${prefix}sound8
║${gaya} ${prefix}sound9
║${gaya} ${prefix}sound10
║${gaya} ${prefix}sound11
║${gaya} ${prefix}sound12
║${gaya} ${prefix}sound13
║${gaya} ${prefix}sound14
║${gaya} ${prefix}sound15
║${gaya} ${prefix}sound16
║${gaya} ${prefix}sound17
║${gaya} ${prefix}sound18
║${gaya} ${prefix}sound19
║${gaya} ${prefix}sound20
║
║*EXAMPLE:1-70 SOUND*
╚═════════════════❋ཻུ۪۪⸙  

╔═❲ *OTHER MENU* ❳═>
║${gaya} ${prefix}githubstalk
║${gaya} ${prefix}resepmasakan
║${gaya} ${prefix}artimimpi
║${gaya} ${prefix}artinama
║${gaya} ${prefix}bilangangka
║${gaya} ${prefix}playstore
║${gaya} ${prefix}brainly
║${gaya} ${prefix}darkjokes
╚═════════════════❋ཻུ۪۪⸙  

© ᴄʀᴇᴀᴛᴏʀ ʙʏ ᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ⸙`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
//══════════[ MENU TERPISAH ]══════════//
case 'groupmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}Hai kak☺️ Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 GRUP MENU 」*
${gaya} ${prefix}antilink _on / off_
${gaya} ${prefix}antivirtex _on / off_
${gaya} ${prefix}welcome _on / off_
${gaya} ${prefix}group _buka / tutup_
${gaya} ${prefix}promote _@tag / reply_
${gaya} ${prefix}demote _@tag / reply_
${gaya} ${prefix}add _628xx_
${gaya} ${prefix}kick _@tag / reply_
${gaya} ${prefix}setpp _reply_
${gaya} ${prefix}setdesc _teks_
${gaya} ${prefix}setname _teks_
${gaya} ${prefix}hidetag _teks_
${gaya} ${prefix}linkgrup
${gaya} ${prefix}infogrup
${gaya} ${prefix}listonline
${gaya} ${prefix}resetlinkgrup
${gaya} ${prefix}googlesearch _teks_
${gaya} ${prefix}wiki _teks_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 DOWNLOAD MENU 」*
${gaya} ${prefix}ytsearch _Link_
${gaya} ${prefix}ytmp3 _Link_
${gaya} ${prefix}ytmp4 _Link_
${gaya} ${prefix}joox _Link_
${gaya} ${prefix}tiktoknowm _Link_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randommenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「RANDOM MENU」*
${gaya} ${prefix}katakataimage
${gaya} ${prefix}renungan
${gaya} ${prefix}memeindo
${gaya} ${prefix}aesthetic
${gaya} ${prefix}yulibocil
${gaya} ${prefix}doraemon
${gaya} ${prefix}pokemon
${gaya} ${prefix}pentol
${gaya} ${prefix}tatasurya
${gaya} ${prefix}kartun
${gaya} ${prefix}anjing
${gaya} ${prefix}kucing
${gaya} ${prefix}stanic
${gaya} ${prefix}boneka
${gaya} ${prefix}mobil
${gaya} ${prefix}motor`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomvidio':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「RANDOM VIDIO」*
${gaya} ${prefix}storyanime
${gaya} ${prefix}beatvn
${gaya} ${prefix}jedagjedugml
${gaya} ${prefix}jedagjedugpubg
${gaya} ${prefix}jedagjedugff
${gaya} ${prefix}storygalau
${gaya} ${prefix}storywa
${gaya} ${prefix}storytruk
${gaya} ${prefix}storybus`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'simplemenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 SIMPLE MENU 」*
${gaya} ${prefix}allmenu
${gaya} ${prefix}soundmenu
${gaya} ${prefix}asupanmenu
${gaya} ${prefix}ownermenu
${gaya} ${prefix}groupmenu
${gaya} ${prefix}cekmenu
${gaya} ${prefix}downloadmenu
${gaya} ${prefix}makermenu
${gaya} ${prefix}funmenu
${gaya} ${prefix}nulismenu
${gaya} ${prefix}nsfwmenu
${gaya} ${prefix}hewanmenu
${gaya} ${prefix}sertimenu
${gaya} ${prefix}musicmenu
${gaya} ${prefix}gamemenu
${gaya} ${prefix}nekopoimenu
${gaya} ${prefix}islamimenu
${gaya} ${prefix}bokepmenu
${gaya} ${prefix}ceritamenu
${gaya} ${prefix}randommenu
${gaya} ${prefix}randomvidio
${gaya} ${prefix}jadibotmenu`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'gamemenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 GAME MENU 」*
${gaya} ${prefix}caklontong
${gaya} ${prefix}family100
${gaya} ${prefix}tebakbendera
${gaya} ${prefix}tebakgambar
${gaya} ${prefix}artinama
${gaya} ${prefix}suit [ _gunting/batu/kertas_ ]_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 MAKER MENU 」*
${gaya} ${prefix}blackpink _Teks_
${gaya} ${prefix}halloween _Teks_
${gaya} ${prefix}halloween2 _Teks_
${gaya} ${prefix}3dgradient _Teks_
${gaya} ${prefix}naturalleaves _Teks_
${gaya} ${prefix}dropwater _Teks_
${gaya} ${prefix}blood _Teks_
${gaya} ${prefix}blood2 _Teks_
${gaya} ${prefix}snow _Teks_
${gaya} ${prefix}cloud _Teks_
${gaya} ${prefix}neondevil _Teks_
${gaya} ${prefix}neon _Teks_
${gaya} ${prefix}glowingneonlight _Teks_
${gaya} ${prefix}neonlight _Teks_
${gaya} ${prefix}neonlight2 _Teks_
${gaya} ${prefix}neonlight3 _Teks_
${gaya} ${prefix}greenneon _Teks_
${gaya} ${prefix}toxic _Teks_
${gaya} ${prefix}matrix _Teks_
${gaya} ${prefix}thunder _Teks_
${gaya} ${prefix}thunder2 _Teks_
${gaya} ${prefix}bokeh _Teks_
${gaya} ${prefix}carbontext _Teks_
${gaya} ${prefix}christmas _Teks_
${gaya} ${prefix}breakwall _Teks_
${gaya} ${prefix}roadwarning _Teks_
${gaya} ${prefix}engraved3d _Teks_
${gaya} ${prefix}embossed _Teks_
${gaya} ${prefix}3dstone _Teks_
${gaya} ${prefix}futuristic _Teks_
${gaya} ${prefix}sketch _Teks_
${gaya} ${prefix}bluecircuit _Teks_
${gaya} ${prefix}space _Teks_
${gaya} ${prefix}magmahot _Teks_
${gaya} ${prefix}artpapercut _Teks_
${gaya} ${prefix}3dluxurygold _Teks_
${gaya} ${prefix}robotr2d2 _Teks_
${gaya} ${prefix}harrypotter _Teks_
${gaya} ${prefix}glitch3 _Teks_
${gaya} ${prefix}greenhorror _Teks_
${gaya} ${prefix}horrorgift _Teks_
${gaya} ${prefix}erodedmetal _Teks_
${gaya} ${prefix}3dglowingmetal _Teks_
${gaya} ${prefix}blackmetal _Teks_
${gaya} ${prefix}bluemetal _Teks_
${gaya} ${prefix}shynimetal _Teks_
${gaya} ${prefix}rustymetal _Teks_
${gaya} ${prefix}metalpurple _Teks_
${gaya} ${prefix}metalrainbow _Teks_
${gaya} ${prefix}metaldarkgold _Teks_
${gaya} ${prefix}colorfullluxurymetal _Teks_
${gaya} ${prefix}glossybluemetal _Teks_
${gaya} ${prefix}3dglossymetal _Teks_
${gaya} ${prefix}3ddeepseametal _Teks_
${gaya} ${prefix}leddisplayscreen _Teks_
${gaya} ${prefix}metallic _Teks_
${gaya} ${prefix}glossymetallic _Teks_
${gaya} ${prefix}christmastree _Teks_
${gaya} ${prefix}sparklesmerrychristmas _Teks_
${gaya} ${prefix}countryflag3d _Teks_
${gaya} ${prefix}americanflag3d _Teks_
${gaya} ${prefix}3dscfi _Teks_
${gaya} ${prefix}3drainbow _Teks_
${gaya} ${prefix}3dwaterpipe _Teks_
${gaya} ${prefix}3dchrome _Teks_
${gaya} ${prefix}bluegem _Teks_
${gaya} ${prefix}purplegem _Teks_
${gaya} ${prefix}pinkcandy _Teks_
${gaya} ${prefix}transformer _Teks_
${gaya} ${prefix}berry _Teks_
${gaya} ${prefix}brokenglass _Teks_
${gaya} ${prefix}3drealistic _Teks_
${gaya} ${prefix}3dunderwater _Teks_
${gaya} ${prefix}writeinsandsummerbeach _Teks_
${gaya} ${prefix}sandwriting _Teks_
${gaya} ${prefix}foilballoon _Teks_
${gaya} ${prefix}3dglue _Teks_
${gaya} ${prefix}1917 _Teks_
${gaya} ${prefix}minion _Teks_
${gaya} ${prefix}doubleexposure _Teks_
${gaya} ${prefix}holographic3d _Teks_
${gaya} ${prefix}deluxegold _Teks_
${gaya} ${prefix}deluxesilver _Teks_
${gaya} ${prefix}glossycarbon _Teks_
${gaya} ${prefix}fabric _Teks_
${gaya} ${prefix}xmascards3d _Teks_
${gaya} ${prefix}wicker _Teks_
${gaya} ${prefix}fireworksparkle _Teks_
${gaya} ${prefix}skeleton _Teks_
${gaya} ${prefix}ultragloss _Teks_
${gaya} ${prefix}denim _Teks_
${gaya} ${prefix}decorategreen _Teks_
${gaya} ${prefix}peridot _Teks_
${gaya} ${prefix}rock _Teks_
${gaya} ${prefix}lava _Teks_
${gaya} ${prefix}rainbowequalizer _Teks_
${gaya} ${prefix}purpleglass _Teks_
${gaya} ${prefix}decorativeglass _Teks_
${gaya} ${prefix}chocolatecake _Teks_
${gaya} ${prefix}strawberry _Teks_
${gaya} ${prefix}koifish _Teks_
${gaya} ${prefix}bread _Teks_
${gaya} ${prefix}3dbox _Teks_
${gaya} ${prefix}freeadvancedglow _Teks_
${gaya} ${prefix}honey _Teks_
${gaya} ${prefix}marble _Teks_
${gaya} ${prefix}marbleslabs _Teks_
${gaya} ${prefix}icecold _Teks_
${gaya} ${prefix}fruitjuice _Teks_
${gaya} ${prefix}abstragold _Teks_
${gaya} ${prefix}biscuit _Teks_
${gaya} ${prefix}bagel _Teks_
${gaya} ${prefix}wood _Teks_
${gaya} ${prefix}hexagolden _Teks_
${gaya} ${prefix}wonderfulgraffitiart _Teks_
${gaya} ${prefix}8bit _Teks1&Teks2_
${gaya} ${prefix}pornhub _Teks1&Teks2_
${gaya} ${prefix}glitch _Teks1&Teks2_
${gaya} ${prefix}glitch2 _Teks1&Teks2_
${gaya} ${prefix}layered _Teks1&Teks2_
${gaya} ${prefix}3dsteel _Teks1&Teks2_
${gaya} ${prefix}realistic _Teks1&Teks2_
${gaya} ${prefix}lionlogo _Teks1&Teks2_
${gaya} ${prefix}ninjalogo _Teks1&Teks2_
${gaya} ${prefix}wolf _Teks1&Teks2_
${gaya} ${prefix}wolf2 _Teks1&Teks2_
${gaya} ${prefix}halloween3 _Teks1&Teks2_
${gaya} ${prefix}marvel _Teks1&Teks2_
${gaya} ${prefix}marvel2 _Teks1&Teks2_
${gaya} ${prefix}cinematichorror _Teks1&Teks2_
${gaya} ${prefix}avengers _Teks1&Teks2_
${gaya} ${prefix}graffiti3 _Teks1&Teks2_
${gaya} ${prefix}captainamerica _Teks1&Teks2_
${gaya} ${prefix}girlneko _Teks1&Teks2_
${gaya} ${prefix}sadboy _Teks1&Teks2_
${gaya} ${prefix}makerkaneki _Teks1&Teks2_
${gaya} ${prefix}rem _Teks1&Teks2_
${gaya} ${prefix}lolimaker _Teks1&Teks2_
${gaya} ${prefix}gura _Teks1&Teks2_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'funmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「FUN MENU NEW」*
${gaya} ${prefix}bego
${gaya} ${prefix}tolol
${gaya} ${prefix}pinter
${gaya} ${prefix}pintar
${gaya} ${prefix}asu
${gaya} ${prefix}bodoh
${gaya} ${prefix}gay
${gaya} ${prefix}lesby
${gaya} ${prefix}bajingan
${gaya} ${prefix}jancok
${gaya} ${prefix}anjing
${gaya} ${prefix}ngentod
${gaya} ${prefix}ngentot
${gaya} ${prefix}monyet
${gaya} ${prefix}mastah
${gaya} ${prefix}newbie
${gaya} ${prefix}bangsat
${gaya} ${prefix}bangke
${gaya} ${prefix}sange
${gaya} ${prefix}sangean
${gaya} ${prefix}dakjal
${gaya} ${prefix}horny
${gaya} ${prefix}wibu
${gaya} ${prefix}puki
${gaya} ${prefix}pantek`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
var apaya = fs.readFileSync('./media/menu.mp3');
Dhani.sendMessage(from, apaya, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'quotesmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 RANDOM TEXT 」*
${gaya} ${prefix}randomquotes
${gaya} ${prefix}quotesislami
${gaya} ${prefix}quotes2
${gaya} ${prefix}truth
${gaya} ${prefix}dare
${gaya} ${prefix}pantun
${gaya} ${prefix}puisi
${gaya} ${prefix}faktaunik
${gaya} ${prefix}katabijak
${gaya} ${prefix}katailham
${gaya} ${prefix}katabucin
${gaya} ${prefix}katabucin2`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ceritamenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 Movie & Story] 」*
${gaya} ${prefix}cerpen
${gaya} ${prefix}wattpad
${gaya} ${prefix}wattpadsearch
${gaya} ${prefix}lk21
${gaya} ${prefix}ceritahoror`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'infomenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 INFORMASI MENU 」*
${gaya} ${prefix}kbbi
${gaya} ${prefix}jarak
${gaya} ${prefix}infogempa
${gaya} ${prefix}cuaca
${gaya} ${prefix}covidindo
${gaya} ${prefix}covidglobal`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randommenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 RANDOM IMAGE 」*
${gaya} ${prefix}ppcouple
${gaya} ${prefix}meme
${gaya} ${prefix}quotesimage
${gaya} ${prefix}renungan
${gaya} ${prefix}darkjokes
${gaya} ${prefix}wallpapergame
${gaya} ${prefix}wallpaperpubg
${gaya} ${prefix}wallpaperhacker
${gaya} ${prefix}wallpaperharley
${gaya} ${prefix}wallpaperjoker
${gaya} ${prefix}wallpapermuslim
${gaya} ${prefix}wallpapercyberspace
${gaya} ${prefix}wallpapermountain
${gaya} ${prefix}wallpaperprogramming
${gaya} ${prefix}wallpapertechnology`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'bokepmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 BOKEP MENU 」*
${gaya} ${prefix}bokep1
${gaya} ${prefix}bokep2
${gaya} ${prefix}bokep3
${gaya} ${prefix}bokep4
${gaya} ${prefix}bokep5
${gaya} ${prefix}bokep6
${gaya} ${prefix}bokep7
${gaya} ${prefix}bokep8
${gaya} ${prefix}bokep9
${gaya} ${prefix}bokep10
${gaya} ${prefix}bokep11
${gaya} ${prefix}bokep12
${gaya} ${prefix}bokep13
${gaya} ${prefix}bokep14
${gaya} ${prefix}bokep15
${gaya} ${prefix}bokep16
${gaya} ${prefix}bokep17
${gaya} ${prefix}bokep18
${gaya} ${prefix}bokep19
${gaya} ${prefix}bokep20
${gaya} ${prefix}bokep21
${gaya} ${prefix}bokep22
${gaya} ${prefix}bokep23
${gaya} ${prefix}bokep24`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 ASUPAN MENU 」*
${gaya} ${prefix}asupan
${gaya} ${prefix}hijaber
${gaya} ${prefix}bocil
${gaya} ${prefix}rikagusriani
${gaya} ${prefix}santuy
${gaya} ${prefix}ukhty
${gaya} ${prefix}gheayubi
${gaya} ${prefix}nantalia
${gaya} ${prefix}ghea
${gaya} ${prefix}chika
${gaya} ${prefix}mangayutri
${gaya} ${prefix}alcakenya
${gaya} ${prefix}aura
${gaya} ${prefix}delvira
${gaya} ${prefix}bunga
${gaya} ${prefix}ayu`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 CECAN MENU 」*
${gaya} ${prefix}cogan
${gaya} ${prefix}cecan
${gaya} ${prefix}china
${gaya} ${prefix}vietnam
${gaya} ${prefix}thainlad
${gaya} ${prefix}indonesia
${gaya} ${prefix}korea
${gaya} ${prefix}japan
${gaya} ${prefix}malaysia
${gaya} ${prefix}jenni`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 ANIME MENU 」*
${gaya} ${prefix}wallpapernaruto
${gaya} ${prefix}loli
${gaya} ${prefix}waifu
${gaya} ${prefix}neko
${gaya} ${prefix}husbu
${gaya} ${prefix}milf
${gaya} ${prefix}cosplay
${gaya} ${prefix}nekonime
${gaya} ${prefix}shota
${gaya} ${prefix}wallml
${gaya} ${prefix}megumin
${gaya} ${prefix}poke
${gaya} ${prefix}sao
${gaya} ${prefix}lovelive
${gaya} ${prefix}hsdxd
${gaya} ${prefix}ana
${gaya} ${prefix}akira
${gaya} ${prefix}akiyama
${gaya} ${prefix}asuna
${gaya} ${prefix}ayuzawa
${gaya} ${prefix}boruto
${gaya} ${prefix}chico
${gaya} ${prefix}eba
${gaya} ${prefix}chitoge
${gaya} ${prefix}deidara
${gaya} ${prefix}akiyama
${gaya} ${prefix}elaina
${gaya} ${prefix}emilia
${gaya} ${prefix}erza
${gaya} ${prefix}gremory
${gaya} ${prefix}hestia
${gaya} ${prefix}isuzu
${gaya} ${prefix}itachi
${gaya} ${prefix}itori
${gaya} ${prefix}kagura
${gaya} ${prefix}kaori
${gaya} ${prefix}kanekii
${gaya} ${prefix}kotori
${gaya} ${prefix}kurumi
${gaya} ${prefix}madara
${gaya} ${prefix}mikasa
${gaya} ${prefix}miku
${gaya} ${prefix}nezuko
${gaya} ${prefix}sagiri
${gaya} ${prefix}shina
${gaya} ${prefix}shinaka
${gaya} ${prefix}shinomiya
${gaya} ${prefix}shizuka
${gaya} ${prefix}toukachan
${gaya} ${prefix}tsunade
${gaya} ${prefix}yotsuba
${gaya} ${prefix}yuki
${gaya} ${prefix}yumeko
${gaya} ${prefix}funart
${gaya} ${prefix}nino`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'sertimenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 SERTIFIKAT MENU 」*
${gaya} ${prefix}serti1
${gaya} ${prefix}serti2
${gaya} ${prefix}serti3
${gaya} ${prefix}nickepep`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'jadibotmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 JADI BOT MENU 」*
${gaya} ${prefix}jadibot
${gaya} ${prefix}stopjadibot`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'hewanmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 ANIMASI HEWAN」*
${gaya} ${prefix}fox
${gaya} ${prefix}dog
${gaya} ${prefix}cat
${gaya} ${prefix}panda
${gaya} ${prefix}panda1
${gaya} ${prefix}bird
${gaya} ${prefix}koala`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'islamimenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 ISLAMI MENU」*
${gaya} ${prefix}alquran
${gaya} ${prefix}asmaulhusna
${gaya} ${prefix}alquranaudio
${gaya} ${prefix}listsurah
${gaya} ${prefix}jadwalsholat
${gaya} ${prefix}kisahnabi`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nekopoimenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 NEKOPOI MENU」*
${gaya} ${prefix}nekopoi1
${gaya} ${prefix}nekopoi2
${gaya} ${prefix}nekopoi3
${gaya} ${prefix}nekopoi4
${gaya} ${prefix}nekopoi5
${gaya} ${prefix}nekopoi6
${gaya} ${prefix}nekopoi7
${gaya} ${prefix}nekopoi8
${gaya} ${prefix}nekopoi9`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'musicmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「SOUND MUSIC」*
${gaya} ${prefix}sound1
${gaya} ${prefix}sound2
${gaya} ${prefix}sound3
${gaya} ${prefix}sound4
${gaya} ${prefix}sound5
${gaya} ${prefix}sound6
${gaya} ${prefix}sound7
${gaya} ${prefix}sound8
${gaya} ${prefix}sound9
${gaya} ${prefix}sound10`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cekmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 CEK MENU 」*
${gaya} ${prefix}hobby
${gaya} ${prefix}cantikcek
${gaya} ${prefix}seberapagay
${gaya} ${prefix}watak
${gaya} ${prefix}tercantik
${gaya} ${prefix}terganteng
${gaya} ${prefix}tercantik
${gaya} ${prefix}jadian
${gaya} ${prefix}bagaimanakah`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 NSFW MENU 」*
${gaya} ${prefix}hentai
${gaya} ${prefix}nsfwloli
${gaya} ${prefix}nsfwneko
${gaya} ${prefix}nsfwtrap
${gaya} ${prefix}nsfwpussy
${gaya} ${prefix}nsfwyuri
${gaya} ${prefix}nsfwlesbian
${gaya} ${prefix}nsfwclassic
${gaya} ${prefix}nsfwavatar
${gaya} ${prefix}nsfwkitsune
${gaya} ${prefix}nsfwero
${gaya} ${prefix}nsfwblowjob
${gaya} ${prefix}nsfwkuni
${gaya} ${prefix}nsfwfutanari
${gaya} ${prefix}nsfwholoero
${gaya} ${prefix}nsfwholo
${gaya} ${prefix}nsfwkemonomimi
${gaya} ${prefix}nsfwketa
${gaya} ${prefix}nsfwpussyart
${gaya} ${prefix}nsfwgirlsolo
${gaya} ${prefix}nsfwanal
${gaya} ${prefix}nsfwbj
${gaya} ${prefix}nsfwtits
${gaya} ${prefix}nsfwboobs
${gaya} ${prefix}nsfwcumsluts
${gaya} ${prefix}nsfweroyuri
${gaya} ${prefix}nsfwfeet
${gaya} ${prefix}nsfwfemdom
${gaya} ${prefix}nsfwfeet
${gaya} ${prefix}nsfwcumarts
${gaya} ${prefix}nsfweroneko
${gaya} ${prefix}nsfwspank`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'soundmenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 SOUND MENU 」*
${gaya} ${prefix}tupai
${gaya} ${prefix}balik
${gaya} ${prefix}gemuk
${gaya} ${prefix}bass
${gaya} ${prefix}reverse`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nulismenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]} Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 NULIS MENU 」*
${gaya} ${prefix}nulis _teks_
${gaya} ${prefix}nuliskiri _teks_
${gaya} ${prefix}nuliskanan _teks_
${gaya} ${prefix}foliokiri _teks_
${gaya} ${prefix}foliokanan _teks_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*

*「 STICKER MENU 」*
${gaya} ${prefix}sticker _reply_
${gaya} ${prefix}toimg _reply_
${gaya} ${prefix}attp _teks_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*

*「 OWNER MENU 」*
${gaya} ${prefix}infosc
${gaya} ${prefix}owner
${gaya} ${prefix}public
${gaya} ${prefix}self
${gaya} ${prefix}delete
${gaya} ${prefix}setnamebot
${gaya} ${prefix}setbiobot
${gaya} ${prefix}bc _Teks_
${gaya} ${prefix}bc2 _Teks_
${gaya} ${prefix}spam [_teks|jumlah_]`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
//══════════[ COMMAND ]════════════════════════════//
  case 'menu':
  case 'command':
listMsg = {
buttonText: 'ᴍᴇɴᴜ',
footerText: `*© ᴄʀᴇᴀᴛᴏʀ ʙʏ ᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ⸙*`,
description: `*${ucapanWaktu} @${sender.split('@')[0]}Silahkan pilih salah satu menu disini,Gunakan Dengan Bijak Ya kakk*`,
sections: [
{
"title": `${tanggal} - ${time} WIB`,
rows: [
{
"title": "ᴀʟʟ ᴍᴇɴᴜ⸙",
"description": `Menampilkan Semua Fitur Bot`,
"rowId": `${prefix}allmenu`
},
{
"title": "Gʀᴏᴜp ᴍᴇɴᴜ🌹",
"description": `Menampilkan List Fitur Khusus Group`,
"rowId": `${prefix}groupmenu`
},
{
"title": "ғᴜɴ ᴍᴇɴᴜ🎮",
"description": `Menampilkan List Fitur Menu Fun`,
"rowId": `${prefix}funmenu`
},
{
"title": "Gᴀᴍᴇ ᴍᴇɴᴜ🎯",
"description": `Menampilkan List Fitur Menu Game`,
"rowId": `${prefix}gamemenu`
},
{
"title": "Dᴏwɴʟᴏᴀᴅ ᴍᴇɴᴜ🔮",
"description": `Menampilkan List Fitur Untuk Menu Download`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "ɪɴғo ᴍᴇɴᴜ🎃",
"description": `Menampilkan List Fitur Untuk Menu Info`,
"rowId": `${prefix}infomenu`
},
{
"title": "Bᴏkᴇp ᴍᴇɴᴜ🔞",
"description": `Menampilkan List Fitur Untuk Menu Bokep`,
"rowId": `${prefix}bokepmenu`
},
{
"title": "Sᴇʀᴛɪ ᴍᴇɴᴜ🐋",
"description": `Menampilkan List Fitur Untuk Menu Serti`,
"rowId": `${prefix}sertimenu`
},
{
"title": "Nᴇᴋᴏpᴏɪ ᴍᴇɴᴜ📌",
"description": `Menampilkan List Fitur Untuk Menu Nekopoi`,
"rowId": `${prefix}nekopoimenu`
},
{
"title": "Isʟᴀᴍɪ ᴍᴇɴᴜ🕌",
"description": `Menampilkan List Fitur Untuk Menu Islami`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "Hᴇwᴀɴ ᴍᴇɴᴜ🐁",
"description": `Menampilkan List Fitur Untuk Menu Hewan`,
"rowId": `${prefix}hewanmenu`
},
{
"title": "Rᴀɴᴅᴏᴍ ᴍᴇɴᴜ🎌",
"description": `Mena mpilkan List Fitur Untuk Random Menu`,
"rowId": `${prefix}randommenu`
},
{
"title": "Cᴇʀɪᴛᴀ ᴍᴇɴᴜ📖",
"description": `Menampilkan List Fitur Untuk Menu Cerita`,
"rowId": `${prefix}ceritamenu`
},
{
"title": "sɪᴍᴘᴇʟ ᴍᴇɴᴜ💠",
"description": `Menampilkan List Fitur Untuk Menu Cerita`,
"rowId": `${prefix}simpelmenu`
},
{
"title": "Mᴀᴋᴇʀ ᴍᴇɴᴜ🥀",
"description": `Menampilkan List Fitur Untuk Membuatkan Logo`,
"rowId": `${prefix}makermenu`
},
{
"title": "Rᴀɴᴅᴏᴍ ᴛᴇxᴛ🍂",
"description": `Menampilkan List Fitur Random Teks`,
"rowId": `${prefix}randomtext`
},
{
"title": "Rᴀɴᴅᴏᴍ ɪᴍᴀgᴇ🍁",
"description": `Menampilkan List Fitur Random Foto`,
"rowId": `${prefix}randomimage`
},
{
"title": "Rᴀɴᴅᴏᴍ vɪᴅᴇᴏ🍀",
"description": `Menampilkan List Fitur Random Video`,
"rowId": `${prefix}randomvideo`
},
{
"title": "Asᴜpᴀɴ ᴍᴇɴᴜ🚫",
"description": `Menampilkan List Fitur Asupan 18+`,
"rowId": `${prefix}asupanmenu`
},
{
"title": "Cᴇcᴀɴ ᴍᴇɴᴜ🍄",
"description": `Menampilkan List Fitur Cecan Dan Cogan`,
"rowId": `${prefix}cecanmenu`
},
{
"title": "Cᴇᴋ ᴍᴇɴᴜ❄️",
"description": `Menampilkan List Fitur Cek Menu`,
"rowId": `${prefix}cekmenu`
},
{
"title": "Mᴜsɪc ᴍᴇɴᴜ🐣",
"description": `Menampilkan List Fitur Music`,
"rowId": `${prefix}musicmenu`
},
{
"title": "Aɴɪᴍᴇ ᴍᴇɴᴜ🍭",
"description": `Menampilkan List Fitur Anime`,
"rowId": `${prefix}animemenu`
},
{
"title": "Nsғw ᴍᴇɴᴜ⛔",
"description": `Menampilkan List Fitur Nsfw 18+`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": "Sᴛɪcᴋᴇʀ ᴍᴇɴᴜ🖼️",
"description": `Menampilkan List Fitur Sticker`,
"rowId": `${prefix}stickermenu`
},
{
"title": "Sᴏᴜɴᴅ ᴍᴇɴᴜ🎶",
"description": `Menampilkan List Fitur Sound`,
"rowId": `${prefix}soundmenu`
},
{
"title": "Nᴜʟɪs ᴍᴇɴᴜ📑",
"description": `Menampilkan List Fitur Menulis`,
"rowId": `${prefix}nulismenu`
},
{
"title": "Owɴᴇʀ ᴍᴇɴᴜ💫",
"description": `Menampilkan List Fitur Khusus Owner`,
"rowId": `${prefix}ownermenu`
}
]
}],
listType: 1
}
Dhani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:mek})
break
//══════════[ SEARCH MENU ]══════════//
              case 'brainly':
  if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					Dhani.sendMessage(from, teks, text,{quoted:ftrol,detectLinks: false})                        
		            })              
					break
case 'playstore':
      if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
//══════════[ RANDOM VIDEO ]══════════//
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':
case 'storysholawatan':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
//══════════[ OTHER MENU ]════════════════════════════//
case 'resepmasakan':
              if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=tahu&apikey=FuckBitch`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					Dhani.sendMessage(from, buff, image, {quoted: ftrol, caption: hasilresep})
					break 
					case 'artimimpi':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=belanja&apikey=FuckBitch`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'bilangangka':
              if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=FuckBitch`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'dog':  
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'cat':
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'panda':  
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'panda1':  
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'bird': 
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
                   case 'koala':  
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Dhani.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
                   break
//══════════[ Fitur Informasi ]══════════//    
case 'infogempa':
              anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${apikey7}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					Dhani.sendMessage(from, buff, image, {quoted: ftrol, caption: gempa})
					break 
case 'kbbi':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=ae0184cfdb19e8c46728a104&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Kak\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=ae0184cfdb19e8c46728a104&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=ae0184cfdb19e8c46728a104`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await Dhani.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=ae0184cfdb19e8c46728a104`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await Dhani.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
reply(ini_txt)
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=ae0184cfdb19e8c46728a104`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=ae0184cfdb19e8c46728a104`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
//══════════[ HARAM FITUR ]══════════//
case 'bokep1':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep2':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep3':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep4':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep5':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep6':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file\n\nNOTE SIAPKAN TISU'})
break
 case 'bokep7':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep8':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep10':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep11':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep12':	    
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file\n\nNOTE SIAPKAN TISU'}) 
break
case 'bokep13':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep14':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep15':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep16':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep17':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep18':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep19':				 
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep20':			
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep21':				 
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep22':		
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep23':	
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file\n\nNOTE SIAPKAN TISU'})
break
case 'bokep24':				 
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file\n\nNOTE SIAPKAN TISU'})
break
//══════════[ MALING]══════════//
//══════════[ JADI BOT ]══════════//
case 'jadibot':
client.version = [2, 2142, 12]
client.browserDescription = ['Dhani Ofc','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await Dhani.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       Dhani.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix + command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./lib/jadibot.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
//══════════[ GAME MENU ]══════════//
case 'tebakbendera':
					anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, question, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar':
					anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, family, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
                    case 'asahotak':
					anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					asahotak = `*${anu.result.question}*`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, asahotak, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'artinama':
if (args.length < 1) return reply('*Teks nya mana?*') 
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					break
case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
//══════════[ NEKOPOI MENU ]══════════//
case 'nekopoi1':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi2':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi3':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
lbreak
case 'nekopoi4':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi5':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi6':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi7':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi8':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
break
case 'nekopoi9':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})

//══════════[ SOUND MENU ]══════════//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      Dhani.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          break
case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await Dhani.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
Dhani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftrol})
fs.unlinkSync(ran)
})
break
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await Dhani.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
Dhani.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftrol})
fs.unlinkSync(ran)
	})
break
case 'gemuk':
                  encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediaz = await Dhani.downloadAndSaveMediaMessage(encmediaz)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediaz)
                     if (err) return ephe('Error!')
                     hah = fs.readFileSync(ran)
                  Dhani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
                  break
   case 'bass':                 
                  encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediao = await Dhani.downloadAndSaveMediaMessage(encmediao)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediao)
                     if (err) return reply('Error!')
                     hah = fs.readFileSync(ran)
                     Dhani.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
               break
case 'reverse':           
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Dhani.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Dhani.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftrol })
            fs.unlinkSync(ran)
            })
            break
//══════════[ FUN MENU NEW ]══════════//
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantek':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Siapa Yang ${command}?*\n*Yaitu* @${goo.jid.split('@')[0]}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
//══════════[ FREEFIRE MENU ]══════════//
case 'nickepep':
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=zakigansha`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
//══════════[ INFO MENU ]══════════//
case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
reply(mess.wait)
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}_*`)
buff = await getBuffer(anu.screenshot)
Dhani.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
//══════════[ SETIFIKAT MENU]════════════════════════════//
case 'serti1':
case 'serti2':
case 'serti3':
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Dhani.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break
//══════════[ WAR MENU ]══════════//
//blm gw isi😁
case 'bug':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await Dhani.toggleDisappearingMessages(from, 0)
}
reply('Sukses send bug sebanyak '+args.join(' '))
					break
//══════════[ FITUR NULIS ]══════════//
case 'nulis':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Kontol`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=Alphabot`)
Dhani.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo maker' })
break
case 'nuliskiri': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
reply(mess.wait)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
   Dhani.sendMessage(from, catat, image, { quoted:mek,caption:'Nih Ngab' })
   break
case 'nuliskanan': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
reply(mess.wait)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
   Dhani.sendMessage(from, catat, image, { quoted:mek,caption:'Nih Ngab' })
   break
case 'foliokiri':{
                if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)                
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    Dhani.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Nih...`})
                })
            }
break
case 'foliokanan':{
                if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)                
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    Dhani.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Nih...`})
                })
            }
break
//══════════[ SEWA DLL ]══════════//
case 'sewabot':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*
             
         🌹Sewa Bot🌹
    
🔖1 Minggu : 5.000 ( 5K )*
🔖1 Bulan : 10.000 ( 10K )*
🔖Permanen : 15.000 ( 15K )*`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'bayar':
case 'payment':
gambar = fs.readFileSync('./media/sewa.jpg')
menunya = `🌹Payment 🌹

🔖Gopay : _Silakan scan qr di atas_
🔖Dana : _Tidak tersedia_
🔖Ovo : _Tidak tesedia_
🔖Pulsa : _Tidak tersedia_`
teks =
`${tanggal}\n${runtime(process.uptime())}\n*「 ${botname} 」*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
case 'tiktokaudio':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!c) return reply('Linknya?')
		Dhani.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	Dhani.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
//══════════[ FITUR DOWNLOAD ]══════════//
case 'joox':
try{
if(!q)return reply(`Judul lagu nya mana?`)
reply((mess.wait))
jx = await fetchJson(`https://api.zeks.me/api/joox?apikey=apivinz&q=${q}`)
jxx = `🌹 *JOOX DOWNLOADER*🌹

🔖 *Size* : ${jx.data[0].size}
🔖 *Judul* : ${jx.data[0].judul}
🔖 *Url* : ${jx.data[0].audio}
🔖 *Album* : ${jx.data[0].album}
`
sendMediaURL(from,jx.data[0].thumb,(jxx))
sendMediaURL(from,jx.data[0].audio)
} catch (e) {
reply(e)
console.log(e)
}
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*「 MEDIAFIRE DOWNLOAD 」*

*🔖 Nama :* ${res[0].nama}
*🔖 Ukuran :* ${res[0].size}
*🔖 Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*Data Berhasil Didapatkan!*
\`\`\`🔖 Nama : ${res[0].nama}\`\`\`
\`\`\`🔖 Ukuran : ${res[0].size}\`\`\`
\`\`\`🔖 Link : ${res[0].link}\`\`\`

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'ytsearch':
                     if (!args.length) return reply('Judulnya apa kak?')
                     try {
                        reply(mess.wait)
                         const input = args.join(" ")
                         const filter1 = await ytsd.getFilters(input)
                         const filters1 = filter1.get('Type').get('Video')
                         const { items } = await ytsd(filters1.url, { limit: 10 })
                         let hehe = `┌ ◪ *YOUTUBE SEARCH*
         └ *Search Query:* ${input}\n\n`
                         for (let i = 0; i < items.length; i++) {
                             hehe += `───────────────\n
         ┌ ⬣ *Judul:* ${items[i].title}
         ├ ⬣ *Id:* ${items[i].id}
         ├ ⬣ *Ditonton:* ${items[i].views}
         ├ ⬣ *Durasi:* ${items[i].duration}
         └ ⬣ *Link:* ${items[i].url}\n\n`
                         }
                         thumb = await getBuffer(items[0].bestThumbnail.url)
                         await Dhani.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
         ├ ${prefix}ytmp3 [link yt] = Audio
         └ ${prefix}ytmp4 [link yt] = Video`})
                     } catch(e) {
                         reply('Didn\'t find anything or there is any error!')
                         reply(`Error: ${e.message}`)
                     }
                     break
case 'ttnowm':
case 'tiktoknowm':             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
            break      
case 'ytmp3':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
ytmp3 = await getBuffer(anu.result.url)
reply(`_audio sedang diproses, silahkan tunggu beberapa saat lagi_`)
Dhani.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_video sedang diproses, silahkan tunggu beberapa saat lagi_`)
Dhani.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktok':
menu =
`Hi ${pushname}
Kakak pasti kepingin download
Video / audio dari tiktok 🐣
Silakan pilih salah satu

• ${prefix}tiktokwm _Link_
• ${prefix}tiktoknowm _Link_
• ${prefix}tiktokaudio _Link_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'tiktokwm':
case 'ttwm':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.watermark)
Dhani.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokaudio':
case 'ttaudio':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.audio)
Dhani.sendMessage(from, tiktok, audio, {quoted: mek})
break
//══════════[ FITUR NSFW]══════════//
case 'ass':
case 'ahegao':
case 'bdsm':
case 'cuckold':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'thighs':
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/nsfw/${command}?apikey=${dhakey}`)
buffer = await getBuffer(anu.result)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'nsfwfutanari':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/futanari?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwholoero':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/holoEro?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwholo':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/holo?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwketa':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/keta?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwkemonomimi':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/kemonomimi?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwpussyart':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/pussyart?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwgirlsolo':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/girl_solo?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwtits':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/tits?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwanal':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/anal?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwbj':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/bj?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwboobs':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/boobs?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfweroyuri':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/eroyuri?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwcumsluts':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/cumsluts?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwneko':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/neko?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwpoke':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/poke?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwero':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/ero?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwclassic':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/classic?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwavatar':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/avatar2?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwkuni':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/kuni?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwlesbian':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/lesbian?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwblowjob':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/blowJob?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwkitsune':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/kitsune?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwfemdom':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/femdom?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwerofeet':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/erofeet?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwfeet':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/feet?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfweroneko':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/eroneko?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfweroyuri':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/eroyuri?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwcumarts':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/cumarts?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwspank':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/spank?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwsmug':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/smug?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwbaka':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/baka?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwtickle':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/tickle?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwpussy':
				    try {
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Dhani.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
case 'nsfwtrap':
				    try {
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Dhani.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
case 'nsfwhentai':
				    try {
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/hentai`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Dhani.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
//══════════[ FITUR ASUPAN ]══════════//
case 'asupan':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
reply(mess.wait)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'chika':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/chika?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'gheayubi':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'rikagusriani':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mangayutri':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/mangayutri?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'alcakenya':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/alcakenya?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'hijaber':
reply(mess.wait)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Dhani.sendMessage(from, asupan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'delvira':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'ayu':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'bunga':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'aura':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'nisa':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/nisa?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'ziva':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ziva?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'yana':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/yana?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'viona':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/viona?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'syania':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/syania?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'riri':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/riri?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mamagina':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/mama_gina?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mangayutri':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/mangayutri?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'rikagusriani':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break

//══════════[ FITUR CECAN ]══════════//

case 'cecan':
case 'cogan':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
reply(mess.wait)
cecan = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'malaysia':
reply(mess.wait)
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/malaysia?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'jenni':
reply(mess.wait)
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/jenni?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'jiso':
reply(mess.wait)
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/jiso?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'lisa':
reply(mess.wait)
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/lisa?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'rose':
reply(mess.wait)
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/rose?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
//══════════[ RANDOM TEXT ]══════════//
case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':
case 'truth':
case 'dare':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMessage(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=${dhakey}`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quotes2':
quotes = body.slice(1)
const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
const tes = quo[Math.floor(Math.random() * quo.length)]
Dhani.sendMessage(from, ''+tes+'\n\n_By : Dani Official._', text, { quoted: mek })
break;
case 'randomquotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes?apikey=${dhakey}`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=ae5460f229e31fe2f7c9bb32`)
                    kyyi = anu.result
                   sendButMessage(from, kyyi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
//══════════[ Fitur Islami]════════════//
case 'alquran':
				anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method:'get'})
				quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				Dhani.sendMessage(from, quran, text, {quoted: mek})
				break
case 'listsurah':
				reply(mess.wait) 
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=ae5460f229e31fe2f7c9bb32`)
       get_result = get_result.result
       ini_txt = 'List Surah:\n'
       for (var x in get_result) {
           ini_txt += `${x}. ${get_result[x]}\n`
       }
       reply(ini_txt)
       break
   case 'listsurah':
				reply(mess.wait) 
       if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
       urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=ae5460f229e31fe2f7c9bb32`
       quran = await fetchJson(urls)
       result = quran.result
       ayat = result.ayat
       ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
       for (var x of ayat) {
           arab = x.arab
           nomor = x.ayat
           latin = x.latin
           indo = x.indonesia
           ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
       }
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       reply(ini_txt)
       break
   case 'alquranaudio':
				reply(mess.wait) 
       if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
       surah = args[0]
       ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=ae5460f229e31fe2f7c9bb32`)
       Dhani.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
       break
case 'asmaulhusna':
				reply(mess.wait) 
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=ae5460f229e31fe2f7c9bb32`)
       get_result = get_result.result
       ini_txt = `No : ${get_result.index}\n`
       ini_txt += `Latin: ${get_result.latin}\n`
       ini_txt += `Arab : ${get_result.ar}\n`
       ini_txt += `Indonesia : ${get_result.id}\n`
       ini_txt += `English : ${get_result.en}`
       reply(ini_txt)
       break
   case 'kisahnabi':
				reply(mess.wait) 
       if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=ae5460f229e31fe2f7c9bb32`)
       get_result = get_result.result
       ini_txt = `Name : ${get_result.name}\n`
       ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
       ini_txt += `Umur : ${get_result.age}\n`
       ini_txt += `Tempat : ${get_result.place}\n`
       ini_txt += `Story : \n${get_result.story}`
       reply(ini_txt)
       break
case 'jadwalsholat':	
      reply(mess.wait) 
      try {
        if (args.length == 0) return reply(`Example: ${prefix + command} Pasuruan`)
       daerah = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=ae5460f229e31fe2f7c9bb32`)
       get_result = get_result.result
       ini_txt = `Wilayah : ${get_result.wilayah}\n`
       ini_txt += `Tanggal : ${get_result.tanggal}\n\n`
       ini_txt += `Sahur : ${get_result.sahur}\n`
       ini_txt += `Imsak : ${get_result.imsak}\n`
       ini_txt += `Subuh : ${get_result.subuh}\n`
       ini_txt += `Terbit : ${get_result.terbit}\n`
       ini_txt += `Dhuha : ${get_result.dhuha}\n`
       ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
       ini_txt += `Ashar : ${get_result.ashar}\n`
       ini_txt += `Maghrib : ${get_result.maghrib}\n`
       ini_txt += `Isya : ${get_result.isya}`
       reply(ini_txt)
        } catch (e) {			
					reply(`「 ❗ 」\n\n*MAAF, TERJADI KESALAHAN ATAU WILAYAH TIDAK DI TEMUKAN*`)
					}  
       break
//══════════[ Movie & Story]══════//
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=ae0184cfdb19e8c46728a104&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.Language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await Dhani.sendMessage(from, thumbnail, image, { quoted: reply, caption: ini_txt })
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=ae0184cfdb19e8c46728a104&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await Dhani.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=ae0184cfdb19e8c46728a104&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=ae0184cfdb19e8c46728a104`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break
                    break
case 'cersex':
            ini_result = await fetchJson('https://api-helgazex.herokuapp.com/api/cersex?apikey=kfL8EfHc')
     get_result = ini_result.result
        ini_txt = `*DhaniOfc*\n\n`
       ini_txt += `~${get_result.cersex}`
     reply(ini_txt)
     break    
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=ae0184cfdb19e8c46728a104`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Dhani.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'DESC BOT', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await Dhani.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              Dhani.relayWAMessage(prep)
        break  
//══════════[ RANDOM IMAGE ]══════════//

case 'meme': 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/meme?apikey=${dhakey}`)
meme = await getBuffer(anu.result.url)
Dhani.sendMessage(from, meme, image, {quoted: mek, caption: '*Nih Kak*'})
break
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
reply(mess.wait)
anu = await fetchJson(`https://killuaapi89.herokuapp.com/api/darkjokes?apikey=nWsfxZ5p`)
oke = await getBuffer(anu.result.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'wallpapermuslim':
case 'wallpapercyberspace':
case 'wallpapermountain':
case 'wallpaperprogramming':
case 'wallpapertechnology':
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//══════════[ FITUR ANIME ]══════════//
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=${dhakey}`)
buff1 = await getBuffer (anu.result.male)
Dhani.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_'})
buff2 =await getBuffer (anu.result.female)
Dhani.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_'})
break

case 'otaku':
            if(!c) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${c}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Dhani.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
case 'sao':
                reply(mess.wait)
				Dhani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 Dhani.sendMessage(from, swordartonline, image, {quoted: mek, caption: 'swort art online\nMEZ RazoR'})
				 break
case 'hsdxd':
				reply(mess.wait)
				 Dhani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 Dhani.sendMessage(from, highschooldxd, image, {quoted: mek, caption: 'NIH BANG '})
				break
case 'lovelive':
				reply(mess.wait)
				 Dhani.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 Dhani.sendMessage(from, lovelive, image, {quoted: mek, caption: 'NIH BANG '})
				break
case 'wallpapernaruto':
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/naruto?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'waifu':
reply(mess.wait)
oke = await getBuffer(`https://api.zacros.my.id/randomimg/waifu`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'akira':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/akira?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'akiyama':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/akiyama?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'ana':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/ana?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'asuna':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/asuna?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'ayuzawa':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/ayuzawa?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'boruto':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/boruto?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'chiho':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/chiho?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'chitoge':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/chitoge?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'deidara':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/deidara?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'eba':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/eba?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'akiyama':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/akiyama?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'elaina':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/elaina?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'emilia':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/emilia?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'erza':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/erza?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'gremory':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/gremory?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'hestia':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/hestia?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'isuzu':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/isuzu?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'itachi':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/itachi?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'itori':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/itori?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'kagura':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/kagura?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'kaori':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/kaori?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'kanekii':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/kaneki?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'kotori':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/kotori?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'kurumi':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/kurumi?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'madara':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/madara?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mikasa':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/mikasa?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'miku':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/miku?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'nezuko':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/nezuko?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'sagiri':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/sagiri?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'shina':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/shina?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'shinaka':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/shinka?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'shinomiya':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/shinomiya?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'shizuka':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/shizuka?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'toukachan':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/toukachan?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'tsunade':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/akiyama?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'yotsuba':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/yotsuba?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'yuki':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/yuki?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'yumeko':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/yumeko?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'funart':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/fanart?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'nino':
reply(mess.wait)
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/nino?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'loli':
reply(mess.wait)
oke = await getBuffer(`https://api.zacros.my.id/randomimg/loli`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'cosplay':
reply(mess.wait)
oke = await getBuffer(`https://api.zacros.my.id/randomimg/cosplay`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'megumin':
reply(mess.wait)
oke = await getBuffer(`https://killuaapi89.herokuapp.com/api/megumin?apikey=nWsfxZ5p`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'poke':
reply(mess.wait)
oke = await getBuffer(`https://killuaapi89.herokuapp.com/api/poke?apikey=nWsfxZ5p`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'husbu':
reply(mess.wait)
oke = await getBuffer(`https://killuaapi89.herokuapp.com/api/husbu?apikey=nWsfxZ5p`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'chara':
		if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${q}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await Dhani.sendMessage(from,li,image,{quoted: ftrol})
            break
case 'shinobu':
reply(mess.wait)
oke = await getBuffer(`https://bx-hunter.herokuapp.com/api/sfw/shinobu?apikey=FuckBitch`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
//══════════[ CEK MENU]══════════//
case 'bagaimanakah':
if (!isGroup) return reply(mess.only.group)
bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Dhani.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					break
                case 'sangecek':
				if (!isGroup) return reply(mess.only.group)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					Dhani.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					break
case 'jadian':
if (!isGroup) return reply(mess.only.group)
jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
case 'terganteng':
if (!isGroup) return reply(mess.only.group)
jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
case 'tercantik':
if (!isGroup) return reply(mess.only.group)
jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break 
case 'seberapagay':
  if (!isGroup) return reply(mess.only.group)
 teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   break
case 'cantikcek':
if (!isGroup) return reply(mess.only.group)
cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					Dhani.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
		case 'watak':
if (!isGroup) return reply(mess.only.group)
watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					Dhani.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
				        break
case 'hobby':
					if (!isGroup) return reply(mess.only.group)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Dhani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ftrol })
					break
//══════════[ FITUR MAKER ]══════════//

case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
case 'skeleton':
            reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Helga`)
                    txt1 = args[0]
                    txt2 = args[1]
                 buff = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${txt1}&text2=${txt2}&apikey=Alphabot`)
                          buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK TO MENU🐣`},type:1}]
              imageMsg = (await helga.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝚉𝚞𝚔𝚊𝙲𝚑𝚊𝚗 𝚅3.0.0', imageMessage: imageMsg,
              contentText:`*Dhani Ofc*`,buttons,headerType:4}
              prep = await helga.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Dhani.relayWAMessage(prep)
              break                  
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Dhani.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
//══════════[ 2 TEXT]══════════//
case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
//══════════[ FITUR STICKER ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					Dhani.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
					case 'ttp':                
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp SiFzz Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    Dhani.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Dhani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
//══════════[ FITUR OWNER ]══════════//
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`_Tuh Kak Ownerku_`)
break
//══════════[ Report menu]══════════//
case 'bugreport': 
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              Dhani.sendMessage('6285773557984@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
case 'jawaban':
              if (args.length < 1) return reply(`Ketik ${prefix}jawaban [jawaban]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Menjawab ☺️')
              Dhani.sendMessage('6285773557984@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'request':
              if (args.length < 1) return reply(`Ketik ${prefix}request [request fitur apa]`) 
              teks = args.join(' ')
              reply('terima kasih telah request menu saya akan menambahkan jika saya bisa')
              Dhani.sendMessage('6285773557984@s.whatsapp.net',`*Request:* ${teks}`, text)
              break
case 'chatowner':
              if (args.length < 1) return reply(`Ketik ${prefix}CHAT [CHAT apa]`) 
              teks = args.join(' ')
              reply('mohon jangan dispam bila menemukan bug segera report')
              Dhani.sendMessage('6285773557984@s.whatsapp.net',`*chat:* ${teks}`, text)
              break
//══════════[ BATAS ]══════════//
case 'join': 
             if (!q) return reply('Linknya?')
             if (!isPremium) return reply(mess.onlyPrem)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Dhani.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Dhani.chats.all()
             if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Dhani).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Dhani
             bc100 = await Dhani.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else {
for (let _ of anu) {
sendMess(_.jid, `Bot Broadcast\n\n${body.slice(4)}`)
}
reply(`Sukses Broadcast`)
}
break
case 'simi':
           if (args.length == 0) return reply(`Hallo Kak ${pushname}`)
           teksni = args.join(" ")
           get_result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=BayuPerkasa&text=${teksni}`)
           getresult = get_result.result
             reply(getresult)         
             break  
case 'hacked':
                 if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   Dhani.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                Dhani.groupUpdateSubject(from, `HACKED BY DHANI OFC${body.slice(8)}`)
                await sleep(1000)
                Dhani.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                Dhani.sendMessage(from, 'Succes Hacked', text, {quoted: ftrol})
					break                
//══════════[ FITUR GROUP ]══════════//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'report':
case 'lapor':
					const laporan = body.slice(7)
					if (args.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Dhani.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
reply(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'source':
case 'sourcecode':
case 'sc':
reply(`BOT INI MENGGUNAKAN SCRIPBOTZ Dhani Ofc `)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
Dhani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
             case 'delete':
      case 'del':
      case 'd':
            if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
            Dhani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
            break
case 'setnamabot':{
									if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Dhani Ofc`)
									Dhani.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
									 if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Dhani Ofc`)
									Dhani.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
case 'tagall':
       if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              let arr = [];
              let txti = `*[ TAG ALL BY Dhani Ofc ]*\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'spam':
                     if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					Dhani.sendMessage(from, argsi[0], MessageType.text)
				}
				break
case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break
case 'public':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === false) return
self = false
reply(`\`\`\`MODE - PUBLIC\`\`\``)
break
case 'self':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === true) return
self = true
reply(`\`\`\`MODE - SELF\`\`\``)
break
case 'autoread':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoread = true
reply('Succes..')
} else if(args[0] == 'off'){
autoread = false
reply('Succes..')
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoketik = true
reply('Succes..')
reply('Ingat jika autovn hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autoketik = false
reply('Succes..')
}
break
case 'autovn':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autovn = true
reply('Succes..')
reply('Ingat jika autoketik hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autovn = false
reply('Succes..')
}
break
case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
case 'hidetag':
      if (!isGroupAdmins && !isOwner) return 
      if (!isGroup) return reply(mess.only.group)
             try {
             quotedText = kir.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
/*ENC AJG GAK USAH
UBAH² AJG HARGAIN COK
JANGAN LUH HAPUS ININYA AJG
INTINYA JANGAN LUH HAPUS
JANGAN LUH UBAH²
KETAHUAN ? 
HATI² LUH BANG*/
case 'infosc':
function _0x55d73a(_0x307a83,_0x2f7926,_0x564344,_0x521346){return _0x1bac(_0x521346- -0x188,_0x564344);}(function(_0x36e602,_0xe6a3c5){var _0x50a646=_0x36e602();function _0x26beaf(_0x291d38,_0x19e3df,_0x46116d,_0x2890cf){return _0x1bac(_0x19e3df-0x33f,_0x46116d);}function _0x1aec20(_0x2b3087,_0x3cb1ec,_0x956d14,_0x1201e3){return _0x1bac(_0x3cb1ec-0xb9,_0x2b3087);}while(!![]){try{var _0x488ace=-parseInt(_0x26beaf(0x424,0x425,0x421,0x43f))/(0x1*0x1c5+0x1331+-0x25*0x91)+parseInt(_0x1aec20(0x1bc,0x1ca,0x1d8,0x1e7))/(-0xa31+0xb84*-0x2+0x213b)*(parseInt(_0x26beaf(0x458,0x459,0x46b,0x46b))/(0x1c16+-0x3a*-0x2e+-0x267f))+-parseInt(_0x1aec20(0x1bf,0x1af,0x19a,0x1a5))/(-0x12c*-0x3+0x2001+0x3d*-0x95)+parseInt(_0x26beaf(0x45f,0x43e,0x462,0x427))/(-0x1*-0xa75+0x11f7+-0x1c67)*(-parseInt(_0x1aec20(0x1d5,0x1cc,0x1dd,0x1d1))/(-0x112e+-0x397*0x1+-0x14cb*-0x1))+-parseInt(_0x26beaf(0x440,0x43b,0x420,0x438))/(0xfa3+-0x2*0xa4e+0x500)*(parseInt(_0x1aec20(0x1a0,0x1bb,0x1a6,0x1d7))/(0x69+-0x182b*0x1+0x17ca))+-parseInt(_0x1aec20(0x198,0x1bc,0x1a4,0x1a2))/(-0x197*-0xa+0x5d*0x56+-0x1*0x2f1b)*(-parseInt(_0x1aec20(0x187,0x197,0x179,0x1b0))/(0xf94+-0x51d*-0x5+0x1*-0x291b))+parseInt(_0x1aec20(0x1ae,0x1b4,0x1b4,0x1a8))/(-0x570+0x6a8+-0x1*0x12d)*(parseInt(_0x26beaf(0x41d,0x440,0x44e,0x42d))/(0x3*-0x3a6+-0x171d+-0x221b*-0x1));if(_0x488ace===_0xe6a3c5)break;else _0x50a646['push'](_0x50a646['shift']());}catch(_0x54285f){_0x50a646['push'](_0x50a646['shift']());}}}(_0x4613,0x4611a+-0x290d3+0x3ae66));function _0x1bac(_0x48e481,_0x44f337){var _0x333d0d=_0x4613();return _0x1bac=function(_0x270c32,_0x48bc77){_0x270c32=_0x270c32-(0x2325+-0x70*-0x46+-0x40e9);var _0x404f3c=_0x333d0d[_0x270c32];if(_0x1bac['gIqarz']===undefined){var _0x5771ef=function(_0x2daa99){var _0x3c5c0c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x58dd7f='',_0x42549f='',_0x1ea4a1=_0x58dd7f+_0x5771ef;for(var _0x389fe7=-0x25d6+-0x12*-0x199+-0x14c*-0x7,_0x30cb45,_0x21d9bd,_0x47980f=0x127*0x8+0x114f+-0x1a87;_0x21d9bd=_0x2daa99['charAt'](_0x47980f++);~_0x21d9bd&&(_0x30cb45=_0x389fe7%(-0x530+-0x5dd*-0x2+0x1*-0x686)?_0x30cb45*(-0x1f3a+0x2aa+0x4*0x734)+_0x21d9bd:_0x21d9bd,_0x389fe7++%(0xfdd+0x11f*-0x9+-0x5c2))?_0x58dd7f+=_0x1ea4a1['charCodeAt'](_0x47980f+(-0x1fc1+0x333+0x14*0x16e))-(-0x1e0a+0x178+0x1c9c)!==-0xc2e*-0x1+0x1f1d+-0x2b4b?String['fromCharCode'](-0xef*0xe+-0xd0*-0x2b+0x19b*-0xd&_0x30cb45>>(-(-0x7d5*-0x1+0x173a*-0x1+-0x1*-0xf67)*_0x389fe7&0x24a*-0x1+-0x215f*-0x1+-0x1*0x1f0f)):_0x389fe7:0x5*0x4d+0x1266+-0x13e7){_0x21d9bd=_0x3c5c0c['indexOf'](_0x21d9bd);}for(var _0x799046=-0x9a3*-0x3+-0x25*0x36+-0x3*0x709,_0x6103fc=_0x58dd7f['length'];_0x799046<_0x6103fc;_0x799046++){_0x42549f+='%'+('00'+_0x58dd7f['charCodeAt'](_0x799046)['toString'](0x1158+0x2*-0x55f+0x117*-0x6))['slice'](-(0x1398+-0x27+-0x1*0x136f));}return decodeURIComponent(_0x42549f);};_0x1bac['iRiJUO']=_0x5771ef,_0x48e481=arguments,_0x1bac['gIqarz']=!![];}var _0x423fc9=_0x333d0d[0x3e4*-0x4+0x7ff+0x791],_0x1e7034=_0x270c32+_0x423fc9,_0x4ce85c=_0x48e481[_0x1e7034];if(!_0x4ce85c){var _0x59350c=function(_0x4fed7d){this['ZOpwiT']=_0x4fed7d,this['CGdatX']=[-0x1fa*0xf+0x814+0x1593,-0xaf7*-0x1+-0x1*0xfc5+0x1*0x4ce,-0x25cf+0x2c*-0x57+0x1*0x34c3],this['IYJSun']=function(){return'newState';},this['nlwSRu']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['NMAYaG']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x59350c['prototype']['GiYtjC']=function(){var _0x25dcef=new RegExp(this['nlwSRu']+this['NMAYaG']),_0xfe37ac=_0x25dcef['test'](this['IYJSun']['toString']())?--this['CGdatX'][0x1969+0xc75+-0x25dd]:--this['CGdatX'][0x5e*-0x51+0x795*-0x5+0x43a7];return this['GJNEqQ'](_0xfe37ac);},_0x59350c['prototype']['GJNEqQ']=function(_0x1842f0){if(!Boolean(~_0x1842f0))return _0x1842f0;return this['FgUsaU'](this['ZOpwiT']);},_0x59350c['prototype']['FgUsaU']=function(_0x573f72){for(var _0x17bce9=0x1c*-0x2c+0x1*0xf59+-0x383*0x3,_0x22eca8=this['CGdatX']['length'];_0x17bce9<_0x22eca8;_0x17bce9++){this['CGdatX']['push'](Math['round'](Math['random']())),_0x22eca8=this['CGdatX']['length'];}return _0x573f72(this['CGdatX'][-0x5*0x1e7+-0x251*0x5+-0x64*-0x36]);},new _0x59350c(_0x1bac)['GiYtjC'](),_0x404f3c=_0x1bac['iRiJUO'](_0x404f3c),_0x48e481[_0x1e7034]=_0x404f3c;}else _0x404f3c=_0x4ce85c;return _0x404f3c;},_0x1bac(_0x48e481,_0x44f337);}function _0x4613(){var _0x5ea3cd=['ntr4yuDeC3O','DgXUwgK','y3rVCIGICMv0Dq','E30Uy29UC3rYDq','DhjHy2u','D2Hvu20','ChjVDg90ExbL','DcbIEsa6ierOyq','r0H2A1C','idOG','Dg9tDhjPBMC','y29UC29Szq','rgjjDLO','BMn0Aw9UkcKG','mM1hshHhvW','EgXTqLu','nJeXmtu0BeHwvwjU','DuHluhO','uxjIrxq','zxHJzxb0Aw9U','Bg9N','DgfIBgu','zxjYB3i','mZmWndC0uKrlAfrZ','mZm2mdm1otekcG','C2vHCMnO','uxvWDg8','yxbWBhK','BgvUz3rO','cGRIGkiGkLnJCMLW','DgPis0O','y29UC3rYDwn0BW','cUkSOYbjtKzpifnd','Ae9pAMK','rfHqvum','D2fYBG','otyYnZbAD0nqrxm','C3bSAxq','AunjrMq','BMLHu2C','v0jqqwy','kcGOlISPkYKRkq','kGPuywCGoIba','vM10A3y','mZmXoeDqDvb6Ba','nxWXFdn8mhW0Fa','ntKXqhmUD2HHDa','zYa6iea2mJGXmW','4OcIicPoDw1Wyw5N','zKjRBeO','CM4GDgHPCYiPka','wK1Pz0W','BMLhyw5ZkGPuyq','rLLcu1u','Cc5Uzxq','vgPywuq','x19WCM90B19F','q2jlC3G','C2fWCc5Uzxq','Aw5MBW','mJG0nZCXmMnsELbdAa','vwjzB2i','ENnWu3y','yMLUza','CMv0DxjUicHMDq','otm1AfrcBvjY','nZC3u2PiEKDq','vhvKtfq','z3fjAw0','mZvLEgffDhO','ugrqB0m','mJmWote2y3fKs1D3','mta5nLzozg1dyq'];_0x4613=function(){return _0x5ea3cd;};return _0x4613();}var _0x1de77d=(function(){var _0x1d7ea9={};_0x1d7ea9[_0x5ba276(0x3ff,0x3e5,0x3ee,0x3e3)]=function(_0x21d631,_0x52a4b3){return _0x21d631+_0x52a4b3;},_0x1d7ea9[_0x5ba276(0x420,0x426,0x42e,0x408)]=_0x5ba276(0x408,0x3fc,0x3ec,0x41c)+_0x3a7527(0x1a,-0x6,0x1c,0x2f);function _0x3a7527(_0x5313da,_0xfbdee6,_0x285b93,_0x212b87){return _0x1bac(_0x285b93- -0xf4,_0x212b87);}_0x1d7ea9[_0x3a7527(0x2,0x0,-0x12,-0x29)]=_0x5ba276(0x403,0x426,0x3df,0x402),_0x1d7ea9[_0x3a7527(0x29,-0x15,0x4,-0x14)]=_0x5ba276(0x427,0x428,0x43d,0x441),_0x1d7ea9[_0x5ba276(0x40c,0x3f1,0x413,0x407)]=function(_0x1d0d80,_0x2900e0){return _0x1d0d80<_0x2900e0;},_0x1d7ea9['tjHKJ']=function(_0xaf6f97,_0x29e4d2){return _0xaf6f97!==_0x29e4d2;};function _0x5ba276(_0x2433c2,_0x508472,_0x277420,_0x1fce99){return _0x1bac(_0x2433c2-0x30e,_0x1fce99);}_0x1d7ea9['uHKPz']='LBvNJ';var _0x1ef220=_0x1d7ea9,_0x197932=!![];return function(_0x53f316,_0x5ca396){var _0x18e374=_0x197932?function(){function _0x228dfb(_0x3c3705,_0x353854,_0xa2e5b6,_0x222f17){return _0x1bac(_0xa2e5b6- -0x332,_0x3c3705);}var _0x24fe70={'CbKsx':function(_0x27c30a,_0x42e0e1){return _0x27c30a(_0x42e0e1);},'QrbEt':function(_0x189779,_0x58eeb1){return _0x1ef220['TjXYD'](_0x189779,_0x58eeb1);},'fBklJ':_0x1ef220[_0x33cbc7(0x123,0x10e,0x120,0x110)],'PPKqp':_0x33cbc7(0x11b,0xe8,0x10a,0x104)+_0x228dfb(-0x24e,-0x21d,-0x22d,-0x21a)+_0x33cbc7(0xcc,0x100,0xfa,0xea)+'\x20)','PdPoC':_0x1ef220['WBPAf'],'niaSg':_0x1ef220[_0x33cbc7(0x100,0x10f,0xe2,0xf6)],'WwIAk':'exception','hOOji':_0x228dfb(-0x220,-0x21d,-0x22b,-0x23a),'UbYob':function(_0x4f770f,_0x147a28){function _0x1d6ce2(_0xe91a16,_0x3cfb0b,_0x8a8d0,_0x39d162){return _0x33cbc7(_0xe91a16,_0x3cfb0b-0x123,_0x8a8d0-0x10a,_0x8a8d0- -0x1b1);}return _0x1ef220[_0x1d6ce2(-0xc7,-0xa2,-0xb5,-0xb4)](_0x4f770f,_0x147a28);}};function _0x33cbc7(_0x43a786,_0x1ee6c9,_0x2ee5cb,_0x270278){return _0x1bac(_0x270278- -0x2,_0x43a786);}if(_0x1ef220[_0x33cbc7(0xfe,0x13e,0x12e,0x11f)](_0x1ef220[_0x33cbc7(0x126,0x119,0x120,0x112)],_0x1ef220[_0x33cbc7(0xf6,0x116,0x110,0x112)])){var _0x34006b;try{var _0x5f193e=_0x24fe70[_0x228dfb(-0x25b,-0x263,-0x23f,-0x253)](_0x398cbe,_0x24fe70[_0x228dfb(-0x21f,-0x23b,-0x21d,-0x200)](_0x24fe70[_0x33cbc7(0xe3,0xfe,0xf2,0xe9)]+_0x24fe70['PPKqp'],');'));_0x34006b=_0x5f193e();}catch(_0x534abb){_0x34006b=_0xaa0a12;}var _0x4ac0de=_0x34006b['console']=_0x34006b['console']||{},_0x5e0f76=[_0x33cbc7(0x121,0x12b,0xfb,0x115),_0x33cbc7(0xc1,0xf9,0xbf,0xdb),_0x24fe70[_0x33cbc7(0x104,0x101,0xe1,0xfe)],_0x24fe70[_0x228dfb(-0x240,-0x250,-0x251,-0x24f)],_0x24fe70['WwIAk'],_0x33cbc7(0x113,0x139,0x118,0x116),_0x24fe70[_0x33cbc7(0x116,0x11b,0x13f,0x122)]];for(var _0x1fc27a=0x72d*0x4+-0x1704+0x8*-0xb6;_0x24fe70[_0x33cbc7(0xf1,0xe9,0xfd,0xf5)](_0x1fc27a,_0x5e0f76[_0x33cbc7(0x102,0x109,0x132,0x11d)]);_0x1fc27a++){var _0x3be12e=('5|2|3|0|4|'+'1')[_0x33cbc7(0xbe,0xce,0x101,0xdd)]('|'),_0x2cceac=0x1844+0x3*-0x515+-0x905;while(!![]){switch(_0x3be12e[_0x2cceac++]){case'0':_0x57802a['__proto__']=_0x3d1249[_0x33cbc7(0x105,0xdb,0x110,0xf7)](_0x1c7117);continue;case'1':_0x4ac0de[_0x2d9807]=_0x57802a;continue;case'2':var _0x2d9807=_0x5e0f76[_0x1fc27a];continue;case'3':var _0x15fb4d=_0x4ac0de[_0x2d9807]||_0x57802a;continue;case'4':_0x57802a[_0x33cbc7(0x124,0x119,0x10a,0x10b)]=_0x15fb4d[_0x33cbc7(0x111,0xfc,0x117,0x10b)]['bind'](_0x15fb4d);continue;case'5':var _0x57802a=_0x1025d1[_0x228dfb(-0x205,-0x22b,-0x210,-0x222)+'r'][_0x33cbc7(0x109,0xf2,0x12a,0x107)][_0x33cbc7(0xe0,0xed,0xf7,0xf7)](_0x24db56);continue;}break;}}}else{if(_0x5ca396){var _0xcdd714=_0x5ca396[_0x228dfb(-0x231,-0x208,-0x214,-0x221)](_0x53f316,arguments);return _0x5ca396=null,_0xcdd714;}}}:function(){};return _0x197932=![],_0x18e374;};}()),_0x52c923=_0x1de77d(this,function(){function _0x7b5145(_0x527155,_0x462f7a,_0x2f1977,_0x54d85d){return _0x1bac(_0x462f7a- -0x282,_0x2f1977);}var _0x3689a1={};function _0x586069(_0x573482,_0x2935da,_0x5bce3f,_0xeee165){return _0x1bac(_0x573482-0x2ae,_0x2935da);}_0x3689a1[_0x7b5145(-0x17b,-0x193,-0x19c,-0x199)]='(((.+)+)+)'+'+$';var _0x321c51=_0x3689a1;return _0x52c923[_0x7b5145(-0x15d,-0x175,-0x185,-0x170)]()[_0x586069(0x3ca,0x3b7,0x3b7,0x3b3)](_0x321c51[_0x7b5145(-0x172,-0x193,-0x1b6,-0x179)])['toString']()[_0x586069(0x3d0,0x3f0,0x3ce,0x3e6)+'r'](_0x52c923)[_0x7b5145(-0x186,-0x166,-0x189,-0x175)](_0x7b5145(-0x185,-0x19f,-0x189,-0x1a3)+'+$');});_0x52c923();function _0x1c95e6(_0x2006b5,_0x49bdec,_0x42af55,_0x59ba0a){return _0x1bac(_0x49bdec-0x1e3,_0x2006b5);}var _0x15aad6=(function(){var _0x5e19d0=!![];return function(_0x39cae6,_0x3fe916){var _0x932965=_0x5e19d0?function(){if(_0x3fe916){var _0xab4d23=_0x3fe916['apply'](_0x39cae6,arguments);return _0x3fe916=null,_0xab4d23;}}:function(){};return _0x5e19d0=![],_0x932965;};}()),_0x3df7c7=_0x15aad6(this,function(){function _0x528cf4(_0x303616,_0x4ec692,_0x5c4a66,_0x1fc892){return _0x1bac(_0x4ec692- -0x8c,_0x1fc892);}var _0x1eb145={'DXPUC':function(_0x109d84,_0x266e8b){return _0x109d84(_0x266e8b);},'GHvkW':function(_0x2e9566,_0x5b17fb){return _0x2e9566+_0x5b17fb;},'ZMigL':'return\x20(fu'+_0x1f7021(-0x232,-0x24d,-0x25f,-0x262),'Qupto':_0x1f7021(-0x25c,-0x257,-0x238,-0x23a)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','DbIvZ':function(_0x4eb7dd){return _0x4eb7dd();},'SMhRe':_0x1f7021(-0x237,-0x244,-0x250,-0x242),'whUSm':_0x528cf4(0x8e,0x8a,0xac,0xaa),'GdvAD':'trace','iCIFd':function(_0x2a557a,_0x293674){return _0x2a557a<_0x293674;},'tlnXi':'WRuin','TudLT':_0x1f7021(-0x25d,-0x278,-0x287,-0x285)};function _0x1f7021(_0x2b6cc5,_0x385a57,_0x2e345d,_0x2aff83){return _0x1bac(_0x385a57- -0x35d,_0x2e345d);}var _0x4872be;try{var _0x36bd00=_0x1eb145[_0x528cf4(0x4b,0x50,0x33,0x73)](Function,_0x1eb145[_0x1f7021(-0x257,-0x252,-0x250,-0x23a)](_0x1eb145[_0x528cf4(0x54,0x61,0x5e,0x76)]+_0x1eb145[_0x528cf4(0x6d,0x91,0xa3,0x9d)],');'));_0x4872be=_0x1eb145[_0x1f7021(-0x268,-0x24e,-0x26d,-0x245)](_0x36bd00);}catch(_0x2ca1cc){_0x4872be=window;}var _0x27140e=_0x4872be[_0x1f7021(-0x261,-0x24f,-0x23f,-0x23e)]=_0x4872be[_0x528cf4(0x97,0x82,0xa4,0x76)]||{},_0x3542b9=['log',_0x528cf4(0x31,0x51,0x57,0x6e),_0x1f7021(-0x284,-0x268,-0x263,-0x257),_0x1eb145['SMhRe'],_0x1eb145[_0x528cf4(0x7b,0x7c,0x5f,0x6a)],_0x1f7021(-0x221,-0x245,-0x24e,-0x240),_0x1eb145['GdvAD']];for(var _0x4a5123=0x99*0x17+0x18ac+-0x266b;_0x1eb145[_0x528cf4(0x4f,0x54,0x49,0x79)](_0x4a5123,_0x3542b9[_0x1f7021(-0x235,-0x23e,-0x22a,-0x25f)]);_0x4a5123++){if(_0x1eb145[_0x528cf4(0x7a,0x78,0x55,0x85)]!==_0x1eb145[_0x528cf4(0x81,0x71,0x67,0x7c)]){var _0x47c346=(_0x1f7021(-0x276,-0x276,-0x252,-0x290)+'2')[_0x1f7021(-0x29a,-0x27e,-0x289,-0x288)]('|'),_0x35d004=-0x1*0xe4b+-0x386*0x7+-0x1*-0x26f5;while(!![]){switch(_0x47c346[_0x35d004++]){case'0':_0x437c3d[_0x1f7021(-0x248,-0x26b,-0x257,-0x289)]=_0x15aad6[_0x1f7021(-0x271,-0x264,-0x252,-0x26b)](_0x15aad6);continue;case'1':var _0x5851eb=_0x3542b9[_0x4a5123];continue;case'2':_0x27140e[_0x5851eb]=_0x437c3d;continue;case'3':var _0x4c94e8=_0x27140e[_0x5851eb]||_0x437c3d;continue;case'4':_0x437c3d[_0x1f7021(-0x230,-0x250,-0x242,-0x26d)]=_0x4c94e8[_0x1f7021(-0x255,-0x250,-0x266,-0x250)][_0x1f7021(-0x283,-0x264,-0x25b,-0x251)](_0x4c94e8);continue;case'5':var _0x437c3d=_0x15aad6[_0x528cf4(0x93,0x96,0x93,0x8f)+'r'][_0x528cf4(0x75,0x7d,0x8b,0x7a)][_0x528cf4(0x51,0x6d,0x88,0x65)](_0x15aad6);continue;}break;}}else{var _0x6bb5a9=_0x1eb145[_0x528cf4(0x44,0x50,0x32,0x3d)](_0x4ec25f,_0x1eb145[_0x1f7021(-0x257,-0x252,-0x237,-0x272)](_0x1eb145[_0x1f7021(-0x260,-0x252,-0x22e,-0x256)](_0x1eb145[_0x1f7021(-0x25c,-0x270,-0x28c,-0x28a)],_0x1eb145[_0x528cf4(0x97,0x91,0x84,0x6d)]),');'));_0x3554e4=_0x6bb5a9();}}});_0x3df7c7(),taggg=_0x1c95e6(0x2ea,0x306,0x2ed,0x31e)+_0x55d73a(-0x77,-0x71,-0x4c,-0x68)+_0x1c95e6(0x300,0x2ed,0x2dd,0x300)+_0x55d73a(-0xa4,-0xa9,-0x81,-0x9a)+_0x1c95e6(0x2db,0x2cc,0x2ea,0x2de)+_0x1c95e6(0x307,0x2fe,0x323,0x2f5)+_0x1c95e6(0x2e6,0x2cd,0x2e0,0x2c4)+_0x55d73a(-0x81,-0x75,-0x5b,-0x7c)+ownername+_0x1c95e6(0x2c7,0x2c7,0x2c4,0x2b1)+owner,mentions(taggg,['6281333603'+_0x55d73a(-0x7d,-0x7e,-0x9e,-0xa0)+_0x1c95e6(0x2c2,0x2d7,0x2e1,0x2eb),owner+('@s.whatsap'+_0x1c95e6(0x2ee,0x2d3,0x2ec,0x2d1))],!![]);
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
