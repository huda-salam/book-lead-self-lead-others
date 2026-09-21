# Human Voice Editorial Standard v0.1

## Purpose

Membuat **Memimpin Diri, Memimpin Sesama** terdengar seperti buku yang ditulis oleh praktisi yang berpikir jernih tentang kehidupan kerja, bukan seperti keluaran template, modul pelatihan, atau ringkasan literatur.

Standar ini mengubah **cara penyampaian**, bukan standar evidence, canonical concept, atau batas epistemik buku.

## Target voice

- dewasa, tenang, hangat, dan terus terang;
- reflektif tanpa menjadi puitis berlebihan;
- praktis tanpa terdengar seperti modul corporate training;
- analitis tanpa menjadi textbook;
- sesekali humor observasional yang ringan;
- dekat dengan Bahasa Indonesia profesional yang benar-benar dipakai orang;
- berani mengakui bahwa manusia sering bereaksi tidak serapi framework.

Persona penulis: **praktisi senior yang pernah mengalami, melihat, salah, memperbaiki, dan mengajak pembaca berpikir.** Bukan guru yang selalu benar.

## Prinsip rewrite

1. Mulai dari pengalaman atau masalah manusia ketika itu membuat gagasan lebih hidup.
2. Gunakan kalimat normal dan bervariasi; jangan menjadikan fragmen pendek sebagai gaya default.
3. Gunakan pertanyaan retoris seperlunya, bukan sebagai pola setiap subbagian.
4. Kurangi formula berulang seperti “bukan X, tetapi Y”; pertahankan hanya jika pembedaan konsep memang canonical dan penting.
5. Kurangi “Dalam kerangka buku ini”, “Leader perlu”, “Pertanyaan yang lebih penting”, dan formula sejenis.
6. Kurangi istilah Inggris jika padanan Indonesia cukup; pertahankan istilah teknis yang memang membawa makna.
7. Gunakan contoh percakapan dan adegan singkat ketika membantu pembaca mengenali dirinya.
8. Setelah pengalaman, baru masuk ke mekanisme dan evidence.
9. Evidence harus tetap dapat dilacak dan tidak boleh dilemahkan oleh gaya naratif.
10. Framework tetap ringkas; essay tidak perlu terdengar seperti framework.
11. Hindari bahasa motivasional generik dan klaim perubahan yang berlebihan.
12. Biarkan karakter, keraguan, trade-off, dan ketidaksempurnaan manusia tetap terlihat.
13. Nilai Jawa dan Islam tetap ditempatkan sesuai provenance: konteks/normatif, bukan empirical evidence.
14. Jangan membuat contoh terdengar seperti pengalaman penulis bila sumbernya sebenarnya ilustrasi.

## Bahasa

Default: Bahasa Indonesia.

Gunakan istilah Inggris hanya ketika:
- istilah tersebut sudah lazim dan lebih presisi;
- merupakan istilah sumber yang sedang dibahas;
- atau diperlukan untuk menjaga keterhubungan dengan literatur.

Pada kemunculan pertama, berikan padanan Indonesia bila membantu.

## Ritme

Target umum per bagian:

**adegan / observasi → refleksi → mekanisme → evidence/limit → contoh → praktik**

Tidak semua bagian harus mengikuti urutan tersebut. Variasikan ritme.

## Anti-bot checks

Editor harus mencari:
- paragraf berturut-turut yang semuanya dimulai dengan “Kita”, “Leader”, “Karena itu”, atau “Maka”;
- rentetan kalimat 2–8 kata;
- rentetan heading yang semuanya berbentuk definisi;
- formula “X bukan Y” yang berulang;
- “ini bukan berarti” yang berulang;
- bahasa checklist di tengah essay;
- jargon yang tidak diperlukan;
- transisi yang menjelaskan arsitektur buku lebih daripada membantu pembaca.

## Yang tidak boleh berubah tanpa alasan

- canonical concept;
- core loop;
- framework yang sudah diputuskan;
- evidence provenance;
- batas transfer;
- distinction antar-konsep;
- sumber Islam dan tingkat otoritasnya;
- safety/ethics/compliance boundaries.

## Release rule

Human Voice Pass dianggap selesai hanya setelah:
- seluruh 44 chapter disentuh;
- tidak ada chapter yang dibiarkan hanya karena sudah “terlihat rapi”;
- evidence/runtime citation sweep diulang;
- VitePress CI kembali PASS;
- full-book editorial QA diperbarui.

RC1 reader testing berjalan **setelah** voice pass ini selesai.
