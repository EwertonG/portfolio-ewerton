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
