import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/componentes.css';
import './styles/secoes.css';
import { menu, perfil } from './data/conteudo';
import { renderBotaoIdioma } from './componentes/botao-idioma';
import { renderMenuLateral } from './componentes/menu-lateral';
import { renderHero } from './secoes/hero';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.className = 'pagina';
  app.innerHTML = `
    ${renderMenuLateral(menu)}
    ${renderBotaoIdioma()}
    <main class="conteudo" id="conteudo">
      ${renderHero(perfil)}
    </main>`;
}
