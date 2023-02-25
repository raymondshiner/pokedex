import { PokemonType } from "./pokemonTypes"

export type PokemonData = {
  name: string
  number: number
  imageUrl: string
  primaryType: PokemonType
  secondaryType?: PokemonType
}

export class Pokemon {
  private _name: string
  private _number: number
  private _imageUrl: string
  private _primaryType: PokemonType
  private _secondaryType: PokemonType | undefined

  constructor({
    name,
    number,
    imageUrl,
    primaryType,
    secondaryType,
  }: PokemonData) {
    if (name === "") {
      //eslint-disable-next-line
      throw "pokemon name cannot be empty"
    }

    if (number < 1 || number > 905) {
      //eslint-disable-next-line
      throw "pokemon number must be between 1 and 905"
    }

    if (imageUrl === "") {
      //eslint-disable-next-line
      throw "pokemon imageUrl cannot be empty"
    }

    this._name = name
    this._number = number
    this._imageUrl = imageUrl || "assets/pokeball.png"
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
