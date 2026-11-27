import type { Conteudo } from './tipos';

export const en: Conteudo = {
  resumo:
    'Junior fullstack developer working with React, TypeScript, Node.js and C#/.NET. Information Systems student at UFOP and co-founder of Opus Automação e Dados.',
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
      'I started in tech as an IT intern at Unimed João Monlevade, supporting staff and clinics. Today I work on fullstack development: React and TypeScript on the front end, Node.js and C#/.NET on the back end, building REST APIs, web interfaces and robust, scalable database solutions.',
      'I am a co-founder of Opus Automação e Dados, where I build custom software and process automation for companies. I also contribute to open source projects and have been exploring generative AI with LangChain and LLM APIs.',
    ],
    detalhes: [
      { rotulo: 'Location', valor: 'João Monlevade, Brazil' },
      { rotulo: 'Focus', valor: 'Fullstack — React, TypeScript, Node.js and C#/.NET' },
      { rotulo: 'Education', valor: 'Information Systems, UFOP — expected Dec 2027' },
      { rotulo: 'Languages', valor: 'Portuguese (native) · English (advanced)' },
    ],
  },
  experiencia: {
    titulo: 'Experience',
    itens: [
      {
        cargo: 'Co-founder & fullstack developer',
        empresa: 'Opus Automação e Dados · Remote',
        periodo: '2026 — present',
        descricao:
          'Tech startup focused on custom software development and process automation for client companies. Built the HR web system for a beverage company, replacing manual spreadsheet tracking with automated employee and timesheet management.',
        tecnologias: [],
      },
      {
        cargo: 'Technology intern',
        empresa: 'DOMVS iT · Remote — São Paulo, Brazil',
        periodo: 'Dec 2025 — Oct 2026',
        descricao:
          'Fullstack development with React on the front end and C#/.NET on the back end. Built a system for managing allocated staff using Clean Architecture and CQRS, creating dynamic interfaces, microservices and REST API integrations.',
        tecnologias: ['React', 'C#/.NET', 'Clean Architecture', 'CQRS', 'REST APIs'],
      },
      {
        cargo: 'IT intern',
        empresa: 'Unimed João Monlevade · On-site — João Monlevade, Brazil',
        periodo: 'Nov 2023 — Nov 2025',
        descricao:
          'Technical support for staff and clinics, system maintenance and backup routines.',
        tecnologias: [],
      },
    ],
  },
  projetos: {
    titulo: 'Projects',
    itens: [
      {
        nome: 'CentralFinanças',
        ano: '2026',
        descricao:
          'Personal finance platform for tracking income, expenses and savings by category. Built with a Pull Request workflow and CI on GitHub Actions, deployed on Vercel, Railway and Neon.',
        tecnologias: ['React', 'TypeScript', 'Vite', 'Material UI', 'Node.js', 'PostgreSQL'],
        links: [
          { tipo: 'codigo', url: 'https://github.com/EwertonG/finance-hub' },
          { tipo: 'demo', url: 'https://finance-hub-ewerton4.vercel.app' },
        ],
      },
      {
        nome: 'Ewerton MedAgent',
        ano: '2026',
        descricao:
          'Generative AI assistant for clinics that answers questions from the clinic’s knowledge base and books appointments, validating specialty, doctor, business day and time slot while preventing scheduling conflicts.',
        tecnologias: ['Python', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'PostgreSQL'],
        links: [{ tipo: 'codigo', url: 'https://github.com/EwertonG/Ewerton-MedAgent' }],
      },
      {
        nome: 'BabyBuddy — open source contribution',
        ano: '2026',
        descricao:
          'Pull Request merged into the official repository (2.9k+ stars), fixing active timers getting out of sync across sessions and devices.',
        tecnologias: ['Python', 'Django', 'Django REST Framework', 'JavaScript'],
        links: [{ tipo: 'pullRequest', url: 'https://github.com/babybuddy/babybuddy/pull/1089' }],
      },
    ],
  },
  habilidades: {
    titulo: 'Skills',
    itens: [
      { rotulo: 'Front end', valor: 'React, TypeScript, HTML, CSS, Vite, Material UI' },
      {
        rotulo: 'Back end',
        valor:
          'C#/.NET (ASP.NET, REST APIs, CQRS), Python, JavaScript, Node.js (Express, Sequelize, Prisma)',
      },
      { rotulo: 'Databases', valor: 'PostgreSQL, SQL, MongoDB, Firebase' },
      { rotulo: 'Deploy & infra', valor: 'Vercel, Railway, Neon, Docker, CI/CD' },
      { rotulo: 'DevOps', valor: 'Git and Git Flow, GitHub Actions, Azure DevOps, Scrum' },
      { rotulo: 'AI', valor: 'LangChain, LLM API integration' },
    ],
  },
  formacao: {
    titulo: 'Education & languages',
    itens: [
      {
        rotulo: 'Degree',
        valor:
          'B.S. in Information Systems — UFOP, João Monlevade · 6th semester, expected Dec 2027',
      },
      { rotulo: 'English', valor: 'Advanced — Choice English School (2016–2022)' },
      { rotulo: 'Portuguese', valor: 'Native' },
    ],
  },
  contato: {
    chamada: 'Open to opportunities as a junior fullstack developer.',
    local: 'João Monlevade, Brazil',
  },
  textos: {
    tituloPagina: 'Ewerton Gomes Barcia — Fullstack developer',
    descricaoPagina:
      'Portfolio of Ewerton Gomes Barcia, junior fullstack developer working with React, TypeScript, Node.js and C#/.NET.',
    faleComigo: 'Get in touch',
    curriculo: 'Résumé',
    links: { codigo: 'Code', demo: 'Demo', pullRequest: 'Pull Request' },
    de: 'for',
    fotoDe: 'Photo of',
    pularConteudo: 'Skip to content',
    secoes: 'Sections',
    tecnologias: 'Technologies',
    outroIdioma: 'PT',
    trocarIdioma: 'Ver em português',
  },
};
