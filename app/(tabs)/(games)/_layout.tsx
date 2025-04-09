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
					title: 'Games'
				}}
			/>
			<Stack.Screen
				name="game_details"
				options={{
					title: 'Game Details',
				}}
			/>
		</Stack>
	);
}
