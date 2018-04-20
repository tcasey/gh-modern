import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import followers from '../followers.query'
import Loading from '../../../common/Loading'
import UserList from '../../../common/UserList'

function propsToVariables (props) {
  const last = get(props, 'navigation.state.params.followers')
  const login = get(props, 'navigation.state.params.login')

  return {
    login,
    last
  }
}

function skipQuery (props) {
  const last = get(props, 'navigation.state.params.followers')
  const login = get(props, 'navigation.state.params.login')

  return !last || !login
}

class Followers extends Component {
  static navigationOptions () {
    return {
      title: 'Followers'
    }
  }
  render () {
    const { navigation } = this.props

    return (
      <Query
        query={followers}
        variables={propsToVariables(this.props)}
        skip={skipQuery(this.props)}
      >
        {({ loading, error, data }) => {
          const followers = get(data, 'user.followers.nodes')

          if (loading) return <Loading />
          if (error) return <Text>Error :(</Text>

          return (
            <ScrollView>
              <UserList
                data={followers}
                type='followers'
                navigation={navigation}
              />
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

export default withNavigation(Followers)
