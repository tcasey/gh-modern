import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import repositories from '../repositories.query'
import Loading from '../../../common/Loading'
import RepoList from '../../../common/RepoList'

function propsToVariables (props) {
  const last = get(props, 'navigation.state.params.repositories')
  const login = get(props, 'navigation.state.params.login')

  return {
    login,
    last,
    orderBy: {
      direction: 'DESC',
      field: 'UPDATED_AT'
    }
  }
}

function skipQuery (props) {
  const last = get(props, 'navigation.state.params.repositories')
  const login = get(props, 'navigation.state.params.login')

  return !last || !login
}

class Repositories extends Component {
  static navigationOptions () {
    return {
      title: 'Repositories'
    }
  }
  render () {
    const { navigation } = this.props
    return (
      <Query
        query={repositories}
        variables={propsToVariables(this.props)}
        skip={skipQuery(this.props)}
      >
        {({ loading, error, data }) => {
          const repositories = get(data, 'user.repositories.nodes')

          if (loading) return <Loading />
          if (error) return <Text>Error :(</Text>

          return (
            <ScrollView>
              <RepoList
                data={repositories}
                type='repositories'
                navigation={navigation}
              />
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

export default withNavigation(Repositories)
