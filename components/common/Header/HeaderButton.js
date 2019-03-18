import * as React from 'react'
import { AntDesign } from '@expo/vector-icons'
// import VSSvg from '@vivintsolar-oss/native-vs-icons'
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons'
import { Color } from '../../../constants'

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={AntDesign}
    iconSize={23}
    color={Color.WHITE}
  />
)

export const CustomHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={CustomHeaderButton}
      OverflowIcon={
        <AntDesign name="ellipsis1" size={23} color={Color.WHITE} />
      }
      {...props}
    />
  )
}
export const Item = HeaderButtons.Item
