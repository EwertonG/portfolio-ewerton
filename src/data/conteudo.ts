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
