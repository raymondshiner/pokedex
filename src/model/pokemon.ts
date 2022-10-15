import { PokemonType } from "./pokemonTypes"

export class Pokemon {
  private _name: string
  private _number: number
  private _primaryType: PokemonType
  private _secondaryType: PokemonType | undefined

  constructor(
    name: string,
    number: number,
    primaryType: PokemonType,
    secondaryType?: PokemonType
  ) {
    this._name = name
    this._number = number
    this._primaryType = primaryType
    this._secondaryType = secondaryType
  }

  public get name() {
    return this._name
  }

  public get number() {
    return this._number
  }

  public get primaryType() {
    return this._primaryType
  }

  public get secondaryType() {
    return this._secondaryType
  }
}
