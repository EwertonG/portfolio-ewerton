export function renderTecnologias(tecnologias: string[]): string {
  const itens = tecnologias.map((tecnologia) => `<li>${tecnologia}</li>`).join('');

  return `<ul class="tecnologias" aria-label="Tecnologias">${itens}</ul>`;
}
