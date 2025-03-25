import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TAB_BAR_HEIGHT } from '@/constants/Sizes';

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const insets = useSafeAreaInsets();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
						height: TAB_BAR_HEIGHT + insets.bottom,
					},
					android: {
						height: TAB_BAR_HEIGHT + insets.bottom,
					},
					default: {
					},
				}),
			}}>
			<Tabs.Screen
				name="(home)"
				options={{
					title: 'Home',
					tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color}/>,
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: 'Explore',
					tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color}/>,
				}}
			/>
		</Tabs>
	);
}
