import { Pokemon } from "./pokemon"
import { PokemonType } from "./pokemonTypes"

describe("Pokemon Object", () => {
  it.each(["Bulbasaur", "Charmander", "Squirtle"])(
    "should always have the name defined",
    (pokemonName: string) => {
      const pokemon = new Pokemon(pokemonName, 0, PokemonType.Normal)
      expect(pokemon.name).toEqual(pokemonName)
    }
  )

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the primary type defined",
    (expectedPrimaryType: PokemonType) => {
      const pokemon = new Pokemon("Ditto", 0, expectedPrimaryType)
      expect(pokemon.primaryType).toEqual(expectedPrimaryType)
    }
  )

  it.each([1, 2, 3])(
    "should always have the number defined",
    (expectedNumber: number) => {
      const pokemon = new Pokemon("Ditto", expectedNumber, PokemonType.Normal)
      expect(pokemon.number).toEqual(expectedNumber)
    }
  )

  it("should have no secondary Type by default", () => {
    const pokemon = new Pokemon("Bulbasaur", 0, PokemonType.Grass)
    expect(pokemon.secondaryType).toBe(undefined)
  })

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the secondary Type defined",
    (expectedSecondaryType: PokemonType) => {
      const pokemon = new Pokemon(
        "Bulbasaur",
        0,
        PokemonType.Normal,
        expectedSecondaryType
      )

      expect(pokemon.secondaryType).toBe(expectedSecondaryType)
    }
  )
})
