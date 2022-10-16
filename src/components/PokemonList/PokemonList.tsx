import React from "react"
import { Pokemon } from "../../model/pokemon/pokemon"
import { PokemonListItem } from "./PokemonListItem/PokemonListItem"
import styled from "styled-components"

export const PokemonList = (props: { pokemonList: Pokemon[] }) => {
  const { pokemonList } = props

  return (
    <Grid>
      {pokemonList.map((pokemon) => (
        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 25% 25%;
  gap: 1rem;
`
