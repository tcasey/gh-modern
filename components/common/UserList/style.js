import { StyleSheet } from 'react-native'
import { Layout } from '../../../constants'

const styles = StyleSheet.create({
  itemStyle: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: Layout.EDGE_PADDING
  }
})

export default styles
