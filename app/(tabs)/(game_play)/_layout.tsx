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
					title: 'Game Play',
				}}
			/>
			<Stack.Screen
				name="game_in_progress"
				options={{
					title: 'Game In Progress',
				}}
			/>
		</Stack>
	);
}
