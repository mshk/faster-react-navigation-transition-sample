import { HeavyScreen } from 'app/features/heavy/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Heavy Page',
        }}
      />
      <HeavyScreen />
    </>
  )
}
