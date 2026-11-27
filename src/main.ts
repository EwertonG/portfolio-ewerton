import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/componentes.css';
import './styles/secoes.css';
import type { Idioma } from './data/tipos';
import { conteudos, perfil } from './data/conteudo';
import { revelarAoRolar } from './efeitos/revelar';
import { observarSecaoAtiva } from './efeitos/secao-ativa';
import { codigoIdioma, idiomaInicial, outroIdioma, salvarIdioma } from './i18n';
import { renderPagina } from './pagina';

const app = document.querySelector<HTMLDivElement>('#app');
let encerrarEfeitos = (): void => {};

function render(container: HTMLElement, idioma: Idioma, animar: boolean): void {
  encerrarEfeitos();
  const conteudo = conteudos[idioma];

  document.documentElement.lang = codigoIdioma(idioma);
  document.title = conteudo.textos.tituloPagina;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', conteudo.textos.descricaoPagina);
  container.innerHTML = renderPagina(perfil, conteudo);

  const encerrarSecaoAtiva = observarSecaoAtiva(container);
  const encerrarRevelar = revelarAoRolar(container, animar);
  encerrarEfeitos = () => {
    encerrarSecaoAtiva();
    encerrarRevelar();
  };
}

if (app) {
  let idioma = idiomaInicial();

  app.className = 'pagina';
  render(app, idioma, true);

  app.addEventListener('click', (evento) => {
    if (!(evento.target instanceof Element) || !evento.target.closest('.botao-idioma')) {
      return;
    }

    idioma = outroIdioma(idioma);
    salvarIdioma(idioma);
    render(app, idioma, false);
    app.querySelector<HTMLButtonElement>('.botao-idioma')?.focus();
  });
}
