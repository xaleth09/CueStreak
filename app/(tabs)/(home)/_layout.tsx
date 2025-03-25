import {Stack, Tabs} from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="(home)"

        options={{
          title: 'Home'
        }}
      />
    </Stack>
  );
}
