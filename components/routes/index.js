import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
// import Account from './account'
import App from './appScreens'
import { ghAuthorize, secureGet } from '../../services'

class Account extends Component {
  async componentDidMount () {
    const accessToken = await secureGet('access_token', null)
    if (accessToken) {
      this.props.navigation.navigate('App')
    }
  }

  async authenticate () {
    try {
      await ghAuthorize()

      return this.props.navigation.navigate('App')
    } catch (err) {
      console.error(err)
    }
  }
  render () {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
        }}
      >
        <TouchableOpacity onPress={() => this.authenticate()}>
          <Text>Authenticate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default createSwitchNavigator(
  {
    Account,
    App
  },
  {
    initialRouteName: 'Account'
  }
)
