import { defineConfig } from 'vitepress'

const chapters = [
  ['Bab 1 — Siapa yang Sebenarnya Mengendalikan Respons Saya?', '/chapters/01-siapa-yang-sebenarnya-mengendalikan-respons-saya'],
  ['Bab 2 — Ego, Emosi, dan Jeda', '/chapters/02-ego-emosi-dan-jeda'],
  ['Bab 3 — Rendah Hati Tanpa Merendahkan Diri', '/chapters/03-rendah-hati-tanpa-merendahkan-diri'],
  ['Bab 4 — Tetap Berdiri Ketika Keadaan Tidak Sesuai Harapan', '/chapters/04-tetap-berdiri-ketika-keadaan-tidak-sesuai-harapan'],
  ['Bab 5 — Positive, Tetapi Tidak Menipu Diri', '/chapters/05-positive-tetapi-tidak-menipu-diri'],
  ['Bab 6 — Jangan Langsung Menjawab', '/chapters/06-jangan-langsung-menjawab'],
  ['Bab 7 — Fakta, Tafsir, dan Cerita di Kepala', '/chapters/07-fakta-tafsir-dan-cerita-di-kepala'],
  ['Bab 8 — Membaca Orang Tanpa Sok Tahu', '/chapters/08-membaca-orang-tanpa-sok-tahu'],
  ['Bab 9 — Memilih Respons', '/chapters/09-memilih-respons-bicara-diam-bertanya-menunda-menolak-atau-eskalasi'],
  ['Bab 10 — Mendengar Tanpa Ikut Terbakar', '/chapters/10-mendengar-tanpa-ikut-terbakar'],
  ['Bab 11 — Menghargai dan Berbeda Pendapat', '/chapters/11-menghargai-dan-berbeda-pendapat']
]

export default defineConfig({
  lang: 'id-ID',
  title: 'Memimpin Diri, Memimpin Sesama',
  titleTemplate: ':title · Lead Self. Lead Others.',
  description: 'Panduan praktis dan analitis untuk memimpin diri dan sesama.',
  base: '/book-lead-self-lead-others/',
  cleanUrls: true,
  srcExclude: [
    'foundation/**',
    'research/**',
    'README.md',
    '**/README.md'
  ],
  themeConfig: {
    siteTitle: 'Lead Self. Lead Others.',
    nav: [
      { text: 'Buku', link: '/chapters/01-siapa-yang-sebenarnya-mengendalikan-respons-saya' },
      { text: 'GitHub', link: 'https://github.com/huda-salam/book-lead-self-lead-others' }
    ],
    sidebar: [
      {
        text: 'Bagian I — Memimpin Diri',
        collapsed: false,
        items: chapters.slice(0, 5).map(([text, link]) => ({ text, link }))
      },
      {
        text: 'Bagian II — Membaca Situasi',
        collapsed: false,
        items: chapters.slice(5, 9).map(([text, link]) => ({ text, link }))
      },
      {
        text: 'Bagian III — Komunikasi',
        collapsed: false,
        items: chapters.slice(9).map(([text, link]) => ({ text, link }))
      }
    ],
    outline: [2, 3],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huda-salam/book-lead-self-lead-others' }
    ],
    footer: {
      message: 'Lead Self. Lead Others.',
      copyright: 'Draft berkembang — sumber dan status epistemik mengikuti Book OS.'
    },
    editLink: {
      pattern: 'https://github.com/huda-salam/book-lead-self-lead-others/edit/main/:path',
      text: 'Edit halaman ini di GitHub'
    }
  }
})
