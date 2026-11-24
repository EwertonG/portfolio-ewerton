export function revelarAoRolar(container: HTMLElement, animar: boolean): () => void {
  const elementos = [...container.querySelectorAll<HTMLElement>('.hero, .secao')];
  const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  for (const elemento of elementos) {
    elemento.classList.add('revelar');
  }

  if (!animar || menosMovimento || !('IntersectionObserver' in window)) {
    for (const elemento of elementos) {
      elemento.classList.add('visivel');
    }
    return () => {};
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          observador.unobserve(entrada.target);
        }
      }
    },
    { threshold: 0.1 },
  );

  for (const elemento of elementos) {
    observador.observe(elemento);
  }

  return () => observador.disconnect();
}
