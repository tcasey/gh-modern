import { StyleSheet } from 'react-native'
import { Color, Layout } from '../../../constants'

const styles = StyleSheet.create({
  itemStyle: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  name: {
    fontSize: Layout.TEXT
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: Layout.EDGE_PADDING
  },
  icon: {
    color: Color.DEFAULT,
    paddingLeft: Layout.ICON_GAP * 2
  },
  nameWrapper: {
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row'
  },
  gap: {
    paddingLeft: Layout.ICON_GAP
  },
  description: {
    fontSize: Layout.SPAN,
    color: Color.DEFAULT
  },
  language: {
    flexDirection: 'row',
    paddingLeft: Layout.ICON_GAP
  }
})

export default styles
