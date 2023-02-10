import { Pokemon } from "../model/pokemon/pokemon"
import { PokemonType } from "../model/pokemon/pokemonTypes"

const pokemonTeam: Pokemon[] = [
  new Pokemon(
    "Luxray",
    405,
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png",
    PokemonType.Electric
  ),
  new Pokemon(
    "Lucario",
    448,
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    PokemonType.Fighting,
    PokemonType.Steel
  ),
  new Pokemon(
    "Venasaur",
    3,
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    PokemonType.Grass,
    PokemonType.Poison
  ),
  new Pokemon(
    "Typhlosion",
    157,
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
    PokemonType.Fire
  ),
  new Pokemon(
    "Swampert",
    260,
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
    PokemonType.Water,
    PokemonType.Ground
  ),
  new Pokemon(
    "Honchkrow",
    430,
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png",
    PokemonType.Dark,
    PokemonType.Flying
  ),
]

export const getPokemon = () => {
  return pokemonTeam
}
