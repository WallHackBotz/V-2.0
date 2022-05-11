let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://api.xteam.xyz/randomimage/darkjoke?APIKEY=457e12ead9fff041`)
    json = await heum.buffer()
//m.reply('APIKEY SALAH, pastikan anda pernah berlangganan di https://apikey-bear3.herokuapp.com/docs')

}
handler.help = ['darkjoke', 'darkjokes']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
