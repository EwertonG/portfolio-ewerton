import type { Conteudo } from './tipos';

export const pt: Conteudo = {
  resumo:
    'Estudante de Sistemas de Informação na UFOP, 23 anos. Desenvolvimento backend e integrações entre sistemas, com Java, Python e SQL. À procura de uma vaga de desenvolvedor júnior.',
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
      'Comecei a programar no segundo período do curso, em um projeto de extensão que digitalizava o controle de estoque de uma cooperativa de Ouro Preto. Desde então trabalho com backend: modelar o banco, escrever a API, manter os testes e acompanhar o comportamento em produção.',
      'Prefiro código simples e revisado a soluções engenhosas que ninguém entende depois. Fora do curso, participo do grupo de estudos de algoritmos da universidade e corro na serra nos fins de semana.',
    ],
    detalhes: [
      { rotulo: 'Idade', valor: '23 anos' },
      { rotulo: 'Local', valor: 'Ouro Preto, MG — aberto a remoto' },
      { rotulo: 'Formação', valor: 'Sistemas de Informação, UFOP — conclusão em 2027' },
      { rotulo: 'Situação', valor: 'Disponível para estágio ou vaga júnior' },
    ],
  },
  experiencia: {
    titulo: 'Experiência',
    itens: [
      {
        cargo: 'Desenvolvedor backend (estágio)',
        empresa: 'Meridian Sistemas, Belo Horizonte',
        periodo: '2025 — atual',
        descricao:
          'Manutenção e evolução de uma API em Java com Spring Boot usada por três produtos internos. Reescrevi a rotina de importação de arquivos fiscais, que passou de 40 para 9 minutos por lote, e cobri o módulo com testes automatizados.',
        tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      },
      {
        cargo: 'Desenvolvedor júnior (freelance)',
        empresa: 'Projetos autônomos',
        periodo: '2024 — 2025',
        descricao:
          'Integrações entre sistemas de gestão e plataformas de venda para dois clientes pequenos: rotinas em Python para sincronizar pedidos e estoque, com registro de erros e reprocessamento manual.',
        tecnologias: ['Python', 'REST', 'MySQL'],
      },
      {
        cargo: 'Bolsista de projeto de extensão',
        empresa: 'UFOP — Departamento de Computação',
        periodo: '2023 — 2024',
        descricao:
          'Equipe que construiu um sistema de controle de estoque para uma cooperativa local. Cuidei do modelo de dados e das telas de relatório, em contato direto com os usuários finais.',
        tecnologias: ['PHP', 'SQL', 'Levantamento de requisitos'],
      },
    ],
  },
  projetos: {
    titulo: 'Projetos',
    itens: [
      {
        nome: 'Almoxarife',
        ano: '2026',
        descricao:
          'API de controle de estoque multiempresa, com autenticação por token e relatórios mensais em CSV.',
        tecnologias: ['Java', 'Spring Boot', 'PostgreSQL'],
        links: [{ tipo: 'codigo', url: 'https://github.com/EwertonG/almoxarife' }],
      },
      {
        nome: 'Rota Serra',
        ano: '2025',
        descricao:
          'Aplicação web que cruza dados abertos de transporte para sugerir rotas entre distritos de Ouro Preto.',
        tecnologias: ['Python', 'FastAPI', 'Leaflet'],
        links: [
          { tipo: 'codigo', url: 'https://github.com/EwertonG/rota-serra' },
          { tipo: 'demo', url: 'https://rota-serra.exemplo.com' },
        ],
      },
      {
        nome: 'Boletim Acadêmico',
        ano: '2025',
        descricao:
          'Painel de notas e frequência feito para a turma, com importação do sistema da universidade.',
        tecnologias: ['React', 'Node.js', 'SQLite'],
        links: [{ tipo: 'codigo', url: 'https://github.com/EwertonG/boletim-academico' }],
      },
      {
        nome: 'Fila Justa',
        ano: '2024',
        descricao:
          'Serviço de senhas para atendimento presencial, com painel de chamada e histórico de espera.',
        tecnologias: ['Python', 'Flask', 'WebSocket'],
        links: [{ tipo: 'codigo', url: 'https://github.com/EwertonG/fila-justa' }],
      },
    ],
  },
  habilidades: {
    titulo: 'Habilidades',
    itens: [
      { rotulo: 'Linguagens', valor: 'Java, Python, SQL, JavaScript, PHP' },
      { rotulo: 'Frameworks', valor: 'Spring Boot, FastAPI, React, Flask' },
      { rotulo: 'Dados e infra', valor: 'PostgreSQL, MySQL, Docker, AWS (EC2, S3)' },
      { rotulo: 'Práticas', valor: 'Git e code review, testes automatizados, APIs REST, Scrum' },
    ],
  },
  certificacoes: {
    titulo: 'Certificações e idiomas',
    itens: [
      { rotulo: '2025', valor: 'Oracle Certified Foundations Associate — Java' },
      { rotulo: '2025', valor: 'AWS Certified Cloud Practitioner' },
      { rotulo: '2024', valor: 'Scrum Foundation Professional Certificate — CertiProf' },
      {
        rotulo: 'Idiomas',
        valor: 'Português nativo · Inglês avançado (B2) · Espanhol básico (A2)',
      },
    ],
  },
  contato: {
    chamada: 'Disponível para vagas de backend júnior ou estágio, presencial em Minas ou remoto.',
    local: 'Ouro Preto, MG',
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
