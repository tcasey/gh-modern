import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import repository from './repository.query'
import Loading from '../../common/Loading'
import RepositoryDetails from '../../common/RepositoryDetails'

function propsToVariables (props) {
  const owner = get(props, 'navigation.state.params.owner')
  const name = get(props, 'navigation.state.params.name')

  return {
    owner,
    name,
    first: 100
  }
}

// function skipQuery (props) {
//   const owner = get(props, 'data.repository.owner.login')
//   const name = get(props, 'navigation.state.params.name')

//   return !owner || !name
// }

export default class Repository extends Component {
  render () {
    const query = repository

    return (
      <Query
        query={query}
        variables={propsToVariables(this.props)}
        // skip={skipQuery(this.props)}
      >
        {({ loading, error, data }) => {
          const repository = get(data, 'repository')

          if (loading) return <Loading />
          if (error && !data) return <Text>Error :(</Text>

          return (
            <ScrollView>
              <RepositoryDetails
                data={repository}
                navigation={this.props.navigation}
              />
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

Repository.propTypes = {
  navigation: PropTypes.object
}
