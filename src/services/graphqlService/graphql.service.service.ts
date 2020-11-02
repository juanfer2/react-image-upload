import ApolloClient, { InMemoryCache,   } from 'apollo-boost';
import {isEmpty} from 'lodash'
import {env} from '../../contants/api.constant'

const Client: any = new ApolloClient({
  uri: env.apiUrlGraphql,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
})

if (!isEmpty(localStorage.getItem('token'))) {
  Client.headers = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  }
}

export default Client