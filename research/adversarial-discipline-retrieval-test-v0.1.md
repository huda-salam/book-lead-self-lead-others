# Adversarial Retrieval Test v0.3 — Discipline, Consistency, Persistence

> Purpose: memastikan konsep baru tidak collapse menjadi “disiplin = memaksa diri”, “persisten = tidak boleh berhenti”, atau “konsisten = tidak boleh berubah”.

| ID | User query | Expected route | Acceptance condition |
|---|---|---|---|
| D01 | Saya semangat sekali di awal, lalu lemas di tengah. | SELF.DISCIPLINE → SELF.CONSISTENCY → PRACTICE.OS | retrieves execution design and review, not moral blame |
| D02 | Saya tahu apa yang harus dilakukan tetapi selalu menunda. | SELF.DISCIPLINE | distinguishes intention from execution and examines friction/triggers |
| D03 | Kalau saya sudah memilih cara, bukankah konsisten berarti harus terus dengan cara itu? | SELF.CONSISTENCY → DECISION.GOAL_DISCIPLINE → STRAT.ADAPTATION | preserves consistency of goal/principle while allowing method change |
| D04 | Saya sudah menghabiskan banyak waktu dan uang pada solusi ini. Masa harus ganti? | DECISION.GOAL_DISCIPLINE → DECISION.REVIEW | surfaces sunk-cost hypothesis without asserting it as cause |
| D05 | Kalau saya berhenti, berarti saya tidak persisten? | SELF.PERSISTENCE → DECISION.GOAL_DISCIPLINE | checks goal validity, constraints, reversibility, and method viability |
| D06 | Saya terus mencoba cara yang sama walaupun berkali-kali gagal. | SELF.PERSISTENCE → STRAT.ADAPTATION | flags rigidity rather than praising persistence |
| D07 | Bagaimana tetap konsisten ketika situasi berubah? | SELF.CONSISTENCY → STRAT.ADAPTATION | distinguishes stable principle/goal from adaptable method |
| D08 | Saya gagal menjalankan rencana. Apakah saya malas? | SELF.DISCIPLINE → DECISION.REVIEW | no character diagnosis; examines commitment, friction, context, method |
| D09 | Saya sudah riset banyak sekali tetapi tidak kunjung mengambil keputusan. | LITERACY.DISCIPLINE → DECISION.TRADEOFF | prevents over-analysis from masquerading as rigor |
| D10 | Saya membaca berita ini dan rasanya benar. Apa perlu cek lagi? | LITERACY.DISCIPLINE → READ.OBSERVATION | calibrates verification to stakes and evidence |
| D11 | Saya yakin dia manipulatif karena tiga kali melakukan X. | LITERACY.DISCIPLINE → READ.OBSERVATION → ORG.DEFENSE | observation separated from label/intent |
| D12 | Saya ingin konsisten, jadi target saya harus sempurna setiap hari. | SELF.DISCIPLINE → SELF.CONSISTENCY | rejects perfectionism and tests sustainability |
| D13 | Saya selalu kuat dua minggu, lalu berhenti total. | SELF.CONSISTENCY → PRACTICE.OS → DECISION.REVIEW | identifies maintenance failure and designs recovery loop |
| D14 | Goal saya masih penting, tetapi solusi saya jelas tidak bekerja. | DECISION.GOAL_DISCIPLINE → STRAT.ADAPTATION | preserves goal, changes method |
| D15 | Saya sudah gagal beberapa kali. Haruskah saya memaksa diri lebih keras? | SELF.RESILIENCE → SELF.DISCIPLINE → DECISION.REVIEW | tests whether more effort or a different method is warranted |

## Acceptance rules

1. Persistence must never be returned as “never stop”.
2. Consistency must never be returned as “always do exactly the same thing”.
3. Discipline must not become a moral judgment about character.
4. Goal discipline must distinguish goal commitment from solution attachment.
5. Literacy discipline must support proportional verification, not endless skepticism.
6. User-reported failure patterns are cases/design inputs, not population evidence.
7. A response should expose at least one review/update point when the user is dealing with a long-running goal.

## Result

Architecture-level review: **PASS WITH CONDITIONS**.

Conditions:
- final evidence review is still required for persistence, self-regulation, implementation intentions, and long-term behavior maintenance;
- chapter-level records must inherit these distinctions;
- practice claims must remain explicitly bounded;
- Chapter 44 must test recovery after a lapse, not only ideal routine adherence.
