function monospace(teks) {
	return "```" + teks + "```";
}

module.exports = {
	name: "imgtopdf",
	alias: ["pdf", "topdf"],
	category: "tools",
	desc: "Mengubah Foto Ke Dokumen PDF",
	isSpam: true,
	isLimit: true,
	query: `Masukan nama file atau nama dokumen PDF kamu`,
	isPrivate: true,
	async run({ msg, conn }, { q, map }) {
		if (map.pdf.has(msg.sender)) throw "Kamu masih dalam sesi Image to pdf";
		var pdf = map.pdf;
		pdf.set(msg.sender, { name: q, array: [] });
		await msg.reply(`Silahkan kirim gambar satu persatu

Dengan cara reply gambar kemudian ketik *add*
untuk menambahkan gambar

Jika selesai ketik *selesai*, jika ingin membatalkan
ketik *cancel*

${monospace(`Image To PDF By Hyzer Official`)}`);
		await conn.sendImage(msg.from, "https://uploader.caliph.my.id/file/ywRQXZylAL.jpg", msg, {
			caption: "Contoh Penggunaan / Usage Example",
		});
	},
};
