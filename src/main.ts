import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/componentes.css';
import './styles/secoes.css';
import { conteudo, perfil } from './data/conteudo';
import { renderPagina } from './pagina';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.className = 'pagina';
  app.innerHTML = renderPagina(perfil, conteudo);
}
