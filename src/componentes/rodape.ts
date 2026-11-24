import type { Contato, Perfil } from '../data/tipos';

export function renderRodape(perfil: Perfil, contato: Contato): string {
  const ano = new Date().getFullYear();

  return `
    <footer class="rodape">
      <span>© ${ano} ${perfil.nome}</span>
      <span>${contato.local}</span>
    </footer>`;
}
