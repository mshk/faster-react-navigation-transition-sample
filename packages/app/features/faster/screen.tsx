import { YStack } from '@my/ui'
import React from 'react'
import { useEffect, useState } from 'react'
import { HeavyListItem } from '@my/ui/src/HeavyListItem'

export function FasterScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      {Array.from({ length: 200 }).map((_, i) => (
        <HeavyListItem key={i}>ListItem-{`$i`}</HeavyListItem>
      ))}
    </YStack>
  )
}
