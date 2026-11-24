import type { Idioma } from './data/tipos';

const CHAVE = 'idioma';

function ehIdioma(valor: string | null): valor is Idioma {
  return valor === 'pt' || valor === 'en';
}

function idiomaPadrao(): Idioma {
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function idiomaInicial(): Idioma {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (ehIdioma(salvo)) {
      return salvo;
    }
  } catch {
    return idiomaPadrao();
  }

  return idiomaPadrao();
}

export function salvarIdioma(idioma: Idioma): void {
  try {
    localStorage.setItem(CHAVE, idioma);
  } catch {
    return;
  }
}

export function outroIdioma(idioma: Idioma): Idioma {
  return idioma === 'pt' ? 'en' : 'pt';
}

export function codigoIdioma(idioma: Idioma): string {
  return idioma === 'pt' ? 'pt-BR' : 'en';
}
