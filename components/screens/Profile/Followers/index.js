import React, { Component } from 'react'
import { Text, ScrollView, RefreshControl } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import followers from '../followers.query'
import Loading from '../../../common/Loading'
import UserList from '../../../common/UserList'

function propsToVariables(props) {
  // TODO: add pagination logic
  const number_of_followers = get(props, 'navigation.state.params.followers')
  const login = get(props, 'navigation.state.params.login')

  return {
    login,
    number_of_followers: 99,
  }
}

function skipQuery(props) {
  const number_of_followers = get(props, 'navigation.state.params.followers')
  const login = get(props, 'navigation.state.params.login')

  return !number_of_followers || !login
}

class Followers extends Component {
  static navigationOptions() {
    return {
      title: 'Followers',
    }
  }
  state = {
    refreshing: false,
  }
  onRefresh = () => {
    if (this.state.refreshing) {
      return
    }

    this.setState({ refreshing: true })
  }
  render() {
    const { navigation } = this.props

    return (
      <Query
        query={followers}
        variables={propsToVariables(this.props)}
        skip={skipQuery(this.props)}
      >
        {({ loading, error, data, refetch }) => {
          const { refreshing } = this.state
          const followers = get(data, 'user.followers.nodes')

          if (loading) return <Loading />
          if (error) return <Text>Error :(</Text>
          if (refreshing) {
            refetch().then(() => {
              this.setState({ refreshing: false })
            })
          }

          return (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
              }
            >
              <UserList
                data={followers}
                type="followers"
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
