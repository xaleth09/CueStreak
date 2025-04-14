import { Tabs } from 'expo-router';
import React, { useMemo } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationState } from '@react-navigation/native';
import { ROUTES_WITHOUT_TAB_BAR, RoutesWithoutTabBar } from '@/app/_routesWithoutTabBar';
import { SIZES, TAB_BAR_HEIGHT } from '@/constants/design-tokens';

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const insets = useSafeAreaInsets();

	const activeNestedRouteName = useNavigationState((state) => {
		const tabRoute = state.routes[state.index];

		// Check for nested stack inside the tab
		const nestedState = tabRoute?.state;
		if(!nestedState || !('index' in nestedState)) return tabRoute.name;

		const nestedRoute = nestedState.index ? nestedState.routes[nestedState.index] : null;
		return nestedRoute?.name ?? tabRoute.name;
	});

	const shouldHideTabBar = useMemo(() => {
		return ROUTES_WITHOUT_TAB_BAR[activeNestedRouteName as RoutesWithoutTabBar];
	}, [activeNestedRouteName]);

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: shouldHideTabBar ? {
					display: 'none',
					height: 0,
				} : Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
						height: TAB_BAR_HEIGHT + insets.bottom,
					},
					android: {
						height: TAB_BAR_HEIGHT + insets.bottom,
					},
					default: {},
				}),
			}}>
			<Tabs.Screen
				name="(home)"
				options={{
					title: 'Home',
					tabBarIcon: ({color}) => <IconSymbol size={SIZES.LG.val} name="house.fill" color={color}/>,
				}}
			/>
			<Tabs.Screen
				name="(game_play)"
				options={{
					title: '',
					tabBarIcon: ({color}) => <IconSymbol size={SIZES.XXL.val} name="plus.circle.fill" color='royalblue'/>,
				}}
			/>
			<Tabs.Screen
				name="(games)"
				options={{
					title: 'Games',
					tabBarIcon: ({color}) => <IconSymbol size={SIZES.LG.val} name="calendar.badge.clock" color={color}/>,
				}}
			/>
		</Tabs>
	);
}
