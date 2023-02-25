import { render, screen } from "@testing-library/react"
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
      new Pokemon({
        name: `pokemon-${i + 1}`,
        number: i + 1,
        imageUrl: `/path-${1}`,
        primaryType: PokemonType.Normal,
        secondaryType: i % 2 === 0 ? PokemonType.Dark : undefined,
      })
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
