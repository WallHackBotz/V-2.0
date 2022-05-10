let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2Button(m.chat, `
╭─────[ *RULES* ]─────✧
│1 Dilarang Hina Bot / Owner
│2 Dilarabg Spam Command
│3 Dilarang Kirim Virtex
│4 Dilarang Spam Menu Ga Jelas
│5 Dilarang Telp / Vc
│6 Dilarang Culik Bot
│7 Dilarang Promosi
│8 Dilarang Meniru pesan Bot
│9 Bot Tidak Menerima Save Kontak
│10 Dilarang Chat Owner Ga Jelas
│11 No plagiat
╰──────────···

╭─────[ *HUKUM* ]─────✧
┴
│ 1 & 11 = Block + banned permanent
│ 2,4,6 & 8 = Banned sementara
│ 3 = War 
│ 5 = Block sementara
│ 9 & 10 = Block permanent
┬
╰──────────···
${wm}
`.trim(), 'Harap patuhin peraturan tersebut', '⋮☰ Menu', '.menu', 'Owner', '.owner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules)$/i

module.exports = handler

let wm = global.botwm