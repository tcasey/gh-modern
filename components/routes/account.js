import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { ghAuthorize, secureGet } from '../../services'
import CustomButton from '../common/Button'
import { Color, Layout } from '../../constants'

class Account extends Component {
  async componentDidMount() {
    const accessToken = await secureGet('access_token', null)
    if (accessToken) {
      // this.props.navigation.navigate('App')
    }
  }

  async authenticate() {
    try {
      await ghAuthorize()

      return this.props.navigation.navigate('App')
    } catch (err) {
      // TODO: handle error/cancel state
      console.log(err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome to Github Modern</Text>
          <Text style={styles.text}>
            The only github client you'll ever need
          </Text>
        </View>
        <CustomButton onPress={() => this.authenticate()} text="Sign In" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: Layout.EDGE_PADDING * 2,
    backgroundColor: Color.BACKGROUND,
  },
  title: {
    textAlign: 'center',
    fontSize: Layout.TITLE,
    paddingBottom: 80,
  },
  text: {
    textAlign: 'center',
  },
})

export default withNavigation(Account)
