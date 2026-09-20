# Retrieval Test Set v0.1

> Purpose: test whether the book can be entered by real questions, cases, red flags, claims, decisions, and practice needs without losing canonical ownership or epistemic status.

| ID | Entry type | Representative query | Expected canonical route |
|---|---|---|---|
| Q01 | question | Saya langsung emosi ketika dikritik. | Ch 2 → Ch 3 |
| Q02 | question | Bagaimana berhenti merasa harus selalu benar? | Ch 2 → Ch 3 |
| Q03 | question | Bagaimana tetap positif ketika situasi memang buruk? | Ch 5 |
| Q04 | question | Kapan saya sebaiknya tidak langsung menjawab? | Ch 6 |
| Q05 | red flag | Saya merasa dia pasti sengaja menjatuhkan saya. | Ch 7 → Ch 8 |
| Q06 | question | Bagaimana membaca maksud orang tanpa sok tahu? | Ch 8 |
| Q07 | decision | Haruskah saya diam, bertanya, atau eskalasi? | Ch 9 |
| Q08 | case | Rekan kerja curhat dan saya ikut panas. | Ch 10 → Ch 2 |
| Q09 | question | Bagaimana mendengarkan tanpa ikut memperbesar masalah? | Ch 10 |
| Q10 | question | Bagaimana menghormati orang yang saya anggap kurang kompeten? | Ch 11 |
| Q11 | question | Bagaimana menyampaikan kritik tanpa membuat orang defensif? | Ch 12 → Ch 15 |
| Q12 | question | Kapan cletukan masih aman di kantor? | Ch 13 |
| Q13 | question | Bagaimana menyampaikan pesan yang sama ke atasan dan bawahan? | Ch 14 |
| Q14 | decision | Bagaimana memberi feedback untuk kesalahan berulang? | Ch 15 → Ch 19 |
| Q15 | case | Tim saya takut menyampaikan kesalahan. | Ch 16 → Ch 15 |
| Q16 | question | Konflik ini perlu diselesaikan sekarang atau ditunda? | Ch 17 → Ch 18 |
| Q17 | decision | Bagaimana menolak permintaan tanpa menjadi kasar? | Ch 19 |
| Q18 | case | Saya membuat kesalahan dan hubungan menjadi renggang. | Ch 20 |
| Q19 | question | Keluhan ini sebenarnya masalah apa? | Ch 21 |
| Q20 | question | Mengapa kita jangan langsung memilih solusi pertama? | Ch 22 |
| Q21 | claim | Semua masalah pasti punya satu root cause. | Ch 23 |
| Q22 | decision | Semua opsi punya risiko; bagaimana memilih? | Ch 24 |
| Q23 | question | Setelah keputusan dibuat, siapa melakukan apa? | Ch 25 |
| Q24 | claim | Keputusan buruk pasti terlihat dari outcome buruk. | Ch 26 |
| Q25 | case | Secara formal struktur organisasi jelas, tetapi keputusan tetap tersendat. | Ch 27 → Ch 28 |
| Q26 | question | Bagaimana membaca kepentingan pihak yang berbeda? | Ch 28 → Ch 29 |
| Q27 | red flag | Saya harus mengikuti permainan mereka agar selamat. | Ch 29 → Ch 30 |
| Q28 | decision | Kapan saya harus memilih pertarungan? | Ch 29 → Ch 30 → Ch 34 |
| Q29 | question | Bagaimana memimpin tanpa jabatan? | Ch 31 → Ch 32 |
| Q30 | question | Bagaimana membuat bawahan berkembang tanpa micromanage? | Ch 33 → Ch 36 |
| Q31 | case | Saat tekanan tinggi saya menjadi sumber kepanikan tim. | Ch 34 → Ch 2 |
| Q32 | decision | Apa yang harus dihentikan karena tidak lagi bernilai? | Ch 35 |
| Q33 | question | Bagaimana delegasi tanpa sekadar memindahkan beban? | Ch 36 |
| Q34 | question | Apa konsekuensi langkah kedua dari keputusan ini? | Ch 37 |
| Q35 | decision | Strategi mana yang harus dipilih ketika sumber daya terbatas? | Ch 38 |
| Q36 | question | Kapan rencana harus diubah? | Ch 39 |
| Q37 | case | Apa yang sebenarnya bisa saya pelajari dari kisah seorang tokoh? | Ch 40 → Ch 41/42 |
| Q38 | evidence | Apakah kisah tokoh bisa membuktikan suatu metode efektif? | Ch 40 → Ch 41/42 |
| Q39 | failure | Saya gagal; bagaimana membedakan keputusan buruk dari hasil buruk? | Ch 26 → Ch 43 |
| Q40 | practice | Saya ingin melatih jeda sebelum merespons kritik. | Ch 2 → Ch 6 → Ch 44 |

## Retrieval acceptance criteria
1. Entry reaches a canonical owner without requiring keyword luck.
2. Related chapters are returned only when they materially contribute.
3. The route distinguishes definition, mechanism, evidence, application, boundary, and practice.
4. A case is not returned as causal evidence merely because it is relevant.
5. A claim routes to evidence and uncertainty, not directly to a recommendation.
6. A question about another person's intent routes through perspective-taking and hypothesis testing, not mind reading.
7. A decision route exposes trade-offs and boundaries.
8. Practice retrieval ends in an actionable drill plus review.

## Initial result
All 40 representative entries have an identifiable route in the 44-chapter architecture. No orphan entry was found. The main remaining risk is not missing chapters but ensuring the future knowledge records preserve relationships between concepts and chapters.

## Next test
Run the same 40 entries against the actual drafted knowledge records after Chapter 1+ are written; then add adversarial queries with ambiguous wording, contradictory assumptions, and emotionally loaded language.