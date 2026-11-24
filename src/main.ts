import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/componentes.css';
import './styles/secoes.css';
import type { Idioma } from './data/tipos';
import { conteudos, perfil } from './data/conteudo';
import { codigoIdioma, idiomaInicial, outroIdioma, salvarIdioma } from './i18n';
import { renderPagina } from './pagina';

const app = document.querySelector<HTMLDivElement>('#app');

function render(container: HTMLElement, idioma: Idioma): void {
  document.documentElement.lang = codigoIdioma(idioma);
  container.innerHTML = renderPagina(perfil, conteudos[idioma]);
}

if (app) {
  let idioma = idiomaInicial();

  app.className = 'pagina';
  render(app, idioma);

  app.addEventListener('click', (evento) => {
    if (!(evento.target instanceof Element) || !evento.target.closest('.botao-idioma')) {
      return;
    }

    idioma = outroIdioma(idioma);
    salvarIdioma(idioma);
    render(app, idioma);
    app.querySelector<HTMLButtonElement>('.botao-idioma')?.focus();
  });
}
