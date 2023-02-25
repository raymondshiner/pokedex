import { Pokemon } from "../model/pokemon/pokemon"
import { PokeAPI } from "./pokemonFetcher"

export class PokemonService {
  getPokemon(): Pokemon[] {
    return []
  }

  constructor(private pokeAPI: PokeAPI) {}
}
