# Portfolio — Ewerton Gomes Barcia

Portfolio pessoal de Ewerton Gomes Barcia, desenvolvedor fullstack júnior com React, TypeScript, Node.js e C#/.NET.

**Acesse:** https://ewertong.github.io/portfolio-ewerton/

## Funcionalidades

- Página única com apresentação, sobre, experiência, projetos, habilidades, formação e contato
- Conteúdo em português e inglês, com troca pelo botão no topo e preferência salva no navegador
- Menu lateral que destaca a seção visível
- Animação de entrada das seções, desativada para quem prefere menos movimento
- Layout responsivo e acessível (link para pular ao conteúdo, foco visível, contraste AA)

## Tecnologias

- [Vite](https://vite.dev/) + TypeScript, sem framework
- CSS puro com variáveis de design
- Prettier e EditorConfig
- GitHub Actions + GitHub Pages

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
npm run format    # formata o código com Prettier
```

## Estrutura

```
src/
  data/        # conteúdo do site (perfil, textos em pt e en, tipos)
  componentes/ # partes reutilizáveis (menu, botões, listas, rodapé)
  secoes/      # seções da página
  efeitos/     # seção ativa no menu e animação ao rolar
  styles/      # tokens, base, layout, componentes e seções
```

Para alterar textos, edite `src/data/pt.ts` e `src/data/en.ts`. Dados de contato ficam em `src/data/conteudo.ts`.

## Deploy

Cada push na `main` gera o build e publica no GitHub Pages pelo workflow `.github/workflows/deploy.yml`. Pull requests rodam a verificação de formatação e o build.
