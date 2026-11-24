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

export interface Projeto {
  nome: string;
  ano: string;
  descricao: string;
  tecnologias: string[];
  repositorio?: string;
  demo?: string;
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
  faleComigo: string;
  curriculo: string;
  codigo: string;
  demo: string;
  de: string;
  fotoDe: string;
  pularConteudo: string;
  secoes: string;
  tecnologias: string;
}

export interface Conteudo {
  resumo: string;
  menu: ItemMenu[];
  sobre: Sobre;
  experiencia: SecaoExperiencia;
  projetos: SecaoProjetos;
  habilidades: SecaoDetalhes;
  certificacoes: SecaoDetalhes;
  contato: Contato;
  textos: Textos;
}
