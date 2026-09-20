# Retrieval Architecture v0.2

## Purpose

Readers may enter through a situation, question, case, claim, red flag, concept, decision, or practice without losing canonical ownership or epistemic status.

## Canonical IDs

SELF.RESPONSE, SELF.EGO_EMOTION, SELF.HUMILITY, SELF.RESILIENCE, SELF.DISCIPLINE, SELF.CONSISTENCY, SELF.PERSISTENCE, SELF.POSITIVE_REALISM

READ.PAUSE, READ.OBSERVATION, READ.PERSPECTIVE, READ.RESPONSE_CHOICE

COMM.LISTENING, COMM.RESPECT, COMM.LANGUAGE, COMM.HUMOR, COMM.AUDIENCE, COMM.FEEDBACK

REL.RELATIONAL_CONDITIONS, REL.CONFLICT, REL.DESCALATION, REL.BOUNDARY, REL.REPAIR

PROBLEM.FRAME, PROBLEM.HYPOTHESES, PROBLEM.CAUSAL, DECISION.GOAL_DISCIPLINE, DECISION.TRADEOFF, DECISION.EXECUTION, DECISION.REVIEW

ORG.SYSTEM, ORG.POWER_INFLUENCE, ORG.INTEREST_CONFLICT, ORG.DEFENSE

LEAD.OWNERSHIP_CREDIBILITY, LEAD.INFLUENCE, LEAD.DEVELOPMENT, LEAD.PRESSURE

MGMT.PRIORITY, MGMT.DELEGATION, STRAT.SECOND_ORDER, STRAT.CHOICE, STRAT.ADAPTATION

CASE.REASONING, CASE.ISLAMIC_EXEMPLARS, CASE.HUMAN_EXEMPLARS, CASE.FAILURE, PRACTICE.OS, LITERACY.DISCIPLINE

## Retrieval routes

Situation / Question:
Situation → canonical concept → mechanism → evidence → boundary → application → practice → review

Case:
Context → observable facts → competing hypotheses → canonical concepts → options → trade-offs → action → outcome → limits → practice question

Claim / Red Flag:
Claim → evidence record → scope → counterevidence → interpretation → implication

Decision:
Stakes → constraints → options → trade-offs → reversibility → goal validity → response → review

Practice:
Trigger → minimum meaningful action → friction → execution → checkpoint → recovery → review → continue/adapt/pause/disengage

## Discipline-specific routing

- “Tahu harus melakukan tetapi tidak menjalankan” → SELF.DISCIPLINE
- “Stabil menjalankan perilaku dalam waktu lama” → SELF.CONSISTENCY
- “Tetap mengejar tujuan walau ada hambatan” → SELF.PERSISTENCE
- “Sudah telanjur memilih solusi” → DECISION.GOAL_DISCIPLINE
- “Kapan harus berhenti?” → DECISION.GOAL_DISCIPLINE + SELF.PERSISTENCE
- “Bagaimana tahu informasi ini layak dipercaya?” → LITERACY.DISCIPLINE
- “Terlalu lama riset dan tidak memutuskan” → LITERACY.DISCIPLINE + DECISION.TRADEOFF

## AI retrieval contract

Every retrieved object preserves: knowledge_type, canonical_owner, scope, evidence_status, boundary, source_reference, related_concepts, application_context.

Answer discipline:
1. Book says — pedagogical model/rule.
2. Evidence shows — empirical finding and scope.
3. Inference — interpretation connecting evidence to the model.
4. Recommendation / Practice — bounded practical action.

Never convert a practice hypothesis into an empirical fact.

## Quality gates

A valid retrieval answer must identify canonical owner, distinguish concept from evidence, expose a relevant boundary, avoid moral diagnosis, preserve uncertainty, and provide a useful next action/review question when practical.

## Gate

- [x] Canonical IDs consolidated.
- [x] Discipline/consistency/persistence integrated.
- [x] Goal-vs-method and literacy routes integrated.
- [x] Practice/lapse-recovery route integrated.
- [ ] Full adversarial regression test.
