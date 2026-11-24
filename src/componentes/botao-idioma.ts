export function renderBotaoIdioma(sigla: string, rotulo: string): string {
  return `
    <button class="botao-idioma" type="button" aria-label="${rotulo}" lang="${sigla.toLowerCase()}">${sigla}</button>`;
}
