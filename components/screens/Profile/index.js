import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import { SettingsFillIcon } from '@vivintsolar-oss/native-vs-icons'
import get from 'lodash.get'
import viewer from './viewer.query'
import Loading from '../../common/Loading'
import UserProfile from '../../common/UserProfile'
import { Color, Layout } from '../../../constants'

export default class Profile extends Component {
  static navigationOptions ({ navigation }) {
    return {
      title: 'Profile',
      headerRight: (
        <Touchable
          style={{ paddingHorizontal: Layout.EDGE_PADDING }}
          hitSlop={Layout.HIT_SLOP}
          onPress={() => {
            navigation.navigate('Settings')
          }}
        >
          <SettingsFillIcon width={16} height={16} color={Color.PRIMARY} />
        </Touchable>
      )
    }
  }
  render () {
    const query = viewer

    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          const user = get(data, 'viewer')

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
