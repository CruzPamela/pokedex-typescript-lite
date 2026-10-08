import { PokemonResumo, PokemonApiResponse } from "./models/Pokemon";
import { buscarPokemon } from "./services/PokeApiService";

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
  await buscarPokemon("pikachu");
  await buscarPokemon("pokemon-inexistente");
}

testar();

