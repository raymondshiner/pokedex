import { Pokemon } from "../pokemon"
import { PokemonType } from "../pokemonTypes"

describe("Pokemon Object", () => {
  it.each(["Bulbasaur", "Charmander", "Squirtle"])(
    "should always have the name defined",
    (expectedName: string) => {
      const pokemon = new Pokemon(expectedName, 1, "/path", PokemonType.Normal)
      expect(pokemon.name).toEqual(expectedName)
    }
  )

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the primary type defined",
    (expectedPrimaryType: PokemonType) => {
      const pokemon = new Pokemon("Ditto", 1, "/path", expectedPrimaryType)
      expect(pokemon.primaryType).toEqual(expectedPrimaryType)
    }
  )

  it.each([1, 2, 3])(
    "should always have the number defined",
    (expectedNumber: number) => {
      const pokemon = new Pokemon(
        "Ditto",
        expectedNumber,
        "/path",
        PokemonType.Normal
      )
      expect(pokemon.number).toEqual(expectedNumber)
    }
  )

  it.each(["somepath/1", "somepath/2", "somepath/3"])(
    "should always have the imageURL defined",
    (expectedURL: string) => {
      const pokemon = new Pokemon("Ditto", 1, expectedURL, PokemonType.Normal)
      expect(pokemon.imageUrl).toEqual(expectedURL)
    }
  )

  it("should only allow non-empty imageUrls", () => {
    expect(() => {
      new Pokemon("Ditto", 1, "", PokemonType.Normal)
    }).toThrow("pokemon imageUrl cannot be empty")
  })

  it("should only allow pokemon numbers between 1 and 905", () => {
    const expectedErrorMessage = "pokemon number must be between 1 and 905"
    const createPokemonWithTooLowNumber = () => {
      new Pokemon("Ditto", 0, "/path", PokemonType.Normal)
    }

    const createPokemonWithTooHighNumber = () => {
      new Pokemon("Ditto", 906, "/path", PokemonType.Normal)
    }

    expect(createPokemonWithTooLowNumber).toThrow(expectedErrorMessage)
    expect(createPokemonWithTooHighNumber).toThrow(expectedErrorMessage)
  })

  it("should have no secondary Type by default", () => {
    const pokemon = new Pokemon("Bulbasaur", 1, "/path", PokemonType.Grass)
    expect(pokemon.secondaryType).toBe(undefined)
  })

  it("should have a pokemon", () => {})

  it.each([PokemonType.Grass, PokemonType.Fire, PokemonType.Water])(
    "should always have the secondary Type defined",
    (expectedSecondaryType: PokemonType) => {
      const pokemon = new Pokemon(
        "Bulbasaur",
        1,
        "/path",
        PokemonType.Normal,
        expectedSecondaryType
      )

      expect(pokemon.secondaryType).toBe(expectedSecondaryType)
    }
  )
})
