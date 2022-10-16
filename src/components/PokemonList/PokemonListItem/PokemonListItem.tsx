import React from "react"
import { Pokemon } from "../../../model/pokemon/pokemon"

import styled from "styled-components"

export const PokemonListItem = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props
  const formattedNumber: string = formatPokemonNumber(pokemon.number)

  return (
    <ListItemWrapper>
      <Image alt={pokemon.name} src={pokemon.imageUrl} />
      <Stack>
        <SpaceBetween>
          <Name>{pokemon.name}</Name>
          <Number>{formattedNumber}</Number>
        </SpaceBetween>
        <Flexbox>
          <div>{pokemon.primaryType}</div>
          {pokemon.secondaryType && <div>/</div>}
          <div>{pokemon.secondaryType}</div>
        </Flexbox>
      </Stack>
    </ListItemWrapper>
  )
}

const Flexbox = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Stack = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
`

const SpaceBetween = styled(Flexbox)`
  align-items: center;
  justify-content: space-between;
`

const ListItemWrapper = styled(Flexbox)`
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
  background-color: white;
  border: 1px solid black;
  padding: 1rem;
`

const Image = styled.img`
  border-radius: 1rem;
  background-color: lightgray;
  box-shadow: 1px 1px 1px 1px darkgray;
  height: 10rem;
  width: 10rem;
`

const Name = styled.div`
  font-size: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
`
const Number = styled.div`
  font-size: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  color: grey;
`

const formatPokemonNumber = (number: number) => {
  const numberIsOneDigit = number < 10
  const numberIsTwoDigits = number < 100

  if (numberIsOneDigit) return "#00" + number
  if (numberIsTwoDigits) return "#0" + number
  return "#" + number
}
