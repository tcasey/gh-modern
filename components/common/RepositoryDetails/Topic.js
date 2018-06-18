import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import get from 'lodash.get'
import styles from './style'

export default function Topic (props) {
  return (
    <ScrollView horizontal style={styles.topicContainer}>
      {props.data.map((item, i) => {
        const topic = get(item, 'topic.name')

        return (
          <View key={i} style={styles.topicWrapper}>
            <Touchable
              onPress={() => {
                props.navigation.navigate('Search', {
                  search: topic
                })
              }}
            >
              <Text style={styles.topicText}>{topic}</Text>
            </Touchable>
          </View>
        )
      })}
    </ScrollView>
  )
}
