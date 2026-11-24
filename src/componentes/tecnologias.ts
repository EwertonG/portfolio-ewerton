export function renderTecnologias(tecnologias: string[], rotulo: string): string {
  const itens = tecnologias.map((tecnologia) => `<li>${tecnologia}</li>`).join('');

  return `<ul class="tecnologias" aria-label="${rotulo}">${itens}</ul>`;
}
