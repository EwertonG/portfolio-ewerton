export function renderSecao(id: string, titulo: string, conteudo: string): string {
  return `
    <section class="secao" id="${id}" aria-labelledby="${id}-titulo">
      <h2 class="secao__titulo" id="${id}-titulo">${titulo}</h2>
      ${conteudo}
    </section>`;
}
