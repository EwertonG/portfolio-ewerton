import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/componentes.css';
import './styles/secoes.css';
import { experiencia, menu, perfil, sobre } from './data/conteudo';
import { renderBotaoIdioma } from './componentes/botao-idioma';
import { renderMenuLateral } from './componentes/menu-lateral';
import { renderHero } from './secoes/hero';
import { renderExperiencia } from './secoes/experiencia';
import { renderSobre } from './secoes/sobre';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.className = 'pagina';
  app.innerHTML = `
    ${renderMenuLateral(menu)}
    ${renderBotaoIdioma()}
    <main class="conteudo" id="conteudo">
      ${renderHero(perfil)}
      ${renderSobre(sobre)}
      ${renderExperiencia(experiencia)}
    </main>`;
}
