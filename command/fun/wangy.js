module.exports = {
	name: "wangy",
	category: "fun",
	query: `Masukkan Nama`,
	use: "<teks>",
	desc: "Teks Stress",
	async run({ msg, conn }, { q }) {
	const buttons = `${q} ${q} ${q} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${q} wangi aku mau nyiumin aroma wanginya ${q} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${q} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${q} AAAAA LUCCUUUUUUUUUUUUUUU............ ${q} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${q} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${q} gw ... ${q} di laptop ngeliatin gw, ${q} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${q} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${q} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
    await msg.reply(buttons, { adReply: true });
	},
};
