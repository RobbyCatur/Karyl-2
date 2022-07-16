const ds = require('dandi-api')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Kirim link fb nya'
    else m.reply('Proses')
  ds.Facebook(args[0]).then(r => { 
    let me = conn.user.name
    let vid = r.data[0].url
    conn.sendFile(m.chat, vid, 'vid.mp4', `${me} Facebook downloader`, m)
  })
}

handler.help = ['fb', 'fbdl', 'facebook']
handler.tags = ['downloader']
handler.command = /^(fb|fbdl|facebook)$/i
handler.limit = false
module.exports = handler
