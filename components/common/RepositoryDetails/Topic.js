import React from 'react'
import { ScrollView, Text, View } from 'react-native'
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
                props.navigation.navigate({
                  routeName: 'Search',
                  params: { topic }
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
