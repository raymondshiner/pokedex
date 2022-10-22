import { render, screen } from "@testing-library/react"
import { Pokemon } from "../../../model/pokemon/pokemon"
import { PokemonType } from "../../../model/pokemon/pokemonTypes"
import { PokemonList } from "../PokemonList"

describe("PokemonList", () => {
  it("should render pokemon for a single pokemon list", () => {
    const pokemonA = new Pokemon("Alpha", 12, "path/", PokemonType.Bug)
    const pokemonB = new Pokemon("Beta", 145, "path2/", PokemonType.Fire)
    const testList = [pokemonA, pokemonB]

    render(<PokemonList pokemonList={testList} />)

    testList.forEach((pokemon) => {
      screen.getByText(pokemon.name)
      screen.getByText(pokemon.primaryType)
    })
  })
})
