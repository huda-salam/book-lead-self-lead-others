# Retrieval Architecture v0.1

## Purpose
This book supports two modes: sequential learning and retrieval/advisory entry from question, case, concept, claim/red flag, comparison, decision, or practice.

## 1. Retrieval object model
| Object | Reader entry | Resolves to |
|---|---|---|
| Chapter | memahami X | Chapter + canonical concepts |
| Concept | apa arti X? | Canonical definition + boundaries |
| Question / Quest | bagaimana menghadapi Y? | Situation + concepts + response options |
| Case | saya mengalami Y | Case pattern + canonical concepts |
| Red Flag | apakah pola ini berbahaya? | Signal + interpretation boundaries |
| Claim | benarkah X? | Claim + evidence + uncertainty |
| Decision | haruskah saya bicara/diam/eskalasi? | Factors + trade-offs + boundaries |
| Practice | saya ingin melatih X | Drill + cue + response + review |

## 2. Retrieval paths
Preferred: Entry → Situation/Question → Canonical Concept → Mechanism → Evidence → Boundary → Application → Practice → Review.
For cases: Case → Observations → Hypotheses → Missing questions → Canonical concepts → Options → Trade-offs → Action → Review.
For claims: Claim → Evidence record → Scope → Counterevidence → Interpretation → Implication.
For decisions: Decision → Stakes → Constraints → Options → Trade-offs → Reversibility → Response → Review.

## 3. AI retrieval contract
Any AI answer generated from this book should preserve: knowledge_type, canonical_owner, scope, evidence_status, boundary, source_reference, related_concepts, application_context.
Where relevant, distinguish: Book says → Evidence shows → Inference → Recommendation / practice.

## 4. Canonical retrieval identifiers
Suggested stable identifiers: SELF.RESPONSE, SELF.HUMILITY, SELF.RESILIENCE, READ.PERSPECTIVE, COMM.LISTENING, COMM.VALIDATION, COMM.RESPECT, COMM.LANGUAGE, REL.CONFLICT, REL.BOUNDARY, PROBLEM.FRAME, PROBLEM.CAUSAL, DECISION.TRADEOFF, ORG.POWER, ORG.INFLUENCE, ORG.DEFENSE, LEAD.OWNERSHIP, LEAD.CREDIBILITY, LEAD.INFLUENCE, LEAD.DEVELOPMENT, MGMT.PRIORITY, MGMT.DELEGATION, STRAT.SECOND_ORDER, STRAT.CHOICE, STRAT.ADAPTATION, CASE.REASONING, PRACTICE.RESPONSE, PRACTICE.LANGUAGE, PRACTICE.REVIEW, PRACTICE.OS.
These are retrieval identifiers, not new reader-facing terminology.

## 5. Case protocol
Every substantial case: Context → Observable facts → Initial interpretations → Competing hypotheses → Relevant canonical concepts → Response options → Trade-offs → Action → Outcome → What outcome does not prove → Boundary → Practice question.

## 6. Question / Quest protocol
Questions should use natural reader language, including imperfect/frontal formulations. Examples: atasan menolak ide; rekan kerja curhat dan saya ikut panas; menegur bawahan; kapan harus diam; apakah saya sedang mempertahankan ego; kapan konflik perlu dieskalasikan; bagaimana tetap positif ketika keadaan buruk; bagaimana memilih solusi saat semua opsi berisiko.

## 7. Red-flag protocol
Red flags are signals, not diagnoses. Examples: Saya tahu dia pasti sengaja; Kalau saya tidak membalas, saya kalah; Saya harus selalu terlihat benar; Dia bawahan, jadi tidak perlu didengar; Yang penting suasana tetap nyaman; Kita harus cari satu root cause.

## 8. Practice retrieval
Practice can be retrieved by capability, situation, emotional trigger, relationship direction, difficulty, frequency, and review stage.

## 9. Retrieval quality gate
A retrieval test passes only if it returns the canonical owner, correct epistemic status, relevant evidence, applicable boundary, useful cross-reference, and no competing definition. Keyword similarity alone is insufficient.

## 10. Future machine-readable layer
Markdown remains canonical. A lightweight YAML/JSON index may later expose id, type, title, canonical_owner, concepts, questions, cases, red_flags, evidence_refs, boundaries, related, status. Do not build a database or vector platform until the knowledge model proves the need.