import { PokemonResumo , PokemonApiResponse } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

   try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log("[ERRO] Pokémon não encontrado.");
      return null;
    }


  
    const dados = (await resposta.json()) as PokemonApiResponse;
  const tipos = dados.types.map((item) => item.type.name);

  console.log(`[OK] Pokémon encontrado: ${dados.name}`);

  return {
    id: dados.id,
    nome: dados.name,
    tipos: tipos,
    altura: dados.height,
    peso: dados.weight,
  };
  } catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}