import { ApolloClient } from "apollo-client"
import {InMemoryCache} from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from "cross-fetch"

export const client = new ApolloClient({
  link: new HttpLink({
    fetch: fetch,
    uri: 'https://coursek2020.herokuapp.com/v1/graphql', // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
});