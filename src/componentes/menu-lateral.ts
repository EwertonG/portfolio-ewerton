import type { ItemMenu } from '../data/tipos';

export function renderMenuLateral(itens: ItemMenu[], rotulo: string): string {
  const links = itens
    .map(
      (item) => `
        <li>
          <a class="menu-lateral__link" href="#${item.id}">${item.rotulo}</a>
        </li>`,
    )
    .join('');

  return `
    <nav class="menu-lateral" aria-label="${rotulo}">
      <ul class="menu-lateral__lista">${links}</ul>
    </nav>`;
}
