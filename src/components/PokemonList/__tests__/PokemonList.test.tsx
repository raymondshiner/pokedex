import { render } from "@testing-library/react"
import { Pokemon } from "../../../model/pokemon/pokemon"
import { PokemonType } from "../../../model/pokemon/pokemonTypes"
import { PokemonList } from "../PokemonList"
import { PokemonListItem } from "../PokemonListItem/PokemonListItem"

jest.mock("../PokemonListItem/PokemonListItem", () => ({
  PokemonListItem: jest.fn(),
}))

const mockedPokemonListItem = jest.mocked(PokemonListItem)

const generateArrayOfTenPokemon = () => {
  return Array.from(
    { length: 10 },
    (_, i) =>
      new Pokemon(
        `pokemon-${i + 1}`,
        i + 1,
        `/path-${1}`,
        PokemonType.Normal,
        i % 2 === 0 ? PokemonType.Dark : undefined
      )
  )
}

describe("PokemonList", () => {
  const tenPokemonList = generateArrayOfTenPokemon()

  it("should render a pokemon list item for each pokemon passed in", () => {
    render(<PokemonList pokemonList={tenPokemonList} />)
    expect(mockedPokemonListItem).toHaveBeenCalledTimes(10)
    tenPokemonList.forEach((pokemon) => {
      expect(mockedPokemonListItem).toHaveBeenCalledWith(
        {
          pokemon: expect.objectContaining(pokemon),
        },
        {}
      )
    })
  })
})
