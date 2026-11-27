import type { SecaoDetalhes } from '../data/tipos';
import { renderListaDetalhes } from '../componentes/lista-detalhes';
import { renderSecao } from '../componentes/secao';

export function renderFormacao(formacao: SecaoDetalhes): string {
  return renderSecao('formacao', formacao.titulo, renderListaDetalhes(formacao.itens));
}
