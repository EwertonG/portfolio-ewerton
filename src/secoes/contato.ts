import type { Contato, Perfil, Textos } from '../data/tipos';
import { renderAcoes } from '../componentes/acoes';
import { renderLinks } from '../componentes/links';

export function renderContato(contato: Contato, perfil: Perfil, textos: Textos): string {
  return `
    <section class="secao contato" id="contato" aria-labelledby="contato-titulo">
      <h2 class="contato__chamada" id="contato-titulo">${contato.chamada}</h2>
      ${renderAcoes(perfil, textos, `mailto:${perfil.email}`)}
      ${renderLinks([{ rotulo: perfil.email, url: `mailto:${perfil.email}` }])}
    </section>`;
}
