export function renderTecnologias(tecnologias: string[], rotulo: string): string {
  if (tecnologias.length === 0) {
    return '';
  }

  const itens = tecnologias.map((tecnologia) => `<li>${tecnologia}</li>`).join('');

  return `<ul class="tecnologias" aria-label="${rotulo}">${itens}</ul>`;
}
