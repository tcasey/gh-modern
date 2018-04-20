import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import GHModern from './components/routes'
import client from './services/GraphQL'
import Error from './components/common/Error'

if (console) {
  console.disableYellowBox = true
}

export default class App extends Component {
  render () {
    return (
      <Error>
        <ApolloProvider client={client}>
          <GHModern />
        </ApolloProvider>
      </Error>
    )
  }
}
