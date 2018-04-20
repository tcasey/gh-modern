import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import following from '../following.query'
import Loading from '../../../common/Loading'
import UserList from '../../../common/UserList'

function propsToVariables (props) {
  const last = get(props, 'navigation.state.params.following')
  const login = get(props, 'navigation.state.params.login')

  return {
    login,
    last
  }
}

function skipQuery (props) {
  const last = get(props, 'navigation.state.params.following')
  const login = get(props, 'navigation.state.params.login')

  return !last || !login
}

class Following extends Component {
  static navigationOptions () {
    return {
      title: 'Following'
    }
  }
  render () {
    const { navigation } = this.props
    return (
      <Query
        query={following}
        variables={propsToVariables(this.props)}
        skip={skipQuery(this.props)}
      >
        {({ loading, error, data }) => {
          const following = get(data, 'user.following.nodes')

          if (loading) return <Loading />
          if (error) return <Text>Error :(</Text>

          return (
            <ScrollView>
              <UserList
                data={following}
                type='following'
                navigation={navigation}
              />
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

export default withNavigation(Following)
