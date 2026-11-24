import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/componentes.css';
import './styles/secoes.css';
import {
  contato,
  certificacoes,
  experiencia,
  habilidades,
  menu,
  perfil,
  projetos,
  sobre,
} from './data/conteudo';
import { renderBotaoIdioma } from './componentes/botao-idioma';
import { renderLinkPular } from './componentes/link-pular';
import { renderMenuLateral } from './componentes/menu-lateral';
import { renderRodape } from './componentes/rodape';
import { renderHero } from './secoes/hero';
import { renderContato } from './secoes/contato';
import { renderCertificacoes } from './secoes/certificacoes';
import { renderExperiencia } from './secoes/experiencia';
import { renderHabilidades } from './secoes/habilidades';
import { renderProjetos } from './secoes/projetos';
import { renderSobre } from './secoes/sobre';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.className = 'pagina';
  app.innerHTML = `
    ${renderLinkPular()}
    ${renderMenuLateral(menu)}
    ${renderBotaoIdioma()}
    <main class="conteudo" id="conteudo" tabindex="-1">
      ${renderHero(perfil)}
      ${renderSobre(sobre)}
      ${renderExperiencia(experiencia)}
      ${renderProjetos(projetos)}
      ${renderHabilidades(habilidades)}
      ${renderCertificacoes(certificacoes)}
      ${renderContato(contato, perfil)}
    </main>
    ${renderRodape(perfil, contato)}`;
}
