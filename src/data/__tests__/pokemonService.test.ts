import { PokeAPI, PokemonAPIResult } from "../pokemonFetcher"
import { PokemonService } from "../pokemonService"

const expectedAPIresult: PokemonAPIResult = {
  name: "Bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
}

export class FakePokemonFetcher implements PokeAPI {
  constructor(private results: PokemonAPIResult[]) {}

  public async get(): Promise<PokemonAPIResult[]> {
    return this.results
  }
}

describe("PokemonService", () => {
  it("should return data from pokemonfetcher", async () => {
    const fakePokemonFetcher = new FakePokemonFetcher([expectedAPIresult])
    const pokemonService = new PokemonService(fakePokemonFetcher)

    const myTeam: PokemonAPIResult[] = await pokemonService.getPokemon()
    expect(myTeam).toEqual([expectedAPIresult])
  })
})
