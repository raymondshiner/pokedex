import { render, screen } from "@testing-library/react"
import React from "react"
import { Pokemon } from "../../model/pokemon/pokemon"
import { PokemonType } from "../../model/pokemon/pokemonTypes"
import { PokemonListItem } from "../PokemonListItem"

describe("PokemonListItem", () => {
  const defaultPokmeon = new Pokemon(
    "ditto",
    1,
    "assets/pokemon.png",
    PokemonType.Normal
  )

  const renderDefaultPokemon = () =>
    render(<PokemonListItem pokemon={defaultPokmeon} />)

  it("should render the pokemon name", () => {
    renderDefaultPokemon()
    const expectedName = new RegExp(defaultPokmeon.name, "i")
    screen.getByText(expectedName)
  })

  it("should render the pokemon number", () => {
    renderDefaultPokemon()
    screen.getByText(defaultPokmeon.number)
  })

  it("should render the pokemon primary type", () => {
    renderDefaultPokemon()
    const expectedType = new RegExp(defaultPokmeon.primaryType, "i")
    screen.getByText(expectedType)
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
