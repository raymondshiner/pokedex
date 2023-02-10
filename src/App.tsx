import React from "react"
import { PokemonList } from "./components/PokemonList/PokemonList"
import { getPokemon } from "./data/getPokemon"

const App = () => {
  const pokemon = getPokemon()

  return (
    <>
      <div>Pokedex Application</div>
      <PokemonList pokemonList={pokemon} />
    </>
  )
}

export default App
