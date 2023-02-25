import { Pokemon, PokemonData } from "../../model/pokemon/pokemon"
import { PokemonType } from "../../model/pokemon/pokemonTypes"
import { PokeAPI } from "../pokemonFetcher"
import { PokemonService } from "../pokemonService"

const bulbasaurMockData: PokemonData = {
  name: "Bulbasaur",
  number: 1,
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  primaryType: PokemonType.Grass,
  secondaryType: PokemonType.Poison,
}

export class FakePokemonFetcher implements PokeAPI {
  private results: string[] = []
  private pokemonDataResult: PokemonData = {
    name: "NONE",
    number: 0,
    imageUrl: "NONE",
    primaryType: PokemonType.Grass,
  }

  public async getAllNames(): Promise<string[]> {
    return this.results
  }

  public async setResults(results: string[]) {
    this.results = results
  }

  public async getPokemonData(name: string): Promise<PokemonData> {
    if (name === "Bulbasaur") return bulbasaurMockData
    return this.pokemonDataResult
  }

  public async setPokemonDataResult(result: PokemonData) {
    this.pokemonDataResult = result
  }
}

describe("PokemonService", () => {
  it("should return data from pokemonfetcher", async () => {
    const fakePokemonFetcher = new FakePokemonFetcher()
    fakePokemonFetcher.setResults(["Bulbasaur"])

    const pokemonService = new PokemonService(fakePokemonFetcher)

    const fetchedPokemon: Pokemon[] = await pokemonService.getAllPokemon()

    const bulbasaurPokemon = new Pokemon(bulbasaurMockData)

    expect(fetchedPokemon).toEqual([bulbasaurPokemon])
  })
})
