import {
  ListItem,
  YStack,
  Image
} from '@my/ui'
import React from 'react'

export const HeavyListItem = ({children}) => {
  return (
    <ListItem
      icon={<Image
        source={{ width: 200, height: 200, uri: require('../../../apps/expo/assets/favicon.png') }}
        width="100%"
        height="100%"
      />}
      pressStyle={{
        backgroundColor: 'blue'
      }}
    >
      {children}
    </ListItem>
  )
}