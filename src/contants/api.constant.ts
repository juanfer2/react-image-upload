import { envApi } from '../interfaces/config/apiContant.interface'

export const env: envApi = {
  nodeEnv: process.env.NODE_ENV,
  publicUrl: process.env.PUBLIC_URL,
  enviroment: process.env.REACT_APP_ENVIROMENT,
  apiUrl: process.env.REACT_APP_API_URL,
  apiUrlGraphql: process.env.REACT_APP_API_GRAPHQL_URL,
}

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

export const GET_POKEMONS_START = 'GET_POKEMONS_START'
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
export const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR'
