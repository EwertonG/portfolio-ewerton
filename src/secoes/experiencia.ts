import type { Experiencia, SecaoExperiencia } from '../data/conteudo';
import { renderSecao } from '../componentes/secao';
import { renderTecnologias } from '../componentes/tecnologias';

function renderItem(item: Experiencia): string {
  return `
    <li class="experiencia__item">
      <article>
        <header class="experiencia__cabecalho">
          <h3 class="experiencia__cargo">${item.cargo}</h3>
          <span class="experiencia__periodo">${item.periodo}</span>
        </header>
        <p class="experiencia__empresa">${item.empresa}</p>
        <p class="experiencia__descricao">${item.descricao}</p>
        ${renderTecnologias(item.tecnologias)}
      </article>
    </li>`;
}

export function renderExperiencia(experiencia: SecaoExperiencia): string {
  const itens = experiencia.itens.map(renderItem).join('');

  return renderSecao('experiencia', experiencia.titulo, `<ol class="experiencia">${itens}</ol>`);
}
