import { Pokemon } from "../../model/pokemon/pokemon"
import { getPokemon } from "../getPokemon"

describe("getPokemon", () => {
  it("should return a list of pokemon", () => {
    const pokemon: Pokemon[] = getPokemon()
    expect(pokemon.length).toBeGreaterThanOrEqual(1)
  })
})
