import type { Perfil, Textos } from '../data/tipos';
import { renderAcoes } from '../componentes/acoes';
import { renderLinks } from '../componentes/links';

function renderFoto(perfil: Perfil, textos: Textos): string {
  if (perfil.foto) {
    return `<img class="hero__foto" src="${import.meta.env.BASE_URL}${perfil.foto}" alt="${textos.fotoDe} ${perfil.nome}" width="64" height="64" />`;
  }

  return `<div class="hero__foto hero__foto--vazia" aria-hidden="true">${perfil.iniciais}</div>`;
}

export function renderHero(perfil: Perfil, resumo: string, textos: Textos): string {
  return `
    <header class="hero">
      ${renderFoto(perfil, textos)}
      <h1 class="hero__nome">${perfil.nome}</h1>
      <p class="hero__resumo">${resumo}</p>
      ${renderAcoes(perfil, textos, '#contato')}
      ${renderLinks([
        { rotulo: perfil.email, url: `mailto:${perfil.email}` },
        { rotulo: 'GitHub', url: perfil.github, externo: true },
        { rotulo: 'LinkedIn', url: perfil.linkedin, externo: true },
      ])}
    </header>`;
}
