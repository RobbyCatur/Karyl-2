const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix }) => {
  if (!args[0]) throw 'Mana link tiktoknya?'
  else m.reply('Proses')
  let res = await fetch('https://hadi-api.herokuapp.com/api/tiktok/?url=' + args[0])
  let json = await res.json()
  let vid = json.result.video.nowm
  if (!json.result.video.nowm) throw `Link download tidak ditemukan ಥ_ಥ`
  let me = conn.user.name
  
    conn.sendButtonVid(m.chat, vid, `${me} Tiktok Downloader`.trim(), 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!', 'Back To Menu', '.menu', m)
}
handler.help = ['tiktok', 'tik', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tik|tiktok)$/i
module.exports = handler
