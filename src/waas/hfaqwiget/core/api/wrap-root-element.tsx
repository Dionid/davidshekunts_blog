import * as React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

export const withApolloProvider = (Component) => (props) => {
  return <ApolloProvider client={client}>
    <Component {...props}/>
  </ApolloProvider>
}
