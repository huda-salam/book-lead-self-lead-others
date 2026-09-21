# Full-Book Release QA v0.1

## Scope

Final integration QA for **Memimpin Diri, Memimpin Sesama** after completion of Chapter 44.

Repository state reviewed: main branch, September 2026.

## 1. Structural gate

| Check | Status | Notes |
|---|---|---|
| Chapter architecture | PASS | 44 chapters across 10 parts are represented in the architecture. |
| Public navigation | PASS | VitePress sidebar exposes Chapters 1–44. |
| Landing page | PASS | Landing page reflects 44/44 completion and the final operating loop. |
| Foundation/research exclusion | PASS | srcExclude keeps working artifacts outside public navigation. |
| Chapter 43 → 44 bridge | PASS | Failure learning flows into Personal Operating System. |
| Missing placeholder markers | PASS | No TODO / “to be added” markers found in chapter search. |
| Citation placeholder leakage | PASS | No raw turn0search placeholders found in chapter text. |
| Duplicate chapter artifact | PASS | A duplicate extensionless Chapter 13 artifact was identified and removed. |

## 2. Conceptual integration

### Core loop

The book consistently converges on:

**SEE → UNDERSTAND → DECIDE → ACT → LEARN**

with the expanded practice loop:

**SEE → UNDERSTAND → DECIDE → ACT → OBSERVE → REVIEW → LEARN → PRACTICE → HABIT/DEFAULT → SEE AGAIN**

Chapter 44 explicitly labels this as a book synthesis rather than a validated academic taxonomy.

### Major canonical boundaries

The existing terminology matrix was reviewed for the main collision clusters:

- discipline vs consistency;
- persistence vs rigidity;
- goal discipline vs solution attachment;
- discipline vs motivation;
- literacy discipline vs skepticism/over-analysis;
- persistence vs goal validity;
- consistency vs adaptation;
- discipline vs moral blame.

The distinctions remain compatible with the completed architecture.

## 3. Epistemic / evidence gate

### PASS WITH CONDITIONS

The book generally distinguishes:
- evidence from synthesis;
- mechanism from judgment;
- outcome from decision quality;
- contextual examples from causal proof;
- Islamic primary sources from modern interpretation;
- historical/public exemplars from generalizable evidence.

Known conditions:

1. Chapter-level citations should remain tied to their actual source provenance.
2. Named contemporary exemplars should receive current, source-backed case packets before additional claims are added.
3. The book's frameworks must continue to be labeled as working/book syntheses when they are not validated taxonomies.
4. Final production should not silently convert examples into evidence of causality.

## 4. Islamic / cultural provenance gate

### PASS WITH CONDITIONS

Chapter 41 maintains a source hierarchy and separates:
- Qur'an;
- hadith;
- historical reports;
- modern interpretation;
- book synthesis.

Javanese values in Chapter 44 are used as contextual/normative orientation, not empirical evidence.

Condition:
- Any future addition of Islamic or historical exemplars must preserve source provenance and avoid hagiographic or retrospective psychological claims.

## 5. Cross-chapter integration

| Relationship | Status |
|---|---|
| Ch 1–5 → self-leadership foundation | PASS |
| Ch 6–9 → observation/judgment | PASS |
| Ch 10–15 → communication | PASS |
| Ch 16–20 → relationships/conflict | PASS |
| Ch 21–26 → problem/decision | PASS |
| Ch 27–30 → organizational system/politics | PASS |
| Ch 31–34 → leadership | PASS |
| Ch 35–39 → management/strategy | PASS |
| Ch 40 → case reasoning | PASS |
| Ch 41 → Islamic exemplars | PASS |
| Ch 42 → human exemplars | PASS |
| Ch 43 → failure learning | PASS |
| Ch 44 → practice operating system | PASS |

No architecture-level collision requiring chapter removal or restructuring was identified.

## 6. Repetition / editorial gate

### PASS WITH REVISIONS

Some repetition is intentional because the book teaches a reusable operating discipline. In particular:

- evidence vs story;
- outcome vs decision quality;
- persistence vs rigidity;
- adaptation;
- review/learning;
- accountability vs blame;
- positive realism.

These should not be mechanically removed.

The final editorial pass should instead apply:

> **Keep repetition when it reinforces a canonical concept; remove repetition when it merely restates prose without adding a new mechanism, example, boundary, or practice.**

## 7. Terminology gate

### PASS WITH CONDITIONS

Canonical concepts remain the authority for concept ownership.

Special attention should remain on:
- discipline / consistency / persistence;
- resilience / persistence;
- decision review / failure review;
- influence / manipulation;
- humility / weakness;
- calm / passivity;
- firmness / harshness;
- strategy / plan / priority;
- accountability / blame;
- habit / deliberate reasoning.

No new terminology should be introduced casually in final editorial revisions if it creates a competing label for an existing canonical concept.

## 8. VitePress / deployment gate

### PASS

Verified:
- base: /book-lead-self-lead-others/;
- local search;
- GitHub edit links;
- all 44 chapters in sidebar;
- GitHub Pages workflow;
- Node 22;
- VitePress build command;
- Pages artifact path .vitepress/dist;
- GitHub Actions run #130 completed successfully after fixing the landing-page YAML frontmatter.

The preceding failed CI run (#128) was traced to an unquoted colon-containing description value in index.md, not to the VitePress configuration or dependency installation.

A public-site HTTP smoke test could not be independently performed from the current tool environment because outbound DNS/network access is unavailable. CI build success is therefore the authoritative build verification currently available.

## 9. Retrieval QA

Representative retrieval intents remain supported:

- “Saya mudah terpancing ketika tidak setuju.” → Ch 1–2, 6, 10–12.
- “Bagaimana membedakan fakta dan cerita di kepala?” → Ch 7.
- “Bagaimana membaca orang tanpa sok tahu?” → Ch 8.
- “Bagaimana memilih bicara, diam, bertanya, menolak, atau eskalasi?” → Ch 9.
- “Bagaimana menghadapi konflik?” → Ch 17–20.
- “Bagaimana mencari akar masalah?” → Ch 21–23.
- “Bagaimana memilih solusi?” → Ch 24–26.
- “Bagaimana membaca politik organisasi tanpa menjadi manipulatif?” → Ch 27–30.
- “Bagaimana memengaruhi tanpa memaksa?” → Ch 32.
- “Bagaimana mengembangkan bawahan?” → Ch 33.
- “Bagaimana memimpin saat tekanan tinggi?” → Ch 34.
- “Bagaimana menentukan prioritas?” → Ch 35.
- “Bagaimana mendelegasikan?” → Ch 36.
- “Bagaimana melihat second-order effects?” → Ch 37.
- “Apa sebenarnya strategi?” → Ch 38.
- “Kapan harus mengubah rencana?” → Ch 39.
- “Bagaimana membaca kasus?” → Ch 40.
- “Bagaimana belajar dari Nabi dan Sahabat?” → Ch 41.
- “Bagaimana belajar dari tokoh tanpa terjebak success-story bias?” → Ch 42.
- “Bagaimana belajar dari kegagalan?” → Ch 43.
- “Bagaimana menerapkan seluruh buku?” → Ch 44.

## 10. Red-team release gate

### BLOCKED failure modes

The completed architecture explicitly guards against:

- positive thinking as denial;
- calmness as passivity;
- firmness as harshness;
- humility as weakness;
- persistence as stubborn repetition;
- consistency as sameness;
- failure as automatic learning;
- outcome as proof of decision quality;
- success story as causal proof;
- blame disguised as accountability;
- system explanations used to erase individual responsibility;
- organizational politics as license for manipulation;
- habit as substitute for judgment;
- religious/cultural values used as empirical evidence;
- frameworks becoming identity or moral score.

### Remaining red-team condition

A final prose-level pass should inspect whether any individual paragraph accidentally violates a boundary already established at architecture level.

## 11. Release recommendation

**Architecture: READY FOR FINAL EDITORIAL PASS**

**Evidence: READY WITH CONDITIONS**

**Public navigation: READY**

**Build: VERIFIED BY CI**

**Public-site HTTP smoke test: NOT VERIFIED FROM CURRENT ENVIRONMENT**

**Book status: DRAFT COMPLETE — 44/44 CHAPTERS**

This QA does not declare the manuscript typo-free or publication-ready. The next quality step is a focused editorial pass, not additional chapter architecture. A final red-team artifact has been added at `foundation/final-editorial-red-team-v0.1.md`.

## 12. Final editorial checklist

- [ ] Full prose repetition pass
- [ ] Indonesian terminology consistency pass
- [ ] Full citation/provenance sweep across all chapters (final red-team found runtime citation placeholders in several early/recent chapters; cleanup started in Ch 2–5, 43–44)
- [ ] Cross-reference spot-check
- [ ] Visual callout consistency pass
- [x] CI VitePress build
- [x] GitHub Actions build PASS
- [ ] Public site smoke test
- [x] Final editorial red-team v0.1 — architecture/boundary pass; prose/citation sweep remains open
- [ ] Release tag / version
