# Knowledge Record Schema v0.1 — Memimpin Diri, Memimpin Sesama

> Status: Canonical foundation schema for AI-compatible knowledge and retrieval.
>
> Purpose: memastikan setiap unit pengetahuan memiliki pemilik canonical, status epistemik, batas penggunaan, relasi, dan jalur retrieval yang dapat dipertahankan ketika buku berkembang.

## 1. Design principles

1. Markdown remains the canonical human-readable source.
2. Machine-readable representation is derived from canonical Markdown; it must not silently redefine it.
3. Every important concept or claim has one canonical owner.
4. Retrieval may enter from a chapter, concept, question, case, red flag, decision, or practice.
5. Evidence provenance does not automatically establish causality, generalizability, or recommendation.
6. Uncertainty and boundaries are first-class fields.
7. Cases illustrate or generate hypotheses; they are not automatically evidence.
8. Recommendations/practice are distinguished from empirical claims.
9. Related records may point to each other, but duplication of canonical meaning is prohibited.
10. Record IDs are stable retrieval identifiers, not reader-facing terminology.

## 2. Common envelope

Every knowledge record should contain:

| Field | Required | Meaning |
|---|---|---|
| `id` | yes | Stable unique identifier |
| `knowledge_type` | yes | concept, claim, evidence, case, question, red_flag, decision, practice |
| `title` | yes | Human-readable label |
| `canonical_owner` | yes | One canonical concept/chapter owner |
| `summary` | yes | Short neutral description |
| `scope` | yes | Where the record applies |
| `boundary` | yes | Where it should not be generalized |
| `related_concepts` | yes | Stable concept IDs |
| `source_reference` | conditional | Source/provenance when applicable |
| `evidence_status` | yes | Status of evidential support |
| `application_context` | yes | Situations where useful |
| `status` | yes | draft, reviewed, canonical, deprecated |

Allowed `evidence_status`:
- `not_applicable`
- `theoretical`
- `empirical_supported`
- `empirical_mixed`
- `empirical_limited`
- `case_based`
- `interpretive`
- `practice_hypothesis`
- `unknown`

## 3. Concept record

A concept defines meaning and mechanism at the canonical level.

Required:
- `definition`
- `mechanism`
- `distinctions`
- `boundaries`
- `canonical_examples`
- `used_by`

Example ID: `SELF.HUMILITY`.

Concept rule: a concept should answer “apa yang dimaksud dan bagaimana mekanismenya?”, bukan “apa yang harus dilakukan dalam every situation?”

## 4. Claim record

A claim is a proposition that can be assessed.

Required:
- `claim`
- `claim_type`
- `evidence_refs`
- `scope`
- `counterevidence_or_alternatives`
- `confidence`
- `implication`

`claim_type`: descriptive, empirical, causal, interpretive, normative, pedagogical.

Important: a pedagogical claim such as “latihan ini berguna untuk melatih jeda” must not be presented as equivalent to an empirical causal claim that the exercise improves workplace outcomes.

## 5. Evidence record

An evidence record describes the source and what it actually supports.

Required:
- `source`
- `study_or_source_type`
- `population_or_context`
- `method`
- `finding`
- `supports`
- `does_not_establish`
- `limitations`
- `source_reference`

Source types: systematic_review, meta_analysis, experiment, longitudinal, observational, qualitative, theory, historical_primary, historical_secondary, religious_primary, religious_secondary, case_report, expert_analysis.

The field `does_not_establish` is mandatory for evidence records used in important chapters.

## 6. Case record

A case is an application object.

Required:
- `context`
- `observable_facts`
- `initial_interpretations`
- `competing_hypotheses`
- `missing_questions`
- `relevant_concepts`
- `response_options`
- `tradeoffs`
- `action`
- `outcome`
- `what_outcome_does_not_prove`
- `boundary`
- `practice_question`

Canonical rule: **Case → hypothesis/application**, not **case → causal proof**.

For historical or biographical cases, source quality and contextual uncertainty must be explicit.

## 7. Question / Quest record

Questions are first-class retrieval objects.

Required:
- `question`
- `intent`
- `entry_context`
- `canonical_concepts`
- `recommended_route`
- `related_cases`
- `related_practice`

Questions should preserve natural language, including imperfect or emotionally loaded formulations.

Example: “Kenapa saya selalu langsung panas ketika dikritik?”

The retrieval layer should route this to relevant concepts without treating the user's interpretation as fact.

## 8. Red Flag record

A red flag is a signal requiring further examination.

Required:
- `signal`
- `possible_explanations`
- `what_not_to_assume`
- `verification_questions`
- `relevant_concepts`
- `proportionate_responses`

Canonical rule: **Red flag ≠ diagnosis.**

Example: “Dia pasti sengaja menjatuhkan saya” is not itself a fact. The system should retrieve observation, interpretation, and perspective-taking records first.

## 9. Decision record

A decision record helps compare response options.

Required:
- `decision_question`
- `stakes`
- `constraints`
- `options`
- `tradeoffs`
- `reversibility`
- `authority`
- `evidence_needed`
- `chosen_response`
- `review_trigger`

A decision record should expose uncertainty instead of hiding it.

## 10. Practice record

A practice record converts knowledge into action without pretending practice guarantees outcomes.

Required:
- `practice_goal`
- `trigger`
- `steps`
- `example`
- `variation`
- `failure_modes`
- `review_question`
- `frequency`
- `related_concepts`

Practice can use implementation intentions, retrieval prompts, response drills, language drills, reflection/review, and scenario rotation.

The book should explicitly distinguish: **knowing → rehearsing → applying → reviewing → maintaining.**

## 11. Relationship model

Permitted relations:
- `owns`
- `defines`
- `supports`
- `qualifies`
- `contradicts`
- `depends_on`
- `used_by`
- `illustrates`
- `tests`
- `applies_to`
- `retrieved_by`
- `practiced_by`
- `bounded_by`

Avoid unrestricted `related_to` when a more precise relationship is possible.

## 12. Retrieval contract

### Route A — Question first
Question → likely concepts → canonical owner → mechanism → evidence → boundary → application → practice.

### Route B — Case first
Case → observable facts → hypotheses → missing questions → canonical concepts → options → trade-offs → action → review.

### Route C — Red flag
Signal → possible explanations → verification → relevant concept → proportionate response.

### Route D — Claim
Claim → evidence → scope → counterevidence/alternatives → interpretation → implication.

### Route E — Decision
Decision question → stakes → constraints → options → trade-offs → reversibility → response → review.

### Route F — Practice
Practice trigger → principle → drill → application → review → next iteration.

## 13. AI answer contract

When answering from the book's knowledge base, AI should preserve:

- **Book says** — canonical synthesis owned by the book.
- **Evidence shows** — what a source actually supports.
- **Inference** — reasoning that combines evidence and context.
- **Practice / Recommendation** — an actionable proposal.
- **Unknown** — information or evidence is insufficient.

AI must not:
- convert a case into evidence;
- convert correlation into causation;
- infer another person's intent as fact;
- remove meaningful uncertainty;
- silently merge conflicting constructs;
- cite a source as proof of a stronger claim than the source supports;
- return a recommendation without exposing relevant constraints where they matter.

## 14. Chapter integration

Every final chapter should expose or link to:
- chapter metadata;
- canonical concepts;
- major claims;
- evidence records;
- cases;
- questions;
- red flags;
- decisions;
- practices;
- dependencies;
- used-by relations;
- boundaries.

The chapter is a reader-facing synthesis, not the only knowledge unit.

## 15. Retrieval QA acceptance criteria

A retrieval implementation passes when:
1. Natural-language questions reach the canonical owner without keyword luck.
2. A case does not bypass evidence and boundary checks.
3. A red flag does not become a diagnosis.
4. A claim returns supporting evidence and meaningful limitations.
5. Conflicting evidence remains visible.
6. A decision route exposes trade-offs and reversibility where relevant.
7. A practice route ends with application and review.
8. AI can distinguish Book says / Evidence shows / Inference / Practice / Unknown.
9. Retrieval does not produce duplicate canonical definitions.
10. A user can enter from multiple paths and converge on the same canonical concept.

## 16. Versioning and governance

Schema changes must be backward-compatible where possible.

If a field changes meaning:
1. create a new schema version;
2. document migration implications;
3. update affected records;
4. rerun retrieval tests;
5. rerun conceptual and terminology QA.

Do not introduce a database, vector store, graph database, or embedding-specific format merely because the schema exists. The first implementation should remain Markdown plus explicit metadata and relations.

## 17. Minimal future machine representation

When machine-readable records become necessary, a lightweight YAML or JSON representation may mirror the canonical Markdown fields.

The machine layer must preserve IDs, epistemic status, boundaries, source references, and relationships, and must be regenerable from canonical content.

It must not become a second, silently divergent source of truth.

## 18. Gate

- [x] Record types defined.
- [x] Epistemic status defined.
- [x] Canonical ownership defined.
- [x] Relations defined.
- [x] Retrieval routes defined.
- [x] AI answer contract defined.
- [x] Versioning rules defined.
- [ ] Sample records created.
- [ ] Adversarial retrieval executed against records.
- [ ] Schema revised after retrieval findings.