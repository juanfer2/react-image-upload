import callFetch from '../configBase.service'

const BaseUrl = 'https://pokeapi.co/api/v2/'

export const getPokemons = async () => {
  try {
    const rsp = await callFetch({
      baseUrl: BaseUrl,
      url: 'pokemon?limit=1000',
      method: 'GET',
    })
    return rsp.data
  } catch (error) {
    return error
  }
}
