import type { Perfil } from '../data/conteudo';

export function renderAcoes(perfil: Perfil, destinoContato: string): string {
  return `
    <div class="acoes">
      <a class="botao botao--primario" href="${destinoContato}">Fale comigo <span aria-hidden="true">→</span></a>
      <a class="botao" href="${import.meta.env.BASE_URL}${perfil.curriculo}" target="_blank" rel="noopener">Currículo</a>
    </div>`;
}
