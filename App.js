import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import GHModern from './components/routes'
import client from './services/GraphQL'
import CatchError from './components/common/CatchError'

if (console) {
  console.disableYellowBox = true
}

export default class App extends Component {
  render () {
    return (
      <CatchError>
        <ApolloProvider client={client}>
          <GHModern />
        </ApolloProvider>
      </CatchError>
    )
  }
}
