# Portfolio — Ewerton Gomes Barcia

Meu portfolio pessoal, desenvolvedor fullstack júnior com React, TypeScript, Node.js e C#/.NET.

**Acesse:** https://ewertong.github.io/portfolio-ewerton/

## Tecnologias

- TypeScript
- CSS puro com variáveis de design
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
