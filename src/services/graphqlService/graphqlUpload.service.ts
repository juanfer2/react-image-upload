import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import {env} from '../../contants/api.constant'

const link = createUploadLink({ uri: env.apiUrlGraphql })

const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default Client