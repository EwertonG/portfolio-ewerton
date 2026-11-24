export function observarSecaoAtiva(container: HTMLElement): () => void {
  const links = [...container.querySelectorAll<HTMLAnchorElement>('.menu-lateral__link')];
  const ids = links.map((link) => link.hash.slice(1));
  const secoes = ids
    .map((id) => document.getElementById(id))
    .filter((secao): secao is HTMLElement => secao !== null);
  const hero = container.querySelector<HTMLElement>('.hero');

  function marcar(id: string | null): void {
    for (const link of links) {
      if (link.hash === `#${id}`) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          marcar(entrada.target === hero ? null : entrada.target.id);
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );

  for (const secao of secoes) {
    observador.observe(secao);
  }

  if (hero) {
    observador.observe(hero);
  }

  function aoRolar(): void {
    const noFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (noFim && ids.length > 0) {
      marcar(ids[ids.length - 1]);
    }
  }

  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  return () => {
    observador.disconnect();
    window.removeEventListener('scroll', aoRolar);
  };
}
