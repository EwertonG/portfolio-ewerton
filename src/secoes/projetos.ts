import type { Projeto, SecaoProjetos, Textos } from '../data/tipos';
import { renderSecao } from '../componentes/secao';
import { renderTecnologias } from '../componentes/tecnologias';

function renderLink(rotulo: string, url: string | undefined, descricao: string): string {
  if (!url) {
    return '';
  }

  return `
    <li>
      <a href="${url}" target="_blank" rel="noopener" aria-label="${descricao}">
        ${rotulo} <span aria-hidden="true">↗</span>
      </a>
    </li>`;
}

function renderItem(projeto: Projeto, textos: Textos): string {
  const links =
    renderLink(
      textos.codigo,
      projeto.repositorio,
      `${textos.codigo} ${textos.de} ${projeto.nome}`,
    ) + renderLink(textos.demo, projeto.demo, `${textos.demo} ${textos.de} ${projeto.nome}`);

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
