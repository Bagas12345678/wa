let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo
⟩» *Fitur Ini Khusus Premium Ya Jika Ingin Beli Silahkan Cek Harga Di Bawah Ini*
          
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 BULAN* 15.000
⬡ *2 BULAN:* 25.000
⬡ *PERMANEN:* 30.000
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewazifa', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
