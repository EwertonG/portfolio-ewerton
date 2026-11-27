import type { LinkProjeto, Projeto, SecaoProjetos, Textos } from '../data/tipos';
import { renderSecao } from '../componentes/secao';
import { renderTecnologias } from '../componentes/tecnologias';

function renderLink(link: LinkProjeto, projeto: Projeto, textos: Textos): string {
  const rotulo = textos.links[link.tipo];

  return `
    <li>
      <a href="${link.url}" target="_blank" rel="noopener" aria-label="${rotulo} ${textos.de} ${projeto.nome}">
        ${rotulo} <span aria-hidden="true">↗</span>
      </a>
    </li>`;
}

function renderItem(projeto: Projeto, textos: Textos): string {
  const links = projeto.links.map((link) => renderLink(link, projeto, textos)).join('');

  return `
    <li class="projetos__item">
      <article>
        <header class="projetos__cabecalho">
          <h3 class="projetos__nome">${projeto.nome}</h3>
          <span class="projetos__ano">${projeto.ano}</span>
        </header>
        <p class="projetos__descricao">${projeto.descricao}</p>
        ${renderTecnologias(projeto.tecnologias, textos.tecnologias)}
        ${links ? `<ul class="projetos__links">${links}</ul>` : ''}
      </article>
    </li>`;
}

export function renderProjetos(projetos: SecaoProjetos, textos: Textos): string {
  const itens = projetos.itens.map((projeto) => renderItem(projeto, textos)).join('');

  return renderSecao('projetos', projetos.titulo, `<ul class="projetos">${itens}</ul>`);
}
