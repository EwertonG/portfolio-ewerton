import type { Detalhe } from '../data/conteudo';

export function renderListaDetalhes(itens: Detalhe[]): string {
  const linhas = itens
    .map(
      (item) => `
        <div class="detalhes__linha">
          <dt>${item.rotulo}</dt>
          <dd>${item.valor}</dd>
        </div>`,
    )
    .join('');

  return `<dl class="detalhes">${linhas}</dl>`;
}
