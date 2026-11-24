import type { Conteudo } from './tipos';

export const en: Conteudo = {
  resumo:
    'Information Systems student at UFOP, 23 years old. Backend development and system integrations with Java, Python and SQL. Looking for a junior developer position.',
  menu: [
    { id: 'sobre', rotulo: 'About' },
    { id: 'experiencia', rotulo: 'Exp' },
    { id: 'projetos', rotulo: 'Projects' },
    { id: 'habilidades', rotulo: 'Skills' },
    { id: 'contato', rotulo: 'Contact' },
  ],
  sobre: {
    titulo: 'About',
    paragrafos: [
      'I started programming in my second semester, on a university outreach project that digitized inventory control for a cooperative in Ouro Preto. Since then I have worked on the backend: modeling the database, writing the API, maintaining the tests and monitoring behavior in production.',
      'I prefer simple, reviewed code over clever solutions nobody understands later. Outside class, I take part in the university’s algorithms study group and go trail running in the hills on weekends.',
    ],
    detalhes: [
      { rotulo: 'Age', valor: '23' },
      { rotulo: 'Location', valor: 'Ouro Preto, Brazil — open to remote' },
      { rotulo: 'Education', valor: 'Information Systems, UFOP — graduating in 2027' },
      { rotulo: 'Status', valor: 'Available for internships or junior roles' },
    ],
  },
  experiencia: {
    titulo: 'Experience',
    itens: [
      {
        cargo: 'Backend developer (intern)',
        empresa: 'Meridian Sistemas, Belo Horizonte',
        periodo: '2025 — present',
        descricao:
          'Maintaining and evolving a Java Spring Boot API used by three internal products. Rewrote the tax file import routine, cutting batch time from 40 to 9 minutes, and covered the module with automated tests.',
        tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      },
      {
        cargo: 'Junior developer (freelance)',
        empresa: 'Independent projects',
        periodo: '2024 — 2025',
        descricao:
          'Integrations between management systems and sales platforms for two small clients: Python routines to sync orders and inventory, with error logging and manual reprocessing.',
        tecnologias: ['Python', 'REST', 'MySQL'],
      },
      {
        cargo: 'Outreach project fellow',
        empresa: 'UFOP — Department of Computing',
        periodo: '2023 — 2024',
        descricao:
          'Team that built an inventory control system for a local cooperative. I was responsible for the data model and the report screens, working directly with end users.',
        tecnologias: ['PHP', 'SQL', 'Requirements gathering'],
      },
    ],
  },
  projetos: {
    titulo: 'Projects',
    itens: [
      {
        nome: 'Almoxarife',
        ano: '2026',
        descricao:
          'Multi-company inventory control API with token authentication and monthly CSV reports.',
        tecnologias: ['Java', 'Spring Boot', 'PostgreSQL'],
        repositorio: 'https://github.com/EwertonG/almoxarife',
      },
      {
        nome: 'Rota Serra',
        ano: '2025',
        descricao:
          'Web app that combines open transit data to suggest routes between the districts of Ouro Preto.',
        tecnologias: ['Python', 'FastAPI', 'Leaflet'],
        repositorio: 'https://github.com/EwertonG/rota-serra',
        demo: 'https://rota-serra.exemplo.com',
      },
      {
        nome: 'Boletim Acadêmico',
        ano: '2025',
        descricao:
          'Grades and attendance dashboard built for my class, importing data from the university system.',
        tecnologias: ['React', 'Node.js', 'SQLite'],
        repositorio: 'https://github.com/EwertonG/boletim-academico',
      },
      {
        nome: 'Fila Justa',
        ano: '2024',
        descricao:
          'Ticketing service for in-person service desks, with a call display and wait-time history.',
        tecnologias: ['Python', 'Flask', 'WebSocket'],
        repositorio: 'https://github.com/EwertonG/fila-justa',
      },
    ],
  },
  habilidades: {
    titulo: 'Skills',
    itens: [
      { rotulo: 'Languages', valor: 'Java, Python, SQL, JavaScript, PHP' },
      { rotulo: 'Frameworks', valor: 'Spring Boot, FastAPI, React, Flask' },
      { rotulo: 'Data & infra', valor: 'PostgreSQL, MySQL, Docker, AWS (EC2, S3)' },
      { rotulo: 'Practices', valor: 'Git and code review, automated testing, REST APIs, Scrum' },
    ],
  },
  certificacoes: {
    titulo: 'Certifications & languages',
    itens: [
      { rotulo: '2025', valor: 'Oracle Certified Foundations Associate — Java' },
      { rotulo: '2025', valor: 'AWS Certified Cloud Practitioner' },
      { rotulo: '2024', valor: 'Scrum Foundation Professional Certificate — CertiProf' },
      {
        rotulo: 'Languages',
        valor: 'Portuguese (native) · English (advanced, B2) · Spanish (basic, A2)',
      },
    ],
  },
  contato: {
    chamada:
      'Available for junior backend roles or internships, on-site in Minas Gerais or remote.',
    local: 'Ouro Preto, Brazil',
  },
  textos: {
    faleComigo: 'Get in touch',
    curriculo: 'Résumé',
    codigo: 'Code',
    demo: 'Demo',
    de: 'for',
    fotoDe: 'Photo of',
    pularConteudo: 'Skip to content',
    secoes: 'Sections',
    tecnologias: 'Technologies',
  },
};
