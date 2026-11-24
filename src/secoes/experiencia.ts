import type { Experiencia, SecaoExperiencia, Textos } from '../data/tipos';
import { renderSecao } from '../componentes/secao';
import { renderTecnologias } from '../componentes/tecnologias';

function renderItem(item: Experiencia, textos: Textos): string {
  return `
    <li class="experiencia__item">
      <article>
        <header class="experiencia__cabecalho">
          <h3 class="experiencia__cargo">${item.cargo}</h3>
          <span class="experiencia__periodo">${item.periodo}</span>
        </header>
        <p class="experiencia__empresa">${item.empresa}</p>
        <p class="experiencia__descricao">${item.descricao}</p>
        ${renderTecnologias(item.tecnologias, textos.tecnologias)}
      </article>
    </li>`;
}

export function renderExperiencia(experiencia: SecaoExperiencia, textos: Textos): string {
  const itens = experiencia.itens.map((item) => renderItem(item, textos)).join('');

  return renderSecao('experiencia', experiencia.titulo, `<ol class="experiencia">${itens}</ol>`);
}
