import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { List, ListItem } from '@vivintsolar-oss/native-vs-list'
import { RightChevron } from '@vivintsolar-oss/native-vs-icons'
import { Color } from '../../../constants'
import styles from './style'

export default function Section (props) {
  const { title, listItems } = props

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title && title.toUpperCase()}</Text>
      <List>
        {listItems.map((item, i) => {
          return (
            <ListItem
              itemStyle={styles.itemStyle}
              rightIcon={() => {
                return (
                  <RightChevron color={Color.PRIMARY} height={16} width={16} />
                )
              }}
              key={i}
              {...item}
            />
          )
        })}
      </List>
    </View>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  listItems: PropTypes.array.isRequired
}
