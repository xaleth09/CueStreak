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
					title: 'Match Play',
				}}
			/>
			<Stack.Screen
				name="match_in_progress"
				options={{
					title: 'Match In Progress',
				}}
			/>
		</Stack>
	);
}
