import type { ItemMenu } from '../data/conteudo';

export function renderMenuLateral(itens: ItemMenu[]): string {
  const links = itens
    .map(
      (item) => `
        <li>
          <a class="menu-lateral__link" href="#${item.id}">${item.rotulo}</a>
        </li>`,
    )
    .join('');

  return `
    <nav class="menu-lateral" aria-label="Seções">
      <ul class="menu-lateral__lista">${links}</ul>
    </nav>`;
}
