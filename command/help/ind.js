exports.limitcount = (prem, limitCounts) => {
	return`
*ã LIMIT COUNT ã*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` ðââï¸ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar ð`
	}
exports.eror = () =>{
	return` Yah eror`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

â Nama : ${pushname}
â Nomor : ${sender.split("@")[0]}
â Waktu : ${time}
â Serial : ${serialUser}
â Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` ðââï¸ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`ðââï¸ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`â ï¸ Bot bukan admin grup`
	}
exports.err = () =>{
	return`â ï¸ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`ðââï¸ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`â³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` â Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
â¯â¡   ÖNama :
â¯Ö¸â¡   ÖUmur :
â¯Ö¸â¡   ÖKelamin :
â¯Ö¸â¡   ÖAskot :
â°â á¬ _Patuhi Rules Group Ya_  ð`
      }
exports.leave = () =>{
	return`
â
â°â á¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
â­ââ¡
ââINFO RPANâ¡BOTâ
âVERSI : 0.02
âFITUR : 230
âCREATOR : REVAN
âINSTAGRAM : revanabi_
â°ââââââââââââââââ â³¹

â­ââ¬£ *List Menu*
â â ${prefix}menu
â â ${prefix}help
â â ${prefix}apri
â
â *Download*
â â ${prefix}play [query]
â â ${prefix}song [judul lagu]
â â ${prefix}pinterest [query]
â â ${prefix}ytmp3 [url]
â â ${prefix}ytmp4 [url]
â â ${prefix}ig [url]
â â ${prefix}igstalk
â â ${prefix}githubstalk
â â ${prefix}ytsearch [query]
â â ${prefix}mediafire [url]
â â ${prefix}tiktok [url]
â â ${prefix}tiktoknowm [url]
â â ${prefix}tiktokwm [url]
â â ${prefix}tiktokaudio [url]
â â ${prefix}soundcloud [url]
â â ${prefix}telesticker [url]
â
â *Wibu*
â â ${prefix}otaku
â â ${prefix}komiku
â â ${prefix}chara
â â ${prefix}naruto
â â ${prefix}kaneki
â â ${prefix}rimuru
â â ${prefix}akira
â â ${prefix}kurama
â â ${prefix}dazai
â â ${prefix}miku
â â ${prefix}mikasa
â â ${prefix}eren
â â ${prefix}titan
â â ${prefix}levi
â â ${prefix}sakura
â â ${prefix}hinata
â â ${prefix}neji
â â ${prefix}shinobu
â â ${prefix}kurumi
â â ${prefix}rem
â â ${prefix}minato
â â ${prefix}jiraya
â â ${prefix}tsunade
â â ${prefix}kiba
â â ${prefix}boruto
â â ${prefix}sarada
â â ${prefix}sasuke
â â ${prefix}madara
â â ${prefix}obito
â â ${prefix}tanjiro
â â ${prefix}nezuko
â â ${prefix}luffy
â â ${prefix}zoro
â â ${prefix}sanji
â â ${prefix}gon
â â ${prefix}killua
â â ${prefix}sagiri
â â ${prefix}zenitsu
â â ${prefix}natsu
â â ${prefix}genos
â â ${prefix}saitama
â â ${prefix}inosuke
â â ${prefix}inori
â
â *Sfw Dan Nsfw*
â â ${prefix}waifu
â â ${prefix}husbu
â â ${prefix}loli
â â ${prefix}milf
â â ${prefix}cosplay
â â ${prefix}wallml
â â ${prefix}futanari
â â ${prefix}nekoh
â â ${prefix}anal
â â ${prefix}hentai
â â ${prefix}ahegao
â â ${prefix}ass
â â ${prefix}blowjob
â â ${prefix}bdsm
â â ${prefix}cuckold
â â ${prefix}cum
â â ${prefix}ero
â â ${prefix}femdom
â â ${prefix}foot
â â ${prefix}gangbang
â â ${prefix}glasses
â â ${prefix}masturbation
â â ${prefix}orgy
â â ${prefix}panties
â â ${prefix}pussy
â â ${prefix}things
â â ${prefix}yuri
â â ${prefix}neko
â
â *Asupan*
â â ${prefix}asupan
â â ${prefix}ukty
â â ${prefix}ghea
â â ${prefix}rikagusriani
â â ${prefix}bocil
â â ${prefix}santuy
â
â *Convert*
â â ${prefix}stiker [video/image]
â â ${prefix}semoji ð
â â ${prefix}attp
â â ${prefix}ttp
â â ${prefix}toimg
â â ${prefix}smeme [text]
â â ${prefix}memegen [text|text2]
â â ${prefix}toptt
â â ${prefix}tomp3
â â ${prefix}tomp4
â â ${prefix}fast [video/vn]
â â ${prefix}tupai [video/vn]
â â ${prefix}vibra [video/vn]
â â ${prefix}tourl [image/video]
â â ${prefix}robot [video/vn]
â â ${prefix}slow [video/vn]
â â ${prefix}bass [video/vn]
â â ${prefix}nightcore [video/vn]
â
â *Education*
â â ${prefix}nuliskiri [text]
â â ${prefix}nuliskanan [text]
â â ${prefix}brainly [soal]
â â ${prefix}foliokiri [text]
â â ${prefix}foliokanan [text]
â â ${prefix}pantun
â 
â *Walpaper*
â â ${prefix}walpaper
â â ${prefix}teknologi
â â ${prefix}programmer
â â ${prefix}gamer
â â ${prefix}anime
â â ${prefix}muslim
â â ${prefix}cyber
â
â *Other*
â â ${prefix}ssweb
â â ${prefix}cekapikey [lolhuman]
â â ${prefix}delete
â â ${prefix}meme
â â ${prefix}readmore
â â ${prefix}infogempa
â â ${prefix}upswvideo
â â ${prefix}upswteks
â â ${prefix}upswimage
â â ${prefix}quotesanime
â â ${prefix}searchgc [link]
â â ${prefix}playstore [nama apk]
â
â *Islam*
â â ${prefix}kisahnabi
â â ${prefix}surah
â
â *Sound*
â â ${prefix}sound
â â ${prefix}sound1
â â ${prefix}sound2
â â ${prefix}sound3
â â ${prefix}sound4
â â ${prefix}sound5
â â ${prefix}sound6
â â ${prefix}sound7
â â ${prefix}sound8
â â ${prefix}sound9
â â ${prefix}sound10
â â ${prefix}sound11
â â ${prefix}sound12
â
â *Game*
â â ${prefix}tebakgambar 
â â ${prefix}suit
â â ${prefix}family100
â â ${prefix}caklontong
â â ${prefix}truth
â â ${prefix}dare
â â ${prefix}gaycek
â â ${prefix}sangecek
â â ${prefix}lesbicek
â â ${prefix}gantengcek
â â ${prefix}cantikcek
â â ${prefix}cantik
â â ${prefix}ganteng
â â ${prefix}jelek
â â ${prefix}goblok
â â ${prefix}bego
â â ${prefix}pinter
â â ${prefix}jago
â â ${prefix}nolep
â â ${prefix}monyet
â â ${prefix}babi
â â ${prefix}beban
â â ${prefix}baik
â â ${prefix}jahat
â â ${prefix}anjing
â â ${prefix}haram
â â ${prefix}kontol
â â ${prefix}pakboy
â â ${prefix}wibu
â â ${prefix}hebat
â â ${prefix}sadboy
â â ${prefix}sadgirl
â â ${prefix}apakah
â â ${prefix}kapankah
â â ${prefix}pakgirl
â â ${prefix}jadian
â
â *Photooxy*
â â ${prefix}narutobanner
â â ${prefix}shadow
â â ${prefix}romantic
â â ${prefix}smoke
â â ${prefix}burnpaper
â â ${prefix}lovemsg
â â ${prefix}grass
â â ${prefix}doubleheart
â â ${prefix}coffecup
â â ${prefix}lovetext
â â ${prefix}butterfly
â
â *Info*
â â ${prefix}owner
â â ${prefix}donasi
â â ${prefix}rules
â â ${prefix}daftar
â â ${prefix}creator
â
â *Owner*
â â ${prefix}bc [text]
â â ${prefix}bc2 [text]
â â ${prefix}leave
â â ${prefix}get [link]
â â ${prefix}shutdown
â â ${prefix}restart
â â ${prefix}buggc
â â ${prefix}creategrup @tag
â â ${prefix}listgroup
â â ${prefix}block
â â ${prefix}unblock
â â ${prefix}setppbot
â â >
â â $
â â  => 
â
â *Group*
â â ${prefix}antilink 1 / 0
â â ${prefix}antivirtex 1 / 0
â â ${prefix}hidetag [text]
â â ${prefix}linkgrup
â â ${prefix}grup open/close
â â ${prefix}add 628
â â ${prefix}tagall
â â ${prefix}kick @tag
â â ${prefix}setdesc [text] 
â â ${prefix}setname [text] 
â°ââ¬£
â­ââ¡ BIG THANKS TO â¡
ââ POWERED BY REVAN â
â°ââââââââââââââââ â³¹
`
	}