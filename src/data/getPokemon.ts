import { Pokemon } from "../model/pokemon/pokemon"
import { PokemonType } from "../model/pokemon/pokemonTypes"

const pokemonTeam: Pokemon[] = [
  new Pokemon({
    name: "Luxray",
    number: 405,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png",
    primaryType: PokemonType.Electric,
  }),
  new Pokemon({
    name: "Lucario",
    number: 448,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    primaryType: PokemonType.Fighting,
    secondaryType: PokemonType.Steel,
  }),
  new Pokemon({
    name: "Venasaur",
    number: 3,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    primaryType: PokemonType.Grass,
    secondaryType: PokemonType.Poison,
  }),
  new Pokemon({
    name: "Typhlosion",
    number: 157,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
    primaryType: PokemonType.Fire,
  }),
  new Pokemon({
    name: "Swampert",
    number: 260,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
    primaryType: PokemonType.Water,
    secondaryType: PokemonType.Ground,
  }),
  new Pokemon({
    name: "Honchkrow",
    number: 430,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png",
    primaryType: PokemonType.Dark,
    secondaryType: PokemonType.Flying,
  }),
]

export const getPokemon = () => {
  return pokemonTeam
}
