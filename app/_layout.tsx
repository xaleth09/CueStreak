import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { KeyboardProvider } from 'react-native-keyboard-controller';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	// const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if(loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if(!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={DefaultTheme}>
			<KeyboardProvider>
				<Stack>
					<Stack.Screen name="(tabs)" options={{headerShown: false}}/>
					<Stack.Screen name="_modals" options={{
						headerShown: false,
						presentation: 'modal',
						animation: 'slide_from_bottom',
					}}/>
					<Stack.Screen name="+not-found"/>
				</Stack>
				<StatusBar style="auto"/>
			</KeyboardProvider>
		</ThemeProvider>
	);
}
