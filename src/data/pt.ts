import type { Conteudo } from './tipos';

export const pt: Conteudo = {
  resumo:
    'Desenvolvedor fullstack júnior com React, TypeScript, Node.js e C#/.NET. Estudante de Sistemas de Informação na UFOP e cofundador da Opus Automação e Dados.',
  menu: [
    { id: 'sobre', rotulo: 'Sobre' },
    { id: 'experiencia', rotulo: 'Exp' },
    { id: 'projetos', rotulo: 'Projetos' },
    { id: 'habilidades', rotulo: 'Skills' },
    { id: 'contato', rotulo: 'Contato' },
  ],
  sobre: {
    titulo: 'Sobre',
    paragrafos: [
      'Comecei na tecnologia como estagiário de T.I na Unimed João Monlevade, dando suporte a colaboradores e clínicas. Hoje trabalho com desenvolvimento fullstack: React e TypeScript no front-end, Node.js e C#/.NET no back-end, construindo APIs REST, interfaces web e soluções de banco de dados robustas e escaláveis.',
      'Sou cofundador da Opus Automação e Dados, onde desenvolvo software sob demanda e automações de processos para empresas. Também contribuo com projetos open source e tenho explorado IA generativa com LangChain e APIs de LLM.',
    ],
    detalhes: [
      { rotulo: 'Local', valor: 'João Monlevade, MG' },
      { rotulo: 'Foco', valor: 'Fullstack — React, TypeScript, Node.js e C#/.NET' },
      { rotulo: 'Formação', valor: 'Sistemas de Informação, UFOP — previsão em 12/2027' },
      { rotulo: 'Idiomas', valor: 'Português nativo · Inglês avançado' },
    ],
  },
  experiencia: {
    titulo: 'Experiência',
    itens: [
      {
        cargo: 'Cofundador & desenvolvedor fullstack',
        empresa: 'Opus Automação e Dados · Remoto',
        periodo: '2026 — atual',
        descricao:
          'Startup de tecnologia voltada ao desenvolvimento de software sob demanda e automação de processos para empresas clientes. Desenvolvi o sistema web de RH de uma empresa do ramo de bebidas, substituindo o controle manual em planilhas por gestão automatizada de funcionários e folha de ponto.',
        tecnologias: [],
      },
      {
        cargo: 'Estagiário de tecnologia',
        empresa: 'DOMVS iT · Remoto — São Paulo, SP',
        periodo: 'dez 2025 — out 2026',
        descricao:
          'Desenvolvimento fullstack com React no front-end e C#/.NET no back-end. Desenvolvi um sistema de gestão de colaboradores alocados com Clean Architecture e CQRS, criando interfaces dinâmicas, microsserviços e consumo de APIs REST.',
        tecnologias: ['React', 'C#/.NET', 'Clean Architecture', 'CQRS', 'APIs REST'],
      },
      {
        cargo: 'Estagiário de T.I',
        empresa: 'Unimed João Monlevade · Presencial — João Monlevade, MG',
        periodo: 'nov 2023 — nov 2025',
        descricao:
          'Suporte técnico a colaboradores e clínicas, manutenção de sistemas e rotinas de backup.',
        tecnologias: [],
      },
    ],
  },
  projetos: {
    titulo: 'Projetos',
    itens: [
      {
        nome: 'CentralFinanças',
        ano: '2026',
        descricao:
          'Plataforma de finanças pessoais com controle de entradas, saídas e reservas por categoria. Desenvolvida com fluxo de Pull Requests e CI no GitHub Actions, com deploy em Vercel, Railway e Neon.',
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
          'Assistente de IA generativa para clínicas que responde dúvidas a partir da base de conhecimento e agenda consultas, validando especialidade, médico, dia útil e horário e evitando conflitos de agenda.',
        tecnologias: ['Python', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'PostgreSQL'],
        links: [{ tipo: 'codigo', url: 'https://github.com/EwertonG/Ewerton-MedAgent' }],
      },
      {
        nome: 'BabyBuddy — contribuição open source',
        ano: '2026',
        descricao:
          'Pull Request aceito no repositório oficial (2,9 mil+ estrelas), corrigindo um erro de dessincronização de timers ativos entre sessões e dispositivos.',
        tecnologias: ['Python', 'Django', 'Django REST Framework', 'JavaScript'],
        links: [{ tipo: 'pullRequest', url: 'https://github.com/babybuddy/babybuddy/pull/1089' }],
      },
    ],
  },
  habilidades: {
    titulo: 'Habilidades',
    itens: [
      { rotulo: 'Front-end', valor: 'React, TypeScript, HTML, CSS, Vite, Material UI' },
      {
        rotulo: 'Back-end',
        valor:
          'C#/.NET (ASP.NET, APIs REST, CQRS), Python, JavaScript, Node.js (Express, Sequelize, Prisma)',
      },
      { rotulo: 'Banco de dados', valor: 'PostgreSQL, SQL, MongoDB, Firebase' },
      { rotulo: 'Deploy e infra', valor: 'Vercel, Railway, Neon, Docker, CI/CD' },
      { rotulo: 'DevOps', valor: 'Git e Git Flow, GitHub Actions, Azure DevOps, Scrum' },
      { rotulo: 'IA', valor: 'LangChain, integração com APIs de LLM' },
    ],
  },
  formacao: {
    titulo: 'Formação e idiomas',
    itens: [
      {
        rotulo: 'Graduação',
        valor:
          'Bacharelado em Sistemas de Informação — UFOP, João Monlevade · 6º período, previsão em 12/2027',
      },
      { rotulo: 'Inglês', valor: 'Avançado — Choice English School (2016–2022)' },
      { rotulo: 'Português', valor: 'Nativo' },
    ],
  },
  contato: {
    chamada: 'Aberto a oportunidades como desenvolvedor fullstack júnior.',
    local: 'João Monlevade, MG',
  },
  textos: {
    faleComigo: 'Fale comigo',
    curriculo: 'Currículo',
    links: { codigo: 'Código', demo: 'Demo', pullRequest: 'Pull Request' },
    de: 'de',
    fotoDe: 'Foto de',
    pularConteudo: 'Pular para o conteúdo',
    secoes: 'Seções',
    tecnologias: 'Tecnologias',
    outroIdioma: 'EN',
    trocarIdioma: 'View in English',
  },
};
