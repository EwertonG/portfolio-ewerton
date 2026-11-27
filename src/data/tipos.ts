export interface Perfil {
  nome: string;
  iniciais: string;
  foto: string | null;
  email: string;
  github: string;
  linkedin: string;
  curriculo: string;
}

export interface ItemMenu {
  id: string;
  rotulo: string;
}

export interface Detalhe {
  rotulo: string;
  valor: string;
}

export interface Sobre {
  titulo: string;
  paragrafos: string[];
  detalhes: Detalhe[];
}

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

export type TipoLink = 'codigo' | 'demo' | 'pullRequest';

export interface LinkProjeto {
  tipo: TipoLink;
  url: string;
}

export interface Projeto {
  nome: string;
  ano: string;
  descricao: string;
  tecnologias: string[];
  links: LinkProjeto[];
}

export interface SecaoProjetos {
  titulo: string;
  itens: Projeto[];
}

export interface SecaoDetalhes {
  titulo: string;
  itens: Detalhe[];
}

export interface Contato {
  chamada: string;
  local: string;
}

export interface Textos {
  tituloPagina: string;
  descricaoPagina: string;
  faleComigo: string;
  curriculo: string;
  links: Record<TipoLink, string>;
  de: string;
  fotoDe: string;
  pularConteudo: string;
  secoes: string;
  tecnologias: string;
  outroIdioma: string;
  trocarIdioma: string;
}

export interface Conteudo {
  resumo: string;
  menu: ItemMenu[];
  sobre: Sobre;
  experiencia: SecaoExperiencia;
  projetos: SecaoProjetos;
  habilidades: SecaoDetalhes;
  formacao: SecaoDetalhes;
  contato: Contato;
  textos: Textos;
}

export type Idioma = 'pt' | 'en';
