import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/book-lead-self-lead-others/',
  title: 'Memimpin Diri, Memimpin Sesama',
  description: 'Buku praktis dan analitis tentang leadership, judgment, hubungan, dan pembelajaran.',
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
      { text: 'Bagian I–V', link: '/chapters/26-ketika-keputusan-tidak-menghasilkan-outcome-yang-diinginkan' },
      { text: 'Bagian VI–X', link: '/chapters/44-personal-operating-system' }
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
      },
      {
        text: 'Bagian V — Problem Solving dan Decision',
        collapsed: true,
        items: [
          { text: 'Bab 21 — Keluhan Bukan Selalu Masalah', link: '/chapters/21-keluhan-bukan-selalu-masalah' },
          { text: 'Bab 22 — Jangan Jatuh Cinta pada Solusi Pertama', link: '/chapters/22-jangan-jatuh-cinta-pada-solusi-pertama' },
          { text: 'Bab 23 — Mencari Akar Tanpa Terjebak Root Cause', link: '/chapters/23-mencari-akar-tanpa-terjebak-root-cause' },
          { text: 'Bab 24 — Memilih Solusi dan Mengakui Trade-off', link: '/chapters/24-memilih-solusi-dan-mengakui-trade-off' },
          { text: 'Bab 25 — Dari Keputusan ke Eksekusi', link: '/chapters/25-dari-keputusan-ke-eksekusi' },
          { text: 'Bab 26 — Ketika Keputusan Tidak Menghasilkan Outcome yang Diinginkan', link: '/chapters/26-ketika-keputusan-tidak-menghasilkan-outcome-yang-diinginkan' }
        ]
      },
      {
        text: 'Bagian VI — Organisasi dan Politik',
        collapsed: true,
        items: [
          { text: 'Bab 27 — Organisasi Bukan Hanya Struktur Resmi', link: '/chapters/27-organisasi-bukan-hanya-struktur-resmi' },
          { text: 'Bab 28 — Kepentingan, Kekuasaan, dan Pengaruh', link: '/chapters/28-kepentingan-kekuasaan-dan-pengaruh' },
          { text: 'Bab 29 — Ketika Kepentingan Bertabrakan', link: '/chapters/29-ketika-kepentingan-bertabrakan' },
          { text: 'Bab 30 — Manipulasi, Framing, dan Permainan Psikologis', link: '/chapters/30-manipulasi-framing-dan-permainan-psikologis' }
        ]
      },
      {
        text: 'Bagian VII — Leadership',
        collapsed: true,
        items: [
          { text: 'Bab 31 — Ownership dan Kredibilitas', link: '/chapters/31-ownership-dan-kredibilitas' },
          { text: 'Bab 32 — Mempengaruhi Tanpa Memaksa', link: '/chapters/32-mempengaruhi-tanpa-memaksa' },
          { text: 'Bab 33 — Membuat Orang Lain Bertumbuh', link: '/chapters/33-membuat-orang-lain-bertumbuh' },
          { text: 'Bab 34 — Memimpin Saat Tekanan Tinggi', link: '/chapters/34-memimpin-saat-tekanan-tinggi' }
        ]
      },
      {
        text: 'Bagian VIII — Management dan Strategy',
        collapsed: true,
        items: [
          { text: 'Bab 35 — Tidak Semua Hal Harus Dikerjakan', link: '/chapters/35-tidak-semua-hal-harus-dikerjakan' },
          { text: 'Bab 36 — Delegasi Bukan Memindahkan Beban', link: '/chapters/36-delegasi-bukan-memindahkan-beban' },
          { text: 'Bab 37 — Melihat Dua Langkah ke Depan', link: '/chapters/37-melihat-dua-langkah-ke-depan' },
          { text: 'Bab 38 — Strategi Berarti Memilih', link: '/chapters/38-strategi-berarti-memilih' },
          { text: 'Bab 39 — Mengubah Rencana Ketika Dunia Berubah', link: '/chapters/39-mengubah-rencana-ketika-dunia-berubah' }
        ]
      },
      {
        text: 'Bagian IX — Case dan Pembelajaran',
        collapsed: true,
        items: [
          { text: 'Bab 40 — Cara Membaca Sebuah Kasus', link: '/chapters/40-cara-membaca-sebuah-kasus' },
          { text: 'Bab 41 — Belajar dari Nabi dan Sahabat', link: '/chapters/41-belajar-dari-nabi-dan-sahabat' },
          { text: 'Bab 42 — Belajar dari Pemimpin, Tokoh Sejarah, Business Leaders, Profesional, dan Orang Biasa', link: '/chapters/42-belajar-dari-pemimpin-tokoh-sejarah-business-leaders-profesional-dan-orang-biasa' },
          { text: 'Bab 43 — Belajar dari Kegagalan', link: '/chapters/43-belajar-dari-kegagalan' }
        ]
      },
      {
        text: 'Bagian X — Personal Operating System',
        collapsed: false,
        items: [
          { text: 'Bab 44 — Personal Operating System: Response, Practice, Review, Habit', link: '/chapters/44-personal-operating-system' }
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
