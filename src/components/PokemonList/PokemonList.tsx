import React from "react"
import { Pokemon } from "../../model/pokemon/pokemon"
import { PokemonListItem } from "./PokemonListItem/PokemonListItem"

export const PokemonList = (props: { pokemonList: Pokemon[] }) => {
  const { pokemonList } = props

  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  )
}
