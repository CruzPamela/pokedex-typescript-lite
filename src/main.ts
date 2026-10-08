import { PokemonResumo, PokemonApiResponse } from "./models/Pokemon";
import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./models/CatalogoPokemon";

const teste : PokemonResumo = {
    id: 25,
    nome: "pikachu",
    tipos: ["electric"],
    altura: 4,
    peso: 60,
};

console.log(teste);

const respostaFalsa: PokemonApiResponse = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  types: [{ type: { name: "electric" } }],
};

console.log(respostaFalsa.types);
console.log(respostaFalsa.types[0]);
console.log(respostaFalsa.types[0].type);
console.log(respostaFalsa.types[0].type.name);



async function testar() {
  const catalogo = new CatalogoPokemon();
  catalogo.listar();

  const pikachu = await buscarPokemon("pikachu");

  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
    catalogo.adicionar(pikachu);
  }

  catalogo.listar();
  catalogo.remover(25);
  catalogo.listar();
  catalogo.remover(999);

}

testar();

