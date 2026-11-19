import type { SecaoDetalhes } from '../data/conteudo';
import { renderListaDetalhes } from '../componentes/lista-detalhes';
import { renderSecao } from '../componentes/secao';

export function renderCertificacoes(certificacoes: SecaoDetalhes): string {
  return renderSecao(
    'certificacoes',
    certificacoes.titulo,
    renderListaDetalhes(certificacoes.itens),
  );
}
