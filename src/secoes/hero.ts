import type { Perfil } from '../data/conteudo';
import { renderAcoes } from '../componentes/acoes';
import { renderLinks } from '../componentes/links';

function renderFoto(perfil: Perfil): string {
  if (perfil.foto) {
    return `<img class="hero__foto" src="${import.meta.env.BASE_URL}${perfil.foto}" alt="Foto de ${perfil.nome}" width="64" height="64" />`;
  }

  return `<div class="hero__foto hero__foto--vazia" aria-hidden="true">${perfil.iniciais}</div>`;
}

export function renderHero(perfil: Perfil): string {
  return `
    <header class="hero">
      ${renderFoto(perfil)}
      <h1 class="hero__nome">${perfil.nome}</h1>
      <p class="hero__resumo">${perfil.resumo}</p>
      ${renderAcoes(perfil, '#contato')}
      ${renderLinks([
        { rotulo: perfil.email, url: `mailto:${perfil.email}` },
        { rotulo: 'GitHub', url: perfil.github, externo: true },
        { rotulo: 'LinkedIn', url: perfil.linkedin, externo: true },
      ])}
    </header>`;
}
