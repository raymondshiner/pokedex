import React from "react"
import { Pokemon } from "../model/pokemon/pokemon"

export const PokemonListItem = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props

  return (
    <>
      <div>{pokemon.name}</div>
      <div>{pokemon.number}</div>
      <div>{pokemon.primaryType}</div>
      <div>{pokemon.secondaryType}</div>
      <img alt={pokemon.name} src={pokemon.imageUrl} />
    </>
  )
}
