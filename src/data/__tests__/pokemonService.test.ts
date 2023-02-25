import { Pokemon } from "../../model/pokemon/pokemon"
import { PokeAPI, PokemonAPIResult } from "../pokemonFetcher"
import { PokemonService } from "../pokemonService"

export class FakePokemonFetcher implements PokeAPI {
  public async get(): Promise<PokemonAPIResult[]> {
    return []
  }
}

describe("PokemonService", () => {
  it("should call the PokeAPI passed in", () => {
    const fakePokemonFetcher = new FakePokemonFetcher()
    const pokemonService = new PokemonService(fakePokemonFetcher)

    const myTeam: Pokemon[] = pokemonService.getPokemon()

    expect(myTeam).toEqual([])
  })
})
