import type { Perfil, Textos } from '../data/tipos';

export function renderAcoes(perfil: Perfil, textos: Textos, destinoContato: string): string {
  return `
    <div class="acoes">
      <a class="botao botao--primario" href="${destinoContato}">${textos.faleComigo} <span aria-hidden="true">→</span></a>
      <a class="botao" href="${import.meta.env.BASE_URL}${perfil.curriculo}" target="_blank" rel="noopener">${textos.curriculo}</a>
    </div>`;
}
