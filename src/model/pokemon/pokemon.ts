import { PokemonType } from "./pokemonTypes"

export class Pokemon {
  private _name: string
  private _number: number
  private _imageUrl: string
  private _primaryType: PokemonType
  private _secondaryType: PokemonType | undefined

  constructor(
    name: string,
    number: number,
    imageUrl: string,
    primaryType: PokemonType,
    secondaryType?: PokemonType
  ) {
    if (number < 1 || number > 905) {
      throw "pokemon number must be between 1 and 905"
    }

    this._name = name
    this._number = number
    this._imageUrl = imageUrl
    this._primaryType = primaryType
    this._secondaryType = secondaryType
  }

  public get name() {
    return this._name
  }

  public get number() {
    return this._number
  }

  public get imageUrl() {
    return this._imageUrl
  }

  public get primaryType() {
    return this._primaryType
  }

  public get secondaryType() {
    return this._secondaryType
  }
}
