import React, { Component } from 'react'
import { View, Alert, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { List, ListItem } from '@vivintsolar-oss/native-vs-list'
import { RightChevron } from '@vivintsolar-oss/native-vs-icons'
import styles from './styles'
import { Color } from '../../../constants'
import { logout } from '../../../services'

function renderIcon () {
  return <RightChevron color={Color.PRIMARY} height={16} width={16} />
}
class Settings extends Component {
  static navigationOptions () {
    return {
      title: 'Settings'
    }
  }
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state = {}
  }
  async logout () {
    await logout()
    const reRoute = await this.props.navigation.navigate('Account')

    return reRoute
  }
  render () {
    const settingsList = [
      {
        label: 'Account Settings',
        onPress: () => {
          Alert.alert('Account Settings are coming soon...')
        }
      },
      {
        label: 'Notifications',
        onPress: () => {
          Alert.alert('Notification Settings are coming soon...')
        },
        type: 'lastItem'
      }
    ]
    const helpList = [
      {
        label: 'Invite friends',
        onPress: () => {
          Alert.alert('Invite friends links are coming soon...')
        }
      },
      {
        label: 'Get Help',
        onPress: () => {
          Alert.alert('Get Help descriptions are coming soon...')
        }
      },
      {
        label: 'Give us feedback',
        onPress: () => {
          Alert.alert('Feedback page is coming soon...')
        },
        type: 'lastItem'
      }
    ]
    const destructiveList = [
      {
        renderLabel: () => {
          return <Text>Log Out</Text>
        },
        onPress: () => {
          Alert.alert(
            'Logging Out',
            'Are you sure?',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Log Out', onPress: this.logout }
            ],
            { cancelable: true }
          )
        },
        rightIcon: null,
        leftIcon: null
      }
    ]
    return (
      <View style={styles.container}>
        <View style={styles.spacing}>
          <List containerStyle={styles.controls}>
            {settingsList.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  rightIcon={renderIcon}
                  rightIconStyle={styles.icon}
                  {...item}
                />
              )
            })}
          </List>
        </View>
        <View style={styles.spacing}>
          <List containerStyle={styles.controls}>
            {helpList.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  rightIcon={renderIcon}
                  rightIconStyle={styles.icon}
                  {...item}
                />
              )
            })}
          </List>
        </View>
        <View style={styles.spacing}>
          <List containerStyle={styles.controls}>
            {destructiveList.map((item, i) => {
              return <ListItem key={i} {...item} />
            })}
          </List>
        </View>
      </View>
    )
  }
}

export default withNavigation(Settings)
