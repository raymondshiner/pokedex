import { PokemonFetcher } from "../pokemonFetcher"

const expectedPokemonName = "pikachu"

describe("PokemonFetcher", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({ results: [{ name: expectedPokemonName }] }),
        })
      ) as jest.Mock
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("gets all pokemon names", async () => {
    const pokemonFetcher = new PokemonFetcher()
    const fetchedNames: string[] = await pokemonFetcher.getAllNames()
    expect(fetchedNames).toEqual([expectedPokemonName])
  })
})
