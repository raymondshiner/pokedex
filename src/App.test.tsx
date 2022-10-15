import { render, screen } from "@testing-library/react"
import React from "react"
import App from "./App"

describe("Pokedex Application", () => {
  it("displays a title", () => {
    render(<App />)
    screen.getByText("Pokedex Application")
  })
})
