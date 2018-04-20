import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { List, ListItem } from '@vivintsolar-oss/native-vs-list'
import get from 'lodash.get'
import styles from './style'

function label (item) {
  const primaryLanguage = get(item, 'primaryLanguage.name')
  const languageColor = get(item, 'primaryLanguage.color')
  const stars = get(item, 'stargazers.totalCount')

  return (
    <View>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{item.name}</Text>
        {item.isPrivate && (
          <Ionicons name='ios-lock' size={16} style={styles.icon} />
        )}
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.row}>
        <View style={styles.row}>
          <Ionicons name='ios-star' size={16} style={styles.icon} />
          <Text style={styles.gap}>{stars}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name='ios-git-network' size={16} style={styles.icon} />
          <Text style={styles.gap}>{item.forkCount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.language, { color: languageColor }]}>
            {primaryLanguage}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default function RepoList (props) {
  const { data, navigation } = props

  if (!data) {
    return null
  }

  return (
    <View>
      <List>
        {data.map((item, i) => {
          const owner = get(item, 'owner.login')

          return (
            <ListItem
              key={i}
              renderLabel={() => {
                return label(item)
              }}
              itemStyle={styles.itemStyle}
              itemHeight={72}
              leftIcon={null}
              rightIcon={null}
              onPress={() => {
                navigation.navigate('Repository', {
                  name: item.name,
                  title: item.name,
                  owner
                })
              }}
            />
          )
        })}
      </List>
    </View>
  )
}

RepoList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object
}
