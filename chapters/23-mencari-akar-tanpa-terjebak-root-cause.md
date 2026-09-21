# Mencari Akar Tanpa Terjebak Root Cause

> **Yang dilatih:** Membedakan gejala, penyebab, kontribusi, mekanisme, dan titik intervensi tanpa mengubah dugaan sebab menjadi kepastian palsu.

> **Canonical concept:** PROBLEM.CAUSAL

## Mengapa Ini Penting

Ketika sesuatu gagal, pertanyaan kita biasanya sederhana:

> “Kenapa?”

Pertanyaannya penting. Yang perlu dijaga adalah jangan sampai kita merasa sudah tahu jawabannya sebelum cukup memeriksa.

> “Karena pegawainya kurang disiplin.”

> “Karena sistemnya jelek.”

> “Karena komunikasinya buruk.”

> “Karena SOP-nya salah.”

Semua itu mungkin benar. Tetapi “mungkin benar” berbeda dengan mengatakan:

> **“kita punya cukup evidence bahwa faktor ini berkontribusi melalui mekanisme tertentu.”**

Kita tidak membutuhkan kepastian palsu. Yang kita butuhkan adalah penjelasan yang cukup kuat untuk menentukan apa yang perlu diperbaiki.

::: success Green Note
****Jangan mencari root cause agar terlihat analitis. Cari penjelasan sebab yang cukup kuat untuk menentukan tindakan.****
:::

::: info Konteks
Chapter 21 membingkai masalah. Chapter 22 menjaga hipotesis dan alternatif. Chapter 23 menguji pertanyaan yang lebih sulit: “Apa yang sebenarnya menyebabkan outcome ini?”
:::

## Yang Sedang Kita Latih

Yang perlu dilatih adalah:

- membedakan korelasi dari sebab;
- melihat lebih dari satu faktor;
- mencari mekanisme;
- menguji alternatif penjelasan;
- dan memilih titik intervensi yang dapat diubah.

## 1. “Setelah itu terjadi” bukan berarti “karena itu”

Contoh:

> Setelah sistem baru dipasang, keterlambatan meningkat.

Kesimpulan:

> “Sistem baru menyebabkan keterlambatan.”

Mungkin. Tetapi mungkin juga pada saat yang sama:

- volume transaksi meningkat;
- pegawai baru mulai bekerja;
- prosedur berubah;
- integrasi belum selesai;
- atau target baru diberlakukan.

Urutan waktu memberi petunjuk, tetapi belum cukup untuk membuktikan hubungan sebab-akibat.

## 2. Gunakan timeline

Langkah sederhana:

**Apa yang terjadi sebelum outcome?** Misalnya kita ingin:

1. target berubah;
2. volume pekerjaan naik;
3. pegawai dipindahkan;
4. sistem diperbarui;
5. keterlambatan meningkat.

Sekarang kita punya beberapa kemungkinan yang bisa diperiksa. Jangan langsung memilih nomor 4 hanya karena paling terlihat.

## 3. Bedakan symptom, cause, contributor, mechanism

Contoh:

**Outcome:** laporan terlambat.

**Symptom:** deadline terlewati.

**Candidate contributor:** proses approval terlalu panjang.

**Mechanism:** setiap laporan harus menunggu dua approval yang tidak tersedia pada hari yang sama.

**Leverage point:** desain approval dapat diubah menjadi risk-based. Ini jauh lebih berguna daripada:

> “Root cause: birokrasi.”

## 4. Tidak semua outcome memiliki satu penyebab

Bayangkan keterlambatan disebabkan oleh:

- volume +30%;
- satu tahap manual;
- kapasitas reviewer berkurang;
- prioritas berubah.

Tidak perlu memaksa semuanya menjadi satu “akar masalah”. Bisa saja:

> beberapa faktor berkontribusi secara bersamaan.

Dalam sistem organisasi, interaksi antarfaktor sering lebih penting daripada satu faktor tunggal.

## 5. Tetapi jangan menggunakan kompleksitas sebagai alasan tidak bertindak

Kebalikan dari oversimplification adalah:

> “Sistemnya kompleks. Tidak ada yang tahu penyebabnya.”

Ini juga tidak membantu. Kita mungkin tidak akan pernah tahu seluruh struktur sebab-akibatnya. Tetapi mungkin cukup tahu:

> “Faktor X adalah contributor yang cukup kuat dan dapat kita ubah.”

Itu sudah dapat menjadi titik intervensi.

## 6. Tanyakan: “Bagaimana faktor ini menghasilkan outcome?”

Ini salah satu pertanyaan paling penting. Jangan hanya:

> “Apakah X berkaitan dengan Y?”

Tanyakan:

> **“**Bagaimana tepatnya X bisa menghasilkan Y?**”**

Misalnya kita ingin:

> “Beban kerja tinggi menyebabkan kesalahan.”

Bagaimana? Mungkin:

**beban tinggi → waktu pemeriksaan berkurang → langkah verifikasi dilewati → error meningkat.** Rantai mekanismenya sekarang lebih terlihat. Kemudian kita dapat bertanya:

> “Apakah data mendukung setiap bagian rantai itu?”

## 7. Cari alternative explanation

Misalnya kita ingin:

> “Kesalahan meningkat karena pegawai baru.”

Alternative:

> “Kesalahan meningkat karena volume naik.”

Alternative lain:

> “Kesalahan meningkat karena SOP berubah.”

Atau:

> “Kesalahan meningkat karena sistem memberi informasi yang membingungkan.”

Jangan mencari alternatif hanya untuk terlihat kritis. Cari alternatif yang:

> **benar-benar dapat menjelaskan evidence yang sama.**

## 8. Apa yang akan berbeda jika penyebabnya berbeda?

Ini membawa kita ke pertanyaan counterfactual. Misalnya dua hipotesis:

**H1:** keterlambatan karena kapasitas kurang.

**H2:** keterlambatan karena proses approval. Jika H1 benar:

> menambah kapasitas seharusnya memperbaiki waktu.

Jika H2 benar:

> menambah kapasitas mungkin hanya menambah antrean di tahap approval.

Sekarang kita tahu evidence apa yang berguna.

## 9. Jangan terlalu percaya pada 5 Whys

Bertanya “mengapa?” berulang kali dapat membantu membuka lapisan masalah. Contoh:

> Kenapa laporan terlambat?

Karena verifikasi terlambat. Kenapa verifikasi terlambat? Karena reviewer menunggu dokumen. Kenapa dokumen terlambat? Karena unit mengumpulkan data manual. Kenapa manual? Karena sistem belum terintegrasi. Cara itu bisa membantu membuka pertanyaan, tetapi hasil akhirnya tetap perlu diperiksa. Misalnya kalau berujung pada:

> “sistem belum terintegrasi”

belum otomatis merupakan root cause. Mungkin integrasi memang bukan pilihan terbaik. Mungkin masalah sebenarnya desain proses. Gunakan 5 Whys sebagai **pemicu investigasi**, bukan mesin pencari kebenaran kausal.

## 10. Root cause bisa berubah tergantung tujuan

Misalnya sistem lambat. Untuk tim infrastruktur:

> bottleneck database.

Untuk tim bisnis:

> proses terlalu banyak query.

Untuk pengguna:

> transaksi membutuhkan waktu terlalu lama.

Semua dapat benar pada level berbeda. Pemimpin perlu bertanya:

> **“**Kita membutuhkan penjelasan ini untuk keputusan apa?**”**

Ini membantu menghindari debat “mana root cause yang sebenarnya”.

## 11. Causal explanation harus sesuai level keputusan

Jika keputusan:

> “Apakah perlu tambah server?”

kita membutuhkan evidence tentang:

- beban;
- bottleneck;
- kapasitas;
- dan pola penggunaan.

Jika keputusan:

> “Apakah proses bisnis perlu disederhanakan?”

kita membutuhkan evidence tentang:

- langkah proses;
- approval;
- handoff;
- dan value setiap tahap.

Jangan mengumpulkan bukti yang tidak membantu keputusan yang sedang dihadapi.

## 12. Titik intervensi belum tentu akar masalah

Kadang penyebab paling awal justru bukan bagian yang paling mudah kita ubah. Misalnya kita ingin:

> volume transaksi memang meningkat.

Kita tidak dapat menghapus pertumbuhan. Tetapi kita dapat mengubah:

> proses verifikasi.

Jadi titik intervensi terbaik bukan selalu:

> “penyebab pertama.”

Melainkan:

> **faktor yang cukup berpengaruh dan cukup dapat diubah.**

## 13. High-stakes problems require stronger evidence

Jika masalah kecil:

> keterlambatan satu hari.

Analisis sederhana mungkin cukup. Jika masalah besar:

> keselamatan pasien, fraud, kerusakan aset besar, pelanggaran hukum, atau kegagalan sistem kritis;

jangan mengandalkan:

> “Menurut saya penyebabnya...”

Gunakan mekanisme investigasi yang sesuai:

- data;
- log;
- audit trail;
- specialist review;
- evidence preservation;
- formal investigation.

Semakin besar konsekuensinya, semakin kuat pula bukti yang kita perlukan.

## 14. Bahasa kausal harus terkalibrasi

Hindari:

> “X pasti menyebabkan Y.”

Jika evidence belum cukup. Gunakan:

> “X tampak berkontribusi terhadap Y.”

atau:

> “Data saat ini konsisten dengan hipotesis bahwa X berperan.”

atau:

> “Kami belum dapat membedakan apakah X atau Z merupakan penyebab utama.”

Bahasa seperti ini bukan tanda ragu-ragu. Justru ini bentuk **epistemic discipline**.

## 15. Framework kerja

Framework ini adalah **sintesis kerja buku**, bukan taxonomy causal analysis yang tervalidasi:

**Outcome → Timeline → Candidate causes → Alternatives → Mechanism → Evidence → Leverage point → Test → Update**

### Outcome

Apa yang sebenarnya terjadi?

### Timeline

Apa yang terjadi sebelum dan sesudahnya?

### Candidate causes

Faktor apa yang mungkin berkontribusi?

### Alternatives

Apa penjelasan lain yang juga cocok dengan evidence?

### Mechanism

Bagaimana faktor tersebut dapat menghasilkan outcome?

### Evidence

Apa yang mendukung atau melemahkan hipotesis?

### Leverage point

Faktor mana yang cukup berpengaruh dan dapat diubah?

### Test

Apa yang dapat diuji?

### Update

Apa yang berubah setelah evidence baru masuk?

## 16. Causal Card

**Outcome:**
Apa yang ingin dijelaskan?

**Before:**
Apa yang terjadi sebelumnya?

**Candidate:**
Apa kemungkinan penyebab?

**Mechanism:**
Bagaimana penyebab itu menghasilkan outcome?

**Alternative:**
Apa penjelasan lain?

**Evidence:**
Apa bukti untuk/terhadap masing-masing?

**Counterfactual:**
Apa yang seharusnya berbeda jika hipotesis ini benar?

**Leverage:**
Apa yang dapat kita ubah?

**Test:**
Apa yang bisa diuji sekarang?

**Confidence:**
Seberapa kuat kesimpulan kita?

## 17. Contoh: pegawai “tidak disiplin”

Outcome:

> pekerjaan sering terlambat.

Hipotesis pertama:

> pegawai tidak disiplin.

Turunkan. Apa observasinya?

> 5 dari 20 pekerjaan terlambat.

Alternative:

- prioritas sering berubah;
- instruksi tidak lengkap;
- approval terlambat;
- beban kerja tidak seimbang;
- skill gap;
- atau memang eksekusi buruk.

Sekarang kita punya beberapa kemungkinan. Setelah diperiksa, ternyata:

> 70% pekerjaan terlambat menunggu approval.

Maka:

> “pegawai tidak disiplin”

tidak lagi menjadi penjelasan utama untuk outcome tersebut. Accountability tetap ada. Ini berarti:

> **kita mengarahkan accountability ke masalah yang benar.**

## 18. Jangan memburu kepastian absolut

Pemimpin kadang menunggu:

> “Kita harus tahu penyebab 100% dulu.”

Tidak selalu. Jika evidence cukup menunjukkan:

> faktor X kemungkinan besar berkontribusi;

dan tindakan terhadap X:

- relatif aman;
- reversibel;
- murah;

kita dapat bergerak sambil belajar. Tingkat keyakinan kausal dan ambang untuk bertindak tidak harus sama. Keputusan dapat dibuat sebelum causal certainty sempurna.

## 19. Latihan: dari label ke mekanisme

Ambil tiga kalimat:

> “Dia malas.”

ubah menjadi:

> “Pekerjaan X terlambat tiga kali.”

Kemudian:

> “Mengapa?”

Jangan berhenti di:

> “Karena dia malas.”

Cari mekanisme.

---

> “Sistemnya jelek.”

Turunkan:

> “Pada transaksi X, pengguna harus memasukkan data yang sama dua kali.”

Kemudian:

> “Bagaimana pengulangan ini memengaruhi waktu?”

---

> “Birokrasi menghambat.”

Turunkan:

> “Dokumen melewati tiga approval sebelum dapat diproses.”

Kemudian:

> “Di tahap mana waktu paling banyak hilang?”

Tujuan latihan ini sederhana:

> **dari label → observasi → mekanisme → evidence → leverage point.**

## 20. Causal humility

Ada saat ketika jawaban yang paling profesional adalah:

> “Kami belum tahu.”

Bukan:

> “Tidak ada penyebab.”

Tetapi:

> “Evidence saat ini belum cukup membedakan antara beberapa penjelasan.”

Itu bukan kegagalan analisis. Itu justru titik yang lebih jujur untuk menentukan bukti apa yang perlu dicari.

::: warning Risiko
Jangan menyebut sesuatu “root cause” hanya karena terdengar final. Label yang terlalu pasti dapat membuat organisasi berhenti mencari penjelasan alternatif.
:::

::: danger Batas
Untuk keselamatan, fraud, pelanggaran hukum, atau insiden serius, jangan mengganti investigasi formal dengan causal reasoning informal.
:::

::: success Green Note
**Carry forward:** Tujuan analisis sebab bukan menemukan satu jawaban yang terdengar paling pintar. Tujuannya menemukan penjelasan yang cukup kuat untuk menentukan intervensi yang masuk akal.
:::

## Evidence notes

- Causal inference literature on counterfactual reasoning, confounding, mechanisms, and alternative explanations.
- Root-cause analysis literature, with caution around simplified tools such as 5 Whys.
- Safety/incident investigation literature on multifactorial causes.
- Chapter 7 observation/hypothesis discipline and Chapter 22 hypothesis testing.
