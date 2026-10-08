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


## Organização do Kanban

O trabalho foi organizado em um quadro Kanban no GitHub Projects, com as colunas Backlog, A Fazer, Em Andamento e Concluído.

Link do Kanban: https://github.com/users/CruzPamela/projects/1/views/1

## Branches utilizadas

- `main`: versão final e estável do projeto.
- `develop`: onde o trabalho pronto é reunido antes de ir para a `main`.
- `feat/pokedex`: onde o código do projeto foi desenvolvido.
- `docs/readme`: onde este README foi escrito.

O código passou da `feat/pokedex` para a `develop` e da `develop` para a `main` por meio de pull requests.

## Melhorias futuras

- Integrar o Kanban ao VS Code e aos commits, para que um commit ligado a um cartão o mova para Concluído automaticamente
- Exibir HP, ataque e defesa dos Pokémon
- Criar treinadores, em que cada treinador teria os seus próprios Pokémon


## Conceitos aplicados

### TypeScript

- TypeScript é uma linguagem de programação que acrescenta tipos de dados ao JavaScript. Um dos lugares onde eu usei foi na função `buscarPokemon`: o parâmetro é um texto (`string`) e o retorno é `Promise<PokemonResumo | null>`. Ele ajuda a identificar erros enquanto desenvolvemos o programa, antes mesmo de rodar.

### Interface PokemonResumo

- A interface `PokemonResumo` serve para definir o formato dos dados de um Pokémon: `id`, `nome`, `tipos`, `altura` e `peso`. Ela é usada como retorno da função `buscarPokemon` e na lista da classe `CatalogoPokemon`. Eu provoquei um erro de propósito, colocando um texto onde devia ir um número, para testar se a interface estava funcionando. Ela ajuda a identificar se os tipos dos dados (`number` ou `string`) estão corretos.

### Fetch e async/await

- `fetch` é usado para fazer uma requisição para uma API. Usei para solicitar as informações da PokeAPI. Ele trabalha de forma assíncrona e traz uma `Promise`. `Promise` é uma promessa de um resultado que chega depois.
- `async` indica que aquela função trabalha de forma assíncrona. Foi usado na função `buscarPokemon`, e faz com que ela retorne uma `Promise`.
- `await` faz a função aguardar o resultado antes de seguir para a próxima linha. Também foi usado na função `buscarPokemon`, para esperar a resposta do `fetch` e a leitura dos dados (`resposta.json()`).

### Tratamento de erros

- Tratamento de erro é uma forma do programa lidar com algum erro não esperado, sem quebrar. Usei o `try/catch` na função `buscarPokemon` para dois casos:
  - **Pokémon inexistente (404):** o programa mostra `[ERRO] Pokémon não encontrado.` e devolve o valor `null`.
  - **Falha na consulta (por exemplo, sem internet):** o programa cai no `catch`, mostra `[ERRO] Não foi possível buscar o Pokémon.` e também devolve `null`.
- Quando o Pokémon existe, o programa mostra `[OK] Pokémon encontrado: nome` e devolve os dados. Em todos os casos o programa continua funcionando.

### Métodos de array

- Os métodos de array são ferramentas para trabalhar em cima de uma lista. Os que usei foram:
  - `.map`, no `PokeApiService`: mapeia a lista de tipos da API e cria uma lista nova, só com os nomes.
  - `.some`, na classe `CatalogoPokemon` (em `adicionar` e `remover`): pergunta se algum Pokémon da lista já tem aquele `id`.
  - `.forEach`, na classe `CatalogoPokemon` (em `listar`): executa uma ação, mostrar na tela, para cada Pokémon da lista.
  - `.filter`, na classe `CatalogoPokemon` (em `remover`): cria uma lista nova só com os Pokémon que têm `id` diferente do que será removido.

### Classe CatalogoPokemon

- Classe é uma forma de organizarmos as informações em um único lugar. Além de organizar, também podemos proteger: usei `private` no atributo `pokemons`, a lista de Pokémon do catálogo, para deixar as informações protegidas e só a própria classe poder mexer nela. Ela ajuda a manter as informações organizadas em um único lugar e não espalhadas pelo código.
- Atributo `pokemons` (privado): guarda a lista de Pokémon em memória.
- Método `adicionar`: coloca um Pokémon na lista, mas avisa se ele já está lá.
- Método `listar`: mostra o catálogo na tela, ou avisa que está vazio.
- Método `remover`: tira um Pokémon pelo `id`, ou avisa que não encontrou.