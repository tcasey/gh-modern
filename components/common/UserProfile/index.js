import React, { Component } from 'react'
import { Alert, Image, Linking, Platform, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import Ionicons from '@expo/vector-icons/Ionicons'
import MetricLabel from '../MetricLabel'
import Section from './Section'
import styles from './style'

function openMap (location) {
  if (location) {
    let mapUrl =
      Platform.OS === 'ios'
        ? 'http://maps.apple.com/?q='
        : 'https://www.google.com/maps/place/'

    return Linking.openURL(mapUrl + location.split(' ').join('+'))
  }

  return Alert.alert('No Location')
}

export default class UserProfile extends Component {
  navigate (route, param) {
    this.props.navigation.navigate(route, {
      ...param
    })
  }
  render () {
    const { user } = this.props
    const followers = get(user, 'followers.totalCount')
    const following = get(user, 'following.totalCount')
    const repositories = get(user, 'repositories.totalCount')
    const stars = get(user, 'starredRepositories.totalCount')
    const infoList = [
      {
        leftIcon: null,
        renderLabel: () => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name='ios-people' size={26} style={styles.icon} />
              <View>
                <Text>Company</Text>
                <Text style={[styles.smallText, styles.lightText]}>
                  {user.company}
                </Text>
              </View>
            </View>
          )
        }
      },
      {
        leftIcon: null,
        renderLabel: () => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name='ios-map' size={26} style={styles.icon} />
              <View>
                <Text>Location</Text>
                <Text style={[styles.smallText, styles.lightText]}>
                  {user.location}
                </Text>
              </View>
            </View>
          )
        },
        onPress: () => {
          openMap(user.location)
        }
      },
      {
        leftIcon: null,
        renderLabel: () => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name='ios-mail' size={26} style={styles.icon} />
              <View>
                <Text>Email</Text>
                <Text style={[styles.smallText, styles.lightText]}>
                  {user.email}
                </Text>
              </View>
            </View>
          )
        },
        onPress: () => {
          Linking.openURL(`mailto:${user.email}`)
        }
      },
      {
        leftIcon: null,
        renderLabel: () => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name='ios-link' size={26} style={styles.icon} />
              <View>
                <Text>Website</Text>
                <Text style={[styles.smallText, styles.lightText]}>
                  {user.websiteUrl}
                </Text>
              </View>
            </View>
          )
        },
        onPress: () => {
          Linking.openURL(user.websiteUrl)
        }
      }
    ]
    // let orgList = []

    if (!user) {
      return <Text>Error 🖖🏼</Text>
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: user.avatarUrl }} />
          <View style={styles.textContainer}>
            <View style={styles.textWrapper}>
              <Text style={[styles.bold]}>{user.name}</Text>
              <Text style={[styles.smallText, styles.handle]}>
                @{user.login}
              </Text>
              <Text style={[styles.bio]}>{user.bio}</Text>
              <View style={styles.bottomLinks}>
                <MetricLabel
                  metric={repositories}
                  label='Repositories'
                  onPress={() => {
                    this.navigate('Repositories', {
                      repositories,
                      login: user.login
                    })
                  }}
                />
                <MetricLabel
                  metric={stars}
                  label='Stars'
                  onPress={() => {
                    this.navigate('Stars', { stars, login: user.login })
                  }}
                />
                <MetricLabel
                  metric={followers}
                  label='Followers'
                  onPress={() => {
                    this.navigate('Followers', { followers, login: user.login })
                  }}
                />
                <MetricLabel
                  metric={following}
                  label='Following'
                  onPress={() => {
                    this.navigate('Following', { following, login: user.login })
                  }}
                />
              </View>
            </View>
            <Section title='Info' listItems={infoList} />
          </View>
        </View>
      </View>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object
}
