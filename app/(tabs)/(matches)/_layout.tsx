import { Stack } from 'expo-router';
import React from 'react';

export default function GamesLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen
				name="index"
				options={{
					title: 'Matches'
				}}
			/>
		</Stack>
	);
}
