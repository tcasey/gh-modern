import { StyleSheet } from 'react-native'
import { Color, Layout } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabContainer: {
    flexDirection: 'row'
  },
  tab: {
    width: Layout.window.width / 2,
    padding: Layout.EDGE_PADDING
  },
  tabText: {
    textAlign: 'center'
  },
  activeText: {
    color: Color.PRIMARY
  },
  selected: {
    borderBottomWidth: 4,
    borderBottomColor: Color.PRIMARY
  },
  unSelected: {
    borderBottomWidth: 4,
    borderBottomColor: 'transparent'
  }
})

export default styles
