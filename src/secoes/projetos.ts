import type { Projeto, SecaoProjetos } from '../data/conteudo';
import { renderSecao } from '../componentes/secao';
import { renderTecnologias } from '../componentes/tecnologias';

function renderLink(rotulo: string, url: string | undefined, nome: string): string {
  if (!url) {
    return '';
  }

  return `
    <li>
      <a href="${url}" target="_blank" rel="noopener" aria-label="${rotulo} de ${nome}">
        ${rotulo} <span aria-hidden="true">↗</span>
      </a>
    </li>`;
}

function renderItem(projeto: Projeto): string {
  const links =
    renderLink('Código', projeto.repositorio, projeto.nome) +
    renderLink('Demo', projeto.demo, projeto.nome);

  return `
    <li class="projetos__item">
      <article>
        <header class="projetos__cabecalho">
          <h3 class="projetos__nome">${projeto.nome}</h3>
          <span class="projetos__ano">${projeto.ano}</span>
        </header>
        <p class="projetos__descricao">${projeto.descricao}</p>
        ${renderTecnologias(projeto.tecnologias)}
        ${links ? `<ul class="projetos__links">${links}</ul>` : ''}
      </article>
    </li>`;
}

export function renderProjetos(projetos: SecaoProjetos): string {
  const itens = projetos.itens.map(renderItem).join('');

  return renderSecao('projetos', projetos.titulo, `<ul class="projetos">${itens}</ul>`);
}
