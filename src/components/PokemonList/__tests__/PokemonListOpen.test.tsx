import { render, screen } from "@testing-library/react"
import { Pokemon } from "../../../model/pokemon/pokemon"
import { PokemonType } from "../../../model/pokemon/pokemonTypes"
import { PokemonList } from "../PokemonList"

describe("PokemonList", () => {
  it("should render pokemon for a single pokemon list", () => {
    const pokemonA = new Pokemon({
      name: "Alpha",
      number: 12,
      imageUrl: "path/",
      primaryType: PokemonType.Bug,
    })
    const pokemonB = new Pokemon({
      name: "Beta",
      number: 145,
      imageUrl: "path2/",
      primaryType: PokemonType.Fire,
    })
    const testList = [pokemonA, pokemonB]

    render(<PokemonList pokemonList={testList} />)

    testList.forEach((pokemon) => {
      screen.getByText(pokemon.name)
      screen.getByText(pokemon.primaryType)
    })
  })
})
