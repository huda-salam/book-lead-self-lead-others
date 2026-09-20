# Sample Knowledge Records v0.1 — Adversarial Retrieval Fixtures

> Status: Test fixtures only. These records instantiate the schema; they are not yet the complete canonical knowledge base.
>
> Purpose: test whether AI retrieval can preserve canonical ownership, epistemic status, boundaries, and cross-entry routes before the 44 chapter briefs are finalized.

## SELF.RESPONSE — concept

- knowledge_type: concept
- title: Siapa yang Sebenarnya Mengendalikan Respons Saya?
- canonical_owner: SELF.RESPONSE
- summary: Kemampuan mengenali bahwa stimulus, interpretasi, keadaan internal, pilihan respons, dan konsekuensi tidak identik.
- boundary: Bukan berarti semua keadaan dapat dikendalikan; fokusnya adalah ruang agency yang tersedia dalam konteks tertentu.
- related_concepts: SELF.EGO_EMOTION, SELF.HUMILITY
- evidence_status: theoretical
- status: draft

## SELF.HUMILITY — concept

- knowledge_type: concept
- title: Rendah Hati Tanpa Merendahkan Diri
- canonical_owner: SELF.HUMILITY
- summary: Kemampuan mempertahankan pandangan diri yang akurat, mengakui keterbatasan, menghargai kontribusi orang lain, dan memperbarui pandangan ketika ada alasan yang memadai.
- boundary: Humility bukan rendah diri, pasif, atau menganggap semua pendapat sama benarnya.
- related_concepts: SELF.RESPONSE, READ.OBSERVATION
- evidence_status: theoretical
- status: draft

## READ.PERSPECTIVE — concept

- knowledge_type: concept
- title: Membaca Orang Tanpa Sok Tahu
- canonical_owner: READ.PERSPECTIVE
- summary: Perspective-taking sebagai upaya membangun hipotesis tentang perspektif orang lain lalu mengujinya melalui observasi dan pertanyaan.
- boundary: Tidak boleh dipakai sebagai mind-reading; efek perspective-taking dapat bergantung pada konteks hubungan.
- related_concepts: READ.OBSERVATION, COMM.LISTENING
- evidence_status: theoretical
- status: draft

## COMM.LISTENING — concept

- knowledge_type: concept
- title: Mendengar Tanpa Ikut Terbakar
- canonical_owner: COMM.LISTENING
- summary: Mendengar untuk memahami isi, emosi, kebutuhan, dan konteks tanpa otomatis menyetujui interpretasi atau memperbesar emosi.
- boundary: Listening, validation, empathy, agreement, dan politeness bukan sinonim.
- related_concepts: READ.PERSPECTIVE, COMM.RESPECT
- evidence_status: theoretical
- status: draft

## PROBLEM.FRAME — concept

- knowledge_type: concept
- title: Keluhan Bukan Selalu Masalah
- canonical_owner: PROBLEM.FRAME
- summary: Membedakan sinyal, gejala, masalah yang perlu diputuskan, dan pihak yang terdampak sebelum memilih solusi.
- boundary: Satu keluhan dapat merepresentasikan beberapa masalah atau kebutuhan yang berbeda.
- related_concepts: PROBLEM.HYPOTHESES, DECISION.TRADEOFF
- evidence_status: theoretical
- status: draft

## SELF.EGO_EMOTION — concept

- knowledge_type: concept
- title: Ego, Emosi, dan Jeda
- canonical_owner: SELF.EGO_EMOTION
- summary: Memahami bagaimana emosi dan ancaman terhadap status atau identitas dapat memengaruhi kecenderungan respons, lalu menciptakan jeda untuk memilih tindakan.
- boundary: Regulasi emosi tidak berarti menekan atau menghilangkan emosi; jeda juga tidak menjamin keputusan benar.
- related_concepts: SELF.RESPONSE, READ.PAUSE
- evidence_status: theoretical
- status: draft

## COMM.LISTENING — claim

- knowledge_type: claim
- title: Perceived listening berkaitan dengan outcome kerja, terutama kualitas hubungan.
- canonical_owner: COMM.LISTENING
- summary: Meta-analytic evidence menunjukkan perceived listening berasosiasi positif dengan berbagai outcome kerja; hubungan dengan relationship quality lebih kuat daripada dengan performance.
- boundary: Empirical
- related_concepts: Kluger et al. 2024, Do not establish that any single listening script causes performance improvement in every workplace.
- evidence_status: empirical_mixed
- status: draft

## SELF.HUMILITY — claim

- knowledge_type: claim
- title: Humble leadership memiliki hubungan dengan sejumlah outcome follower/team, tetapi construct overlap dan measurement limitations perlu diperhatikan.
- canonical_owner: SELF.HUMILITY
- summary: Meta-analytic/review evidence mendukung asosiasi tertentu, sementara literatur terbaru menyoroti conflation antar konstruk humility.
- boundary: Empirical mixed
- related_concepts: Chandler et al. 2023; Lee et al. 2026, Do not establish that humility alone causes organizational performance.
- evidence_status: empirical_mixed
- status: draft

## READ.PERSPECTIVE — claim

- knowledge_type: claim
- title: Perspective-taking tidak selalu menghasilkan outcome positif.
- canonical_owner: READ.PERSPECTIVE
- summary: Effects can depend on interdependence and context; perspective-taking should therefore be treated as a hypothesis-generating capability rather than universally beneficial behavior.
- boundary: Empirical mixed
- related_concepts: Longmire & Harrison 2018, Do not assume understanding another perspective means agreeing with it.
- evidence_status: empirical_mixed
- status: draft

## COMM.LISTENING — question

- knowledge_type: question
- title: Saya langsung panas ketika orang lain curhat atau mengeluh.
- canonical_owner: COMM.LISTENING
- summary: Memisahkan mendengar, ikut emosi, validasi, dan persetujuan.
- boundary: Question first
- related_concepts: COMM.LISTENING, SELF.EGO_EMOTION
- evidence_status: not_applicable
- status: draft

## READ.PERSPECTIVE — question

- knowledge_type: question
- title: Saya merasa dia pasti sengaja menjatuhkan saya. Apa yang harus saya lakukan?
- canonical_owner: READ.PERSPECTIVE
- summary: Test interpretation before choosing response.
- boundary: Question first
- related_concepts: READ.OBSERVATION, READ.PERSPECTIVE
- evidence_status: not_applicable
- status: draft

## SELF.HUMILITY — practice

- knowledge_type: practice
- title: Receive Correction Drill
- canonical_owner: SELF.HUMILITY
- summary: Melatih kemampuan menerima koreksi tanpa refleks defensif.
- boundary: Ketika dikoreksi: pause → ulangi inti koreksi → tanyakan bukti/contoh → pisahkan validitas isi dari gaya penyampaian → tentukan update yang diperlukan.
- related_concepts: SELF.HUMILITY, COMM.FEEDBACK
- evidence_status: practice_hypothesis
- status: draft


## Test requirements

These fixtures should support at least:
- question-first retrieval;
- concept-first retrieval;
- claim-first retrieval;
- red-flag routing;
- practice routing;
- cross-concept convergence.

They must not cause:
- a person's interpretation to become fact;
- a case to become causal evidence;
- a pedagogical exercise to become an empirical guarantee;
- duplicate canonical definitions.
