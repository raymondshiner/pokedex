import { Pokemon } from "./pokemon"

describe("Pokemon Object", () => {
  it.each(["Bulbasaur", "Charmander", "Squirtle"])(
    "should always have a name",
    (pokemonName: string) => {
      const pokemon = new Pokemon(pokemonName)
      expect(pokemon.name).toEqual(pokemonName)
    }
  )
})
