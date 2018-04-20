import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import get from 'lodash.get'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './styles'
import { Color, Layout } from '../../../constants'

export default class SearchBar extends Component {
  render () {
    const onChange = get(this.props, 'onChange')

    return (
      <View>
        <TextInput
          placeholder='Search'
          placeholderTextColor={Color.DEFAULT}
          allowFontScaling={false}
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={query => {
            onChange(query)
          }}
          returnKeyType={'search'}
          enablesReturnKeyAutomatically
          fontSize={Layout.TEXT}
        />
        <Ionicons name='ios-search' size={26} style={styles.icon} />
      </View>
    )
  }
}
