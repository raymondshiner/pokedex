export interface PokemonAPIResult {
  name: string
  url: string
}

export interface PokeAPI {
  get: () => Promise<PokemonAPIResult[]>
}

const fetchAllPokemonURL =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

export class PokemonFetcher implements PokeAPI {
  public async get(): Promise<PokemonAPIResult[]> {
    const response = await fetch(fetchAllPokemonURL)
    const json = await response.json()
    return json.result
  }
}
