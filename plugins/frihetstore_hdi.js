let handler = async (m, { conn }) => {
  let teks = `*_PriceList Chip HDI_*
*HARGA NET*
🔰 *FrihetStore* 🔰

100M = 7.000
200M = 14.000
300M = 20.000
400M = 26.500
500M = 32.500
600M = 39.500
700M = 45.500
800M = 52.000
900M = 59.000
1B       = 62.500
3B+     = X62.000
7B+     = X61.500

NOTE : 
READY SETIAP HARI 100B
BONGKAR LANGSUNG PM ADMIN`.trim()
  m.reply(teks)
}

handler.command = /^(fshdi)$/i

module.exports = handler