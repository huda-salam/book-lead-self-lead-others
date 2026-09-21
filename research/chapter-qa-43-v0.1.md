# Chapter QA — 43 — Belajar dari Kegagalan

## Status

**PASS WITH REVISIONS**

Chapter sudah layak masuk ke rangkaian Part IX dan menjadi jembatan ke Chapter 44. Revisi lanjutan yang disarankan bersifat editorial/evidence refinement, bukan perubahan arsitektur.

## 1. Structural QA

### Pass
- Judul sesuai architecture: **Belajar dari Kegagalan**.
- Canonical concept jelas: `CASE.FAILURE`.
- Chapter tidak mengulang Chapter 40 sebagai metode membaca kasus secara umum.
- Chapter memperluas Chapter 26 (decision review), Chapter 34 (pressure/AAR), dan Chapter 39 (adaptation).
- Chapter menyiapkan transisi ke Chapter 44.

### Revision
Pastikan sidebar/TOC VitePress nanti mengekspos Chapter 43 dan 44 ketika Chapter 44 selesai.

## 2. Conceptual QA

### Pass
Chapter membedakan:
- outcome failure;
- decision failure;
- execution failure;
- assumption failure;
- system failure;
- external/boundary failure;
- learning/review failure.

Chapter juga membedakan:
- failure;
- near miss;
- blame;
- accountability;
- persistence;
- disengagement;
- resilience.

Tidak ada klaim:
> failure = success in disguise.

Tidak ada klaim:
> semua failure pasti menghasilkan learning.

## 3. Evidence QA

### Pass
Tiga sumber utama digunakan dengan fungsi yang berbeda:

1. **Sitkin (1992)** untuk small losses dan learning through failure. citeturn0search2
2. **Cannon & Edmondson (2005)** untuk identifying/analyzing failure, deliberate experimentation, serta hambatan teknis dan sosial terhadap learning. citeturn0search3
3. **Tannenbaum & Cerasoli (2013)** untuk evidence meta-analitik tentang debrief/AAR. citeturn0search0turn0search1

### Evidence caveat
Angka sekitar 20–25% peningkatan efektivitas dari meta-analysis hanya boleh dipakai sebagai hasil rata-rata studi yang dianalisis, bukan jaminan untuk organisasi tertentu. Chapter sengaja tidak menjadikan angka tersebut headline.

## 4. Attribution QA

### Pass
Outcome buruk tidak digunakan sebagai bukti otomatis bahwa:
- keputusan buruk;
- orang inkompeten;
- strategi salah.

Chapter meminta reconstruction atas information set pada saat keputusan.

### Red-team
Pertanyaan:
> “Apakah kita menilai keputusan dengan pengetahuan yang baru tersedia setelah kejadian?”

Jawaban:
> Chapter secara eksplisit melarang hindsight reasoning semacam itu.

## 5. Mechanism QA

### Pass
Chapter bergerak dari:
> outcome → diagnosis → mechanism → change → test.

Contoh “pegawai tidak teliti” dibongkar menjadi kemungkinan:
- checklist;
- workload;
- visibility;
- authority;
- information flow;
- process design.

Ini konsisten dengan Book OS:
> mechanism before judgment.

## 6. Learning QA

### Pass
Learning tidak didefinisikan sebagai:
> “saya mendapat pelajaran.”

Learning harus menghasilkan:
- update understanding;
- perubahan behavior/process/assumption/control;
- test;
- review.

Ini mencegah postmortem menjadi ritual.

## 7. Persistence / resilience QA

### Pass
Chapter tidak menyamakan:
- persistence dengan never give up;
- resilience dengan endure everything.

Rule:
> persist pada goal yang masih valid; adapt method; disengage jika goal/constraint tidak lagi layak.

Ini konsisten dengan canonical concepts pada foundation.

## 8. Organizational / ethical QA

### Pass
Accountability dipertahankan.
Blame tidak diposisikan sebagai sinonim accountability.

Chapter tidak menganjurkan:
- menutup-nutupi failure;
- menghindari corrective action;
- menyalahkan sistem untuk semua kasus;
- menghapus individual responsibility.

## 9. Retrieval QA

### Query: “bagaimana belajar dari kegagalan?”
Expected concepts:
- Failure-to-Learning Loop
- Failure Review Card
- reconstruction
- mechanism
- evidence
- change/test/review

### Query: “apakah failure selalu baik?”
Expected answer:
- tidak;
- informative / ambiguous / destructive;
- jangan romanticize failure.

### Query: “apakah orang yang gagal berarti tidak kompeten?”
Expected answer:
- tidak otomatis;
- lihat pattern, context, process, evidence.

### Query: “bagaimana membedakan accountability dan blame?”
Expected answer:
- accountability = responsibility + evidence + correction;
- blame = fixation on culprit, potentially suppressing information.

### Query: “kapan harus mencoba lagi?”
Expected answer:
- goal masih valid;
- evidence mendukung;
- method dapat diubah;
- downside dapat diterima;
- next test jelas.

## 10. Cross-chapter QA

### Chapter 4 — Resilience
No collision:
- Ch 4 = kemampuan bertahan/menyesuaikan saat setback;
- Ch 43 = bagaimana membaca dan mengolah failure menjadi learning.

### Chapter 26 — Decision Review
No collision:
- Ch 26 = review keputusan secara umum;
- Ch 43 = failure sebagai case khusus yang menuntut attribution dan learning.

### Chapter 34 — Pressure
No collision:
- Ch 34 = review setelah tekanan tinggi;
- Ch 43 = failure learning lintas konteks.

### Chapter 39 — Adaptation
No collision:
- Ch 39 = mengubah rencana saat dunia berubah;
- Ch 43 = evidence dari failure sebagai trigger update.

### Chapter 40 — Case Reasoning
No collision:
- Ch 40 = metode membaca kasus;
- Ch 43 = aplikasi khusus pada failure.

### Chapter 42 — Human Exemplars
Complementary:
- Ch 42 = jangan menganggap success story sebagai causal proof;
- Ch 43 = jangan menganggap failure story sebagai causal proof atau moral judgment.

### Chapter 44
Strong bridge:
- Chapter 43 menghasilkan update yang kemudian masuk ke practice/review/habit.

## 11. Red-team

| Risiko | Status |
|---|---|
| Failure = selalu baik | BLOCKED |
| Failure = bukti inkompetensi | BLOCKED |
| Outcome = decision quality | BLOCKED |
| Never give up | BLOCKED |
| Blame disguised as accountability | BLOCKED |
| System failure excuses all individual responsibility | BLOCKED |
| Deliberate experimentation = tolerate harm | BLOCKED |
| Postmortem = meeting ritual | BLOCKED |
| Lesson learned tanpa behavioral/system change | BLOCKED |

## 12. Editorial QA

### Strengths
- dense;
- practical;
- analytical;
- consistent with Book OS;
- strong bridge to Chapter 44;
- avoids motivational cliché.

### Minor revision candidates
- Beberapa bagian dapat dipadatkan pada final editorial pass.
- Jika nanti ditambahkan named failure cases, setiap case perlu evidence packet tersendiri.
- Kasus high-stakes perlu source primer/official dan tidak boleh dipakai hanya sebagai cerita inspiratif.

## Final verdict

**PASS WITH REVISIONS**

Chapter dapat dipertahankan sebagai canonical draft.

Next:
> **Chapter 44 — Personal Operating System: Response, Practice, Review, Habit**
