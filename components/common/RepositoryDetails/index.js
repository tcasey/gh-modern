import React, { Component } from 'react'
import { View, Text, Linking } from 'react-native'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import Markdown from 'react-native-simple-markdown'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import MetricLabel from '../MetricLabel'
import Section from './Section'
import Topic from './Topic'
import styles from './style'

export default class RepositoryDetails extends Component {
  navigate (route, param) {
    this.props.navigation.navigate(route, {
      ...param
    })
  }
  render () {
    const { data, navigation } = this.props
    const forks = get(data, 'forks.totalCount')
    const stargazers = get(data, 'stargazers.totalCount')
    const watchers = get(data, 'watchers.totalCount')
    const owner = get(data, 'owner.login')
    const license = get(data, 'licenseInfo.name')
    const language = get(data, 'primaryLanguage', {})
    const homePage = get(data, 'homepageUrl')
    const repositoryTopics = get(data, 'repositoryTopics.nodes')
    const README = get(data, 'object.text')

    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Touchable
            onPress={() => {
              navigation.navigate('OtherProfile', {
                login: owner,
                title: owner
              })
            }}
          >
            <Text style={[styles.bold, styles.owner]}>@{owner}</Text>
          </Touchable>
          {/* <Text style={[{ color: language.color }]}>{language.name}</Text> */}
          <View style={styles.textContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.description}>{data.description}</Text>
              {homePage && (
                <Touchable
                  onPress={() => {
                    Linking.openURL(homePage)
                  }}
                >
                  <Text style={styles.link}>Home Page</Text>
                </Touchable>
              )}
              <View style={styles.bottomLinks}>
                <MetricLabel
                  metric={forks}
                  label='Forks'
                  onPress={() => {
                    this.navigate('OtherProfile', {
                      login: owner
                    })
                  }}
                />
                <MetricLabel
                  metric={watchers}
                  label='Watchers'
                  onPress={() => {
                    this.navigate('OtherProfile', { login: owner })
                  }}
                />
                <MetricLabel
                  metric={stargazers}
                  label='Stars'
                  onPress={() => {
                    this.navigate('OtherProfile', { login: owner })
                  }}
                />
              </View>
            </View>
            {repositoryTopics.length ? (
              <Text style={styles.title}>Topics</Text>
            ) : null}
            <Topic data={repositoryTopics} navigation={this.props.navigation} />
            <Markdown
              errorHandler={(errors, children) => console.log(errors, children)}
              styles={{
                heading1: {
                  fontSize: 20,
                  textAlign: 'center'
                },
                strong: {
                  fontWeight: 'bold',
                  textAlign: 'center'
                }
              }}
            >
              {README}
            </Markdown>
          </View>
        </View>
      </View>
    )
  }
}
