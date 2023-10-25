import { HeavyScreen } from 'app/features/heavy/screen'
import { Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { Spinner, YStack } from 'tamagui'

export default function Screen() {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 0)
  }, [])

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Faster Page',
          animation: 'simple_push',
          animationDuration: 80,
        }}
      />
      {!isReady ? (
        <YStack f={1} jc="center" ai="center" p="$4" space>
            <Spinner size="large" color="$orange10" />
        </YStack>
      ) : (
        <HeavyScreen />
      )}
    </>
  )
}
