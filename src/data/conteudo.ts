import type { Conteudo, Idioma, Perfil } from './tipos';
import { en } from './en';
import { pt } from './pt';

export const perfil: Perfil = {
  nome: 'Ewerton Gomes Barcia',
  iniciais: 'EB',
  foto: null,
  email: 'ewerton.gbarcia@gmail.com',
  github: 'https://github.com/EwertonG',
  linkedin: 'https://www.linkedin.com/in/ewertong',
  curriculo: 'curriculo.pdf',
};

export const conteudos: Record<Idioma, Conteudo> = { pt, en };
