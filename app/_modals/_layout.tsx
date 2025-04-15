import { Stack } from 'expo-router';
import React from 'react';

export default function ModalsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,

			}}
		>
			<Stack.Screen name="match_details"  options={{
				headerShown: false,
			}} />
		</Stack>
	);
}
