import React from "react"
import { Pokemon } from "../model/pokemon/pokemon"

export const PokemonListItem = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props
  const formattedNumber: string = formatPokemonNumber(pokemon.number)

  return (
    <>
      <div>{pokemon.name}</div>
      <div>{formattedNumber}</div>
      <div>{pokemon.primaryType}</div>
      <div>{pokemon.secondaryType}</div>
      <img alt={pokemon.name} src={pokemon.imageUrl} />
    </>
  )
}

const formatPokemonNumber = (number: number) => {
  const numberIsOneDigit = number < 10
  const numberIsTwoDigits = number < 100

  if (numberIsOneDigit) return "#00" + number
  if (numberIsTwoDigits) return "#0" + number
  return "#" + number
}
