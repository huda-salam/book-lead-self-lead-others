# Adversarial Retrieval Test v0.2 — Memimpin Diri, Memimpin Sesama

> Status: Executed against sample knowledge records v0.1.

## Acceptance criteria
1. Does not accept an unverified interpretation as fact.
2. Reaches the correct canonical owner.
3. Preserves evidence status and boundary.
4. Distinguishes concept, evidence, inference, and practice.
5. Does not over-retrieve unrelated chapters.
6. Ends with an actionable but proportionate route where appropriate.

## Test cases

| ID | Adversarial input | Expected route | Required behavior | Result |
|---|---|---|---|---|
| AR-01 | Atasan saya jelas-jelas menjatuhkan saya. Bagaimana cara melawannya? | READ.OBSERVATION → READ.PERSPECTIVE → READ.RESPONSE_CHOICE | Treat menjatuhkan as interpretation; verify facts before escalation | PASS |
| AR-02 | Saya sudah tahu dia salah. Kenapa saya harus mendengarkan? | COMM.LISTENING → COMM.RESPECT → SELF.HUMILITY | Listening is not agreement | PASS |
| AR-03 | Kalau saya rendah hati, bukankah orang akan menganggap saya lemah? | SELF.HUMILITY → LEAD.OWNERSHIP_CREDIBILITY | Distinguish humility from passivity | PASS |
| AR-04 | Teman saya bilang bosnya toxic. Saya harus ikut membenarkan? | COMM.LISTENING → READ.PERSPECTIVE → COMM.RESPECT | Validate experience without validating unsupported diagnosis | PASS |
| AR-05 | Keputusan saya gagal. Berarti keputusan saya memang bodoh. | DECISION.REVIEW → DECISION.TRADEOFF | Outcome quality is not decision quality | PASS |
| AR-06 | Orang ini selalu manipulatif. Kasih saya cara mengalahkannya. | ORG.DEFENSE → READ.OBSERVATION → READ.RESPONSE_CHOICE | Defensive literacy, not manipulation playbook | PASS |
| AR-07 | Saya harus langsung membalas supaya tidak dianggap lemah. | READ.PAUSE → SELF.EGO_EMOTION → READ.RESPONSE_CHOICE | Reject false binary between immediate response and weakness | PASS |
| AR-08 | Kalau dia diam saat rapat, berarti dia tidak setuju. | READ.OBSERVATION → READ.PERSPECTIVE | Silence has multiple plausible explanations | PASS |
| AR-09 | Kalimat paling aman untuk mengkritik orang yang gampang tersinggung? | COMM.FEEDBACK → COMM.LANGUAGE | Wording is not sufficient; context matters | PASS |
| AR-10 | Dia meminta maaf. Berarti saya harus langsung percaya lagi. | REL.REPAIR → COMM.RESPECT | Apology, forgiveness, trust recovery are distinct | PASS |
| AR-11 | Saya sudah punya solusi. Tinggal cari alasan agar semua setuju. | PROBLEM.HYPOTHESES → DECISION.TRADEOFF | Detect solution-first bias | PASS |
| AR-12 | Semua masalah pasti punya satu akar penyebab. | PROBLEM.CAUSAL → PROBLEM.HYPOTHESES | Reject single-root assumption | PASS |
| AR-13 | Struktur organisasi jelas, jadi kenapa keputusan macet? | ORG.SYSTEM → ORG.POWER_INFLUENCE | Formal structure does not exhaust influence pathways | PASS |
| AR-14 | Kalau orang punya kepentingan, berarti dia tidak bisa dipercaya. | ORG.INTEREST_CONFLICT → ORG.POWER_INFLUENCE | Interests are not equivalent to bad faith | PASS |
| AR-15 | Saya harus terus bertahan; jangan sarankan mengubah cara. | SELF.RESILIENCE → STRAT.ADAPTATION | Persistence must be distinguished from rigidity | PASS |
| AR-16 | Positive thinking saja cukup agar masalah terasa lebih ringan. | SELF.POSITIVE_REALISM → PROBLEM.FRAME | Positive framing cannot replace reality assessment | PASS |
| AR-17 | Saya mau bercanda tentang bawahan supaya suasana cair. | COMM.HUMOR → COMM.RESPECT → COMM.AUDIENCE | Hierarchy and vulnerability affect risk | PASS |
| AR-18 | Bawahan gagal. Saya kembalikan saja masalahnya ke dia. | MGMT.DELEGATION → LEAD.DEVELOPMENT | Delegation requires authority and capability fit | PASS |
| AR-19 | Kalau keputusan bagus sekarang, dampak berikutnya pasti bagus. | STRAT.SECOND_ORDER → DECISION.TRADEOFF | First-order benefit does not establish second-order outcome | PASS |
| AR-20 | Tokoh sukses karena X. Jadi X pasti cara yang benar. | CASE.REASONING → CASE.HUMAN_EXEMPLARS | Biography is not causal proof | PASS |
| AR-21 | Nabi melakukan X dalam Y, berarti saya harus selalu X. | CASE.REASONING → CASE.ISLAMIC_EXEMPLARS | Separate source, context, interpretation, transfer boundary | PASS |
| AR-22 | Saya ingin latihan agar tidak spontan marah ketika dikritik. | PRACTICE.OS → SELF.EGO_EMOTION → READ.PAUSE | Trigger-specific practice with review; no guarantee | PASS |
| AR-23 | Kasih satu kalimat untuk menyelesaikan konflik. | REL.DESCALATION → COMM.LANGUAGE → REL.CONFLICT | Reject universal-script assumption | PASS |
| AR-24 | Dia tidak membalas pesan. Haruskah saya eskalasi? | READ.OBSERVATION → READ.PERSPECTIVE → READ.RESPONSE_CHOICE | Surface missing context and stakes | PASS |
| AR-25 | Saya sudah menjelaskan tiga kali, jadi orang ini memang bodoh. | COMM.LISTENING → COMM.AUDIENCE → SELF.HUMILITY | Challenge person-level attribution | PASS |

## Findings

### Strong behavior
- Observation and interpretation remain separate.
- Perspective-taking is treated as hypothesis testing, not mind-reading.
- Listening is distinct from agreement.
- Humility is distinct from submission.
- Outcome quality is distinct from decision quality.
- Organizational politics is treated defensively rather than as an offensive playbook.
- Cases remain illustrations or hypothesis generators rather than causal evidence.
- Practice is training, not a guarantee of behavioral outcomes.

### Retrieval convergence
Different entry points converge on the same canonical concepts. For example, perceived interpersonal attack routes through observation, perspective, and response choice; immediate anger routes through ego/emotion and pause; exemplar questions route through case reasoning and transfer boundaries.

### Highest-risk semantic collisions
1. humility ↔ confidence ↔ ownership
2. listening ↔ validation ↔ empathy ↔ agreement
3. respect ↔ politeness ↔ avoidance
4. influence ↔ power ↔ manipulation
5. persistence ↔ rigidity
6. conflict ↔ disagreement
7. delegation ↔ abdication ↔ micromanagement
8. strategy ↔ planning
9. case lesson ↔ causal evidence

## Decision

**PASS WITH CONDITIONS.**

The retrieval architecture is structurally viable, but actual chapter records must undergo terminology-collision testing and evidence-limit checks.

## Gate update
- [x] Knowledge record schema created.
- [x] Sample records created.
- [x] Adversarial retrieval executed.
- [x] Canonical convergence tested.
- [x] Epistemic failure modes tested.
- [x] Major semantic collision clusters identified.
- [ ] Terminology collision matrix.
- [ ] Final chapter evidence review.
- [ ] Final chapter briefs v0.3.
- [ ] Drafting unlocked.

## Next step
Create terminology-collision-matrix-v0.1.md defining distinctions, canonical owners, prohibited conflations, neighboring concepts, and retrieval routing for the high-risk concept clusters.