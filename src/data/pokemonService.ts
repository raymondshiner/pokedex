import { PokeAPI, PokemonAPIResult } from "./pokemonFetcher"

export class PokemonService {
  constructor(private pokeAPI: PokeAPI) {}

  async getPokemon(): Promise<PokemonAPIResult[]> {
    return await this.pokeAPI.get()
  }
}
