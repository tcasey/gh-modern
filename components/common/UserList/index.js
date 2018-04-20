import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { List, ListItem } from '@vivintsolar-oss/native-vs-list'
import { RightChevron } from '@vivintsolar-oss/native-vs-icons'
import { Color } from '../../../constants'
import styles from './style'

export default function UserList (props) {
  const { data, navigation } = props

  return (
    <View>
      <List>
        {data.map((item, i) => {
          return (
            <ListItem
              key={i}
              label={item.login}
              itemStyle={styles.itemStyle}
              rightIcon={() => {
                return (
                  <RightChevron color={Color.PRIMARY} height={16} width={16} />
                )
              }}
              leftIcon={() => {
                return (
                  <Image
                    style={styles.image}
                    source={{ uri: item.avatarUrl }}
                  />
                )
              }}
              onPress={() => {
                navigation.navigate('OtherProfile', {
                  login: item.login,
                  title: item.login
                })
              }}
            />
          )
        })}
      </List>
    </View>
  )
}

UserList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object
}
