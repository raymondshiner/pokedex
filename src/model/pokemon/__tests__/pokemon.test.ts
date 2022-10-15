import { Pokemon } from "../pokemon"
import { PokemonType } from "../pokemonTypes"

describe("Pokemon Object", () => {
  it.each(["Bulbasaur", "Charmander", "Squirtle"])(
    "should always have the name defined",
    (pokemonName: string) => {
      const pokemon = new Pokemon(pokemonName, 1, PokemonType.Normal)
      expect(pokemon.name).toEqual(pokemonName)
    }
  )

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the primary type defined",
    (expectedPrimaryType: PokemonType) => {
      const pokemon = new Pokemon("Ditto", 1, expectedPrimaryType)
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

  it("should only allow pokemon numbers between 1 and 905", () => {
    const expectedErrorMessage = "pokemon number must be between 1 and 905"
    const createPokemonWithTooLowNumber = () => {
      new Pokemon("Ditto", 0, PokemonType.Normal)
    }

    const createPokemonWithTooHighNumber = () => {
      new Pokemon("Ditto", 906, PokemonType.Normal)
    }

    expect(createPokemonWithTooLowNumber).toThrow(expectedErrorMessage)
    expect(createPokemonWithTooHighNumber).toThrow(expectedErrorMessage)
  })

  it("should have no secondary Type by default", () => {
    const pokemon = new Pokemon("Bulbasaur", 1, PokemonType.Grass)
    expect(pokemon.secondaryType).toBe(undefined)
  })

  it("should have a pokemon", () => {})

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the secondary Type defined",
    (expectedSecondaryType: PokemonType) => {
      const pokemon = new Pokemon(
        "Bulbasaur",
        1,
        PokemonType.Normal,
        expectedSecondaryType
      )

      expect(pokemon.secondaryType).toBe(expectedSecondaryType)
    }
  )
})
