# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação de terminal feita com Node.js e TypeScript. Ela consulta dados de Pokémon na PokeAPI, transforma a resposta em um objeto simples e organiza os Pokémon buscados em um catálogo local. O catálogo fica **em memória**: ele existe enquanto o programa está rodando e não é salvo em arquivo.

## Objetivo

Praticar os conteúdos ministrados pelo professor Mauricio Souza na imersão realizada pela SCTEC (Módulo 01): Node.js, TypeScript, interfaces, funções tipadas, arrays e objetos, métodos de array, classes, `fetch`, `async/await`, tratamento de erros, GitHub, GitFlow e Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- tsx (executa arquivos TypeScript no terminal)
- PokeAPI (https://pokeapi.co)
- Git e GitHub

## Pré-requisitos

- Node.js (o projeto foi testado com a versão 24)
- npm
- Git
- Conexão com a internet, porque os dados vêm da PokeAPI

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/CruzPamela/pokedex-typescript-lite.git
```

Entre na pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

```bash
npm run start
```

O `main.ts` roda um fluxo de demonstração: busca Pokémon na PokeAPI, adiciona ao catálogo, tenta adicionar um repetido, busca um Pokémon que não existe, lista o catálogo, remove um Pokémon e lista de novo.

Scripts disponíveis:

| Comando | O que faz |
|---|---|
| `npm run start` | Executa o programa |
| `npm run dev` | Executa o programa (mesmo comando do start) |
| `npm run build` | Verifica e compila o TypeScript para JavaScript na pasta `dist` |
