import type { Perfil } from '../data/conteudo';

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
      <div class="hero__acoes">
        <a class="botao botao--primario" href="#contato">Fale comigo <span aria-hidden="true">→</span></a>
        <a class="botao" href="${import.meta.env.BASE_URL}${perfil.curriculo}" target="_blank" rel="noopener">Currículo</a>
      </div>
      <ul class="hero__links">
        <li><a href="mailto:${perfil.email}">${perfil.email}</a></li>
        <li><a href="${perfil.github}" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="${perfil.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </header>`;
}
