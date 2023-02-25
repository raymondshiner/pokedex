import { PokemonData } from "../model/pokemon/pokemon"
import { PokemonType } from "../model/pokemon/pokemonTypes"

export interface PokeAPI {
  getAllNames: () => Promise<string[]>
  getPokemonData: (name: string) => Promise<PokemonData>
}

const basePokemonURL = "https://pokeapi.co/api/v2/pokemon"

export class PokemonFetcher implements PokeAPI {
  public async getAllNames(): Promise<string[]> {
    const getAllPokemonURLendpoint = basePokemonURL + "?limit=100000&offset=0"

    const response = await fetch(getAllPokemonURLendpoint)
    const json = await response.json()

    const pokemonNames: string[] = json.results.map(
      (result: { name: string }) => result.name
    )

    return pokemonNames
  }

  public async getPokemonData(name: string): Promise<PokemonData> {
    return {
      name: "Pikachu",
      number: 25,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      primaryType: PokemonType.Electric,
    }
  }
}
