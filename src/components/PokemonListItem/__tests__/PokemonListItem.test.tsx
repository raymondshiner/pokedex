import { render, screen } from "@testing-library/react"
import React from "react"
import { Pokemon } from "../../../model/pokemon/pokemon"
import { PokemonType } from "../../../model/pokemon/pokemonTypes"
import { PokemonListItem } from "../PokemonListItem"

describe("PokemonListItem", () => {
  const defaultPokmeon = new Pokemon(
    "ditto",
    1,
    "assets/pokemon.png",
    PokemonType.Normal
  )

  const getByTextCaseInsensitive = (value: string) => {
    const expectedSecondaryType = new RegExp(value, "i")
    screen.getByText(expectedSecondaryType)
  }

  const renderDefaultPokemon = () =>
    render(<PokemonListItem pokemon={defaultPokmeon} />)

  it("should render the pokemon name", () => {
    renderDefaultPokemon()
    getByTextCaseInsensitive(defaultPokmeon.name)
  })

  describe("Pokemon Numbers", () => {
    const renderPokemonWithNumber = (number: number) => {
      const pokemon = new Pokemon("ditto", number, "/path", PokemonType.Normal)

      render(<PokemonListItem pokemon={pokemon} />)
    }

    it("should render provided single digit pokemon numbers as #00X", () => {
      renderPokemonWithNumber(1)
      screen.getByText(`#001`)
    })

    it("should render provided double digit pokemon numbers as #0XX", () => {
      renderPokemonWithNumber(11)
      screen.getByText(`#011`)
    })

    it("should render provided triple digit pokemon numbers as #XXX", () => {
      renderPokemonWithNumber(111)
      screen.getByText(`#111`)
    })
  })

  it("should render the pokemon primary type", () => {
    renderDefaultPokemon()
    getByTextCaseInsensitive(defaultPokmeon.primaryType)
  })

  it("should render the pokemon secondary type if present", () => {
    const secondaryType = PokemonType.Dark
    const expectedSecondaryType = new RegExp(secondaryType, "i")

    const oneTypePokemon = defaultPokmeon
    const twoTypePokemon = new Pokemon(
      "bulbasaur",
      1,
      "/path",
      PokemonType.Bug,
      secondaryType
    )

    const { rerender } = render(<PokemonListItem pokemon={oneTypePokemon} />)
    expect(screen.queryByText(expectedSecondaryType)).toBeNull()

    rerender(<PokemonListItem pokemon={twoTypePokemon} />)
    screen.getByText(expectedSecondaryType)
  })

  it("should render an image with the provided imageUrl as its src", () => {
    renderDefaultPokemon()

    const image = screen.getByAltText(defaultPokmeon.name)
    expect(image).toHaveAttribute("src", defaultPokmeon.imageUrl)
  })
})
