export interface Link {
  rotulo: string;
  url: string;
  externo?: boolean;
}

export function renderLinks(links: Link[]): string {
  const itens = links
    .map((link) => {
      const atributos = link.externo ? ' target="_blank" rel="noopener"' : '';
      return `<li><a href="${link.url}"${atributos}>${link.rotulo}</a></li>`;
    })
    .join('');

  return `<ul class="links">${itens}</ul>`;
}
