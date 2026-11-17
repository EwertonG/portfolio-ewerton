export interface Perfil {
  nome: string;
  iniciais: string;
  foto: string | null;
  resumo: string;
  email: string;
  github: string;
  linkedin: string;
  curriculo: string;
}

export interface ItemMenu {
  id: string;
  rotulo: string;
}

export const perfil: Perfil = {
  nome: 'Ewerton Gomes Barcia',
  iniciais: 'EB',
  foto: null,
  resumo:
    'Estudante de Sistemas de Informação na UFOP, 23 anos. Desenvolvimento backend e integrações entre sistemas, com Java, Python e SQL. À procura de uma vaga de desenvolvedor júnior.',
  email: 'ewerton.barcia@exemplo.com',
  github: 'https://github.com/EwertonG',
  linkedin: 'https://www.linkedin.com/',
  curriculo: 'curriculo.pdf',
};

export const menu: ItemMenu[] = [
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'experiencia', rotulo: 'Exp' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'habilidades', rotulo: 'Skills' },
  { id: 'contato', rotulo: 'Contato' },
];

export interface Detalhe {
  rotulo: string;
  valor: string;
}

export interface Sobre {
  titulo: string;
  paragrafos: string[];
  detalhes: Detalhe[];
}

export const sobre: Sobre = {
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
};

export interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
  tecnologias: string[];
}

export interface SecaoExperiencia {
  titulo: string;
  itens: Experiencia[];
}

export const experiencia: SecaoExperiencia = {
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
};
