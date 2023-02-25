import { PokemonFetcher, ExpectedJSON } from "../pokemonFetcher"

const mockResult: ExpectedJSON = {
  name: "Pikachu",
  url: "https://pokeapi.co/api/v2/pokemon/25/",
}

describe("PokemonFetcher", () => {
  beforeEach(() => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockResult) })
        ) as jest.Mock
      )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("gets pokemon urls", async () => {
    const pokemonFetcher = new PokemonFetcher()
    const result = await pokemonFetcher.get()
    expect(result).toEqual(mockResult)
  })
})
