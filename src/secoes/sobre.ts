import type { Sobre } from '../data/tipos';
import { renderListaDetalhes } from '../componentes/lista-detalhes';
import { renderSecao } from '../componentes/secao';

export function renderSobre(sobre: Sobre): string {
  const paragrafos = sobre.paragrafos.map((texto) => `<p>${texto}</p>`).join('');

  return renderSecao(
    'sobre',
    sobre.titulo,
    `
      <div class="sobre__texto">${paragrafos}</div>
      ${renderListaDetalhes(sobre.detalhes)}`,
  );
}
