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

----------------------------------------------------------------------------------------------

## Estrutura do projeto

```
pokedex-typescript-lite/
├── src/
│   ├── main.ts
│   ├── models/
│   │   ├── Pokemon.ts
│   │   └── CatalogoPokemon.ts
│   └── services/
│       └── PokeApiService.ts
├── package.json
├── tsconfig.json
└── README.md
```

- `src/main.ts`: ponto de entrada. Roda o fluxo de demonstração.
- `src/models/Pokemon.ts`: as interfaces `PokemonResumo` (o objeto simples do projeto) e `PokemonApiResponse` (os campos da PokeAPI que são usados).
- `src/models/CatalogoPokemon.ts`: a classe que guarda os Pokémon em memória e tem os métodos adicionar, listar e remover.
- `src/services/PokeApiService.ts`: a função `buscarPokemon`, que consulta a PokeAPI com `fetch`, trata erros e transforma a resposta em `PokemonResumo`.
- `package.json`: scripts e dependências do projeto.
- `tsconfig.json`: configuração do TypeScript (modo strict).

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Tratar falha na consulta (por exemplo, sem internet)
- Transformar a resposta da API em um objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar o catálogo
- Remover Pokémon por ID
- Exibir mensagens claras no terminal

## Exemplos de execução

### Busca válida

Entrada testada: `pikachu`

Saída obtida:

```
[OK] Pokémon encontrado: pikachu
```

Depois, ao listar o catálogo, o Pokémon aparece assim:

```
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### Busca inválida

Entrada testada: `pokemon-inexistente`

Saída obtida:

```
[ERRO] Pokémon não encontrado.
```

### Duplicidade

Entrada testada: adicionar `pikachu` duas vezes

Saída obtida:

```
[OK] pikachu adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada testada: remover o ID `25`

Saída obtida:

```
[OK] Pokémon removido do catálogo.
```

### Falha na consulta (sem internet)

Entrada testada: executar o programa com o Wi-Fi desligado

Saída obtida:

```
[ERRO] Não foi possível buscar o Pokémon.
[ERRO] Não foi possível buscar o Pokémon.
[ERRO] Não foi possível buscar o Pokémon.
[ERRO] Não foi possível buscar o Pokémon.
[AVISO] Catálogo vazio.
[AVISO] Nenhum Pokémon encontrado com esse ID.
[AVISO] Catálogo vazio.
```

### Saída completa do `npm run start`

```
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
[OK] Pokémon encontrado: charmander
[OK] charmander adicionado ao catálogo.
[OK] Pokémon encontrado: pikachu
[AVISO] pikachu já está no catálogo.
[ERRO] Pokémon não encontrado.
Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
[OK] Pokémon removido do catálogo.
Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```