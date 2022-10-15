import { PokemonType } from "./pokemonTypes"

export class Pokemon {
  private _name: string
  private _primaryType: PokemonType

  constructor(pokemonName: string, pokemonType: PokemonType) {
    this._name = pokemonName
    this._primaryType = pokemonType
  }

  public get name() {
    return this._name
  }

  public get primaryType() {
    return this._primaryType
  }
}
