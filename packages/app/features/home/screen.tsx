import {
  ListItem,
  YStack,
} from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

const TransitionListItem = ({to, children}) => {
  const linkProps = useLink({
    href: `/${to}`,
  })

  return (
    <ListItem
      iconAfter={<ChevronRight/>}
      {...linkProps}
    >
      {children}
    </ListItem>
  )
}
export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <TransitionListItem to='default'>標準のトランジション</TransitionListItem>
      <TransitionListItem to='faster'>高速化したトランジション</TransitionListItem>
    </YStack>
  )
}

