import { Pokemon } from "../model/pokemon/pokemon"
import { PokeAPI } from "./pokemonFetcher"

export class PokemonService {
  constructor(private pokeAPI: PokeAPI) {}

  async getAllPokemon(): Promise<Pokemon[]> {
    const pokemonNames = await this.pokeAPI.getAllNames()

    const allPokemon: Pokemon[] = await Promise.all(
      pokemonNames.map(async (pokemonName) => {
        const pokemonData = await this.pokeAPI.getPokemonData(pokemonName)
        const pokemon = new Pokemon(pokemonData)
        return pokemon
      })
    )

    return allPokemon
  }
}
