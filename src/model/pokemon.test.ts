import { Pokemon } from "./pokemon"
import { PokemonType } from "./pokemonTypes"

describe("Pokemon Object", () => {
  it.each(["Bulbasaur", "Charmander", "Squirtle"])(
    "should always have the name defined",
    (pokemonName: string) => {
      const pokemon = new Pokemon(pokemonName, PokemonType.Normal)
      expect(pokemon.name).toEqual(pokemonName)
    }
  )

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the primary type defined",
    (expectedPrimaryType: PokemonType) => {
      const pokemon = new Pokemon("Ditto", expectedPrimaryType)
      expect(pokemon.primaryType).toEqual(expectedPrimaryType)
    }
  )
})
