import { StyleSheet } from 'react-native'
import { Color, Layout } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    width: '100%',
    marginTop: Layout.EDGE_PADDING
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND_ACCENT,
    // padding: Layout.EDGE_PADDING,
    height: 120,
    position: 'relative'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: Layout.ICON_GAP,
    marginBottom: Layout.EDGE_PADDING,
    position: 'absolute',
    top: 48,
    backgroundColor: Color.WHITE
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    top: 160
  },
  textWrapper: {
    justifyContent: 'space-around',
    paddingHorizontal: Layout.EDGE_PADDING
  },
  textWhite: {
    color: Color.WHITE
  },
  smallText: {
    fontSize: Layout.SPAN,
    textAlign: 'center'
  },
  lightText: {
    color: Color.DEFAULT,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomLinks: {
    marginTop: Layout.EDGE_PADDING * 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  bio: {
    marginTop: Layout.EDGE_PADDING,
    textAlign: 'center'
  },
  title: {
    fontSize: Layout.HEADER,
    color: Color.BLACK,
    backgroundColor: Color.WHITE,
    padding: Layout.EDGE_PADDING,
    textAlign: 'center'
  },
  itemStyle: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  icon: {
    color: Color.DEFAULT,
    paddingRight: Layout.ICON_GAP * 2
  }
})

export default styles
