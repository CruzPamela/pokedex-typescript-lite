import { PokemonResumo , PokemonApiResponse } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
  const resposta = await fetch(url);
    const dados = (await resposta.json()) as PokemonApiResponse;
  const tipos = dados.types.map((item) => item.type.name);

  return {
    id: dados.id,
    nome: dados.name,
    tipos: tipos,
    altura: dados.height,
    peso: dados.weight,
  };
}