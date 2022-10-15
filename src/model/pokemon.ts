export class Pokemon {
  private _name: string
  constructor(pokemonName: string) {
    this._name = pokemonName
  }

  public get name() {
    return this._name
  }
}
