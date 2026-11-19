import type { SecaoDetalhes } from '../data/conteudo';
import { renderListaDetalhes } from '../componentes/lista-detalhes';
import { renderSecao } from '../componentes/secao';

export function renderHabilidades(habilidades: SecaoDetalhes): string {
  return renderSecao('habilidades', habilidades.titulo, renderListaDetalhes(habilidades.itens));
}
