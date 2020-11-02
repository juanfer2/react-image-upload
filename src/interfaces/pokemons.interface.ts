export type ActionPokemonType = {
  type: string
  payload?: any
}

export type PokemonState = {
  pokemons: string[] | null
  loandingPokemons: boolean
  errorPokemons: string | null
}
