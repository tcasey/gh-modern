import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import get from 'lodash.get'
import user from '../user.query'
import Loading from '../../../common/Loading'
import UserProfile from '../../../common/UserProfile'

function propsToVariables (props) {
  const login = get(props, 'navigation.state.params.login')

  return {
    login
  }
}

export default class Profile extends Component {
  render () {
    const { params } = this.props.navigation.state

    return (
      <Query
        query={user}
        variables={params ? propsToVariables(this.props) : null}
      >
        {({ loading, error, data }) => {
          const user = get(data, 'user')

          if (loading) return <Loading />
          if (error) return <Text>Error :(</Text>

          return (
            <ScrollView>
              <UserProfile user={user} navigation={this.props.navigation} />
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

Profile.propTypes = {
  navigation: PropTypes.object
}
