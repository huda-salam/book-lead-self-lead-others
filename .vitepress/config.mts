import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/book-lead-self-lead-others/',
  title: 'Memimpin Diri, Memimpin Sesama',
  description: 'Buku praktis dan analitis tentang leader mindset.',
  lang: 'id-ID',
  appearance: true,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: [
    'foundation/**',
    'research/**',
    'README.md',
    '**/README.md'
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/huda-salam/book-lead-self-lead-others/edit/main/:path',
      text: 'Edit halaman ini di GitHub'
    },
    nav: [
      { text: 'Buku', link: '/chapters/01-siapa-yang-sebenarnya-mengendalikan-respons-saya' },
      { text: 'Bab 1–12', link: '/chapters/12-bahasa-yang-menurunkan-tegangan' }
    ],
    sidebar: [
      {
        text: 'Bagian I — Memimpin Diri',
        collapsed: false,
        items: [
          { text: 'Bab 1 — Memimpin Diri Dimulai dari Cara Merespons', link: '/chapters/01-siapa-yang-sebenarnya-mengendalikan-respons-saya' },
          { text: 'Bab 2 — Ego, Emosi, dan Jeda', link: '/chapters/02-ego-emosi-dan-jeda' },
          { text: 'Bab 3 — Rendah Hati Tanpa Merendahkan Diri', link: '/chapters/03-rendah-hati-tanpa-merendahkan-diri' },
          { text: 'Bab 4 — Tetap Berdiri Ketika Keadaan Tidak Sesuai Harapan', link: '/chapters/04-tetap-berdiri-ketika-keadaan-tidak-sesuai-harapan' },
          { text: 'Bab 5 — Positive, Tetapi Tidak Menipu Diri', link: '/chapters/05-positive-tetapi-tidak-menipu-diri' }
        ]
      },
      {
        text: 'Bagian II — Membaca dan Menilai Situasi',
        collapsed: false,
        items: [
          { text: 'Bab 6 — Jangan Langsung Menjawab', link: '/chapters/06-jangan-langsung-menjawab' },
          { text: 'Bab 7 — Fakta, Tafsir, dan Cerita di Kepala', link: '/chapters/07-fakta-tafsir-dan-cerita-di-kepala' },
          { text: 'Bab 8 — Membaca Orang Tanpa Sok Tahu', link: '/chapters/08-membaca-orang-tanpa-sok-tahu' },
          { text: 'Bab 9 — Memilih Respons', link: '/chapters/09-memilih-respons-bicara-diam-bertanya-menunda-menolak-atau-eskalasi' }
        ]
      },
      {
        text: 'Bagian III — Memimpin melalui Komunikasi',
        collapsed: false,
        items: [
          { text: 'Bab 10 — Mendengar Tanpa Ikut Terbakar', link: '/chapters/10-mendengar-tanpa-ikut-terbakar' },
          { text: 'Bab 11 — Menghargai dan Berbeda Pendapat', link: '/chapters/11-menghargai-dan-berbeda-pendapat' },
          { text: 'Bab 12 — Bahasa yang Menurunkan Tegangan', link: '/chapters/12-bahasa-yang-menurunkan-tegangan' },
          { text: 'Bab 13 — Humor, Cletukan, dan Batas yang Aman', link: '/chapters/13-humor-cletukan-dan-batas-yang-aman' },
          { text: 'Bab 14 — Berbicara ke Atasan, Rekan, dan Bawahan', link: '/chapters/14-berbicara-ke-atasan-rekan-dan-bawahan' },
          { text: 'Bab 15 — Feedback dan Percakapan Sulit', link: '/chapters/15-feedback-dan-percakapan-sulit' }
        ]
      },
      {
        text: 'Bagian IV — Relasi dan Konflik',
        collapsed: true,
        items: [
          { text: 'Bab 16 — Trust, Psychological Safety, Accountability, dan Respect', link: '/chapters/16-trust-psychological-safety-accountability-dan-respect' },
          { text: 'Bab 17 — Konflik: Jangan Romantisasi, Jangan Takuti', link: '/chapters/17-konflik-jangan-romantisasi-jangan-takuti' },
          { text: 'Bab 18 — Menurunkan Suhu Konflik', link: '/chapters/18-menurunkan-suhu-konflik' },
          { text: 'Bab 19 — Batas: Tegas Tanpa Menjadi Kasar', link: '/chapters/19-batas-tegas-tanpa-menjadi-kasar' },
          { text: 'Bab 20 — Memperbaiki Hubungan Setelah Kesalahan', link: '/chapters/20-memperbaiki-hubungan-setelah-kesalahan' }
        ]
      }
    ]
  },
  markdown: {
    container: {
      tipLabel: 'Praktik',
      warningLabel: 'Risiko',
      dangerLabel: 'Batas',
      infoLabel: 'Konteks',
      detailsLabel: 'Baca Lebih Dalam',
      customContainers: {
        success: 'Green Note',
        important: 'Prinsip',
        caution: 'Hati-hati'
      }
    }
  }
})
