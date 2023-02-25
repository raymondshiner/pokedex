export interface ExpectedJSON {
  name: string
  url: string
}

interface PokeAPI {
  get: () => Promise<ExpectedJSON[]>
}

const fetchAllPokemonURL =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

export class PokemonFetcher implements PokeAPI {
  public async get(): Promise<ExpectedJSON[]> {
    const response = await fetch(fetchAllPokemonURL)
    const json = await response.json()
    return json.result
  }
}
