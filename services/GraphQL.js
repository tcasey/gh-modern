import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { secureGet } from './index'

const GITHUB_URI = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_URI
})

const cache = new InMemoryCache({
  addTypename: true,
  cacheResolvers: {}
})

const middlewareLink = setContext(() => {
  return secureGet('access_token', '').then(userToken => {
    return {
      headers: {
        authorization: `Bearer ${userToken || null}`
      }
    }
  })
})

let link = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
  queryDeduplication: true
})

export default client
