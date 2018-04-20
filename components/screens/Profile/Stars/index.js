import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import stars from '../stars.query'
import Loading from '../../../common/Loading'
import RepoList from '../../../common/RepoList'

function propsToVariables (props) {
  const last = get(props, 'navigation.state.params.stars')
  const login = get(props, 'navigation.state.params.login')

  return {
    login,
    last,
    orderBy: {
      direction: 'DESC',
      field: 'STARRED_AT'
    }
  }
}

function skipQuery (props) {
  const last = get(props, 'navigation.state.params.stars')
  const login = get(props, 'navigation.state.params.login')

  return !last || !login
}

class Stars extends Component {
  static navigationOptions () {
    return {
      title: 'Stars'
    }
  }
  render () {
    const { navigation } = this.props
    return (
      <Query
        query={stars}
        variables={propsToVariables(this.props)}
        skip={skipQuery(this.props)}
      >
        {({ loading, error, data }) => {
          const stars = get(data, 'user.starredRepositories.nodes')

          if (loading) return <Loading />
          if (error) return <Text>Error :(</Text>

          return (
            <ScrollView>
              <RepoList data={stars} type='stars' navigation={navigation} />
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

export default withNavigation(Stars)
