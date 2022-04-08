let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} lagi nyari sc nya ya?
Link Sc Dibawah Ini :
https://www.mediafire.com/file/cjhxn5uwaq16k2y/V1.zip/file

*Silahkan Gunakan Sc nya dengan Baik... Kalo node_module nya ga lengkap Install Sendiri!!*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
