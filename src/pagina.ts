import type { Conteudo, Perfil } from './data/tipos';
import { renderBotaoIdioma } from './componentes/botao-idioma';
import { renderLinkPular } from './componentes/link-pular';
import { renderMenuLateral } from './componentes/menu-lateral';
import { renderRodape } from './componentes/rodape';
import { renderCertificacoes } from './secoes/certificacoes';
import { renderContato } from './secoes/contato';
import { renderExperiencia } from './secoes/experiencia';
import { renderHabilidades } from './secoes/habilidades';
import { renderHero } from './secoes/hero';
import { renderProjetos } from './secoes/projetos';
import { renderSobre } from './secoes/sobre';

export function renderPagina(perfil: Perfil, conteudo: Conteudo): string {
  const { textos } = conteudo;

  return `
    ${renderLinkPular(textos.pularConteudo)}
    ${renderMenuLateral(conteudo.menu, textos.secoes)}
    ${renderBotaoIdioma(textos.outroIdioma, textos.trocarIdioma)}
    <main class="conteudo" id="conteudo" tabindex="-1">
      ${renderHero(perfil, conteudo.resumo, textos)}
      ${renderSobre(conteudo.sobre)}
      ${renderExperiencia(conteudo.experiencia, textos)}
      ${renderProjetos(conteudo.projetos, textos)}
      ${renderHabilidades(conteudo.habilidades)}
      ${renderCertificacoes(conteudo.certificacoes)}
      ${renderContato(conteudo.contato, perfil, textos)}
    </main>
    ${renderRodape(perfil, conteudo.contato)}`;
}
