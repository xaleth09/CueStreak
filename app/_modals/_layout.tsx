import { Stack } from 'expo-router';
import React from 'react';

export default function ModalsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,

			}}
		>
			<Stack.Screen name="game_details"  options={{
				headerShown: false,
			}} />
		</Stack>
	);
}
