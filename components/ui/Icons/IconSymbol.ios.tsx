import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

export function IconSymbol({
							   name,
							   size = 24,
							   color,
							   style,
							   weight = 'regular',
							   onPress,
						   }: {
	name: SymbolViewProps['name'];
	size?: number;
	color: string;
	style?: StyleProp<ViewStyle>;
	weight?: SymbolWeight;
	onPress?: () => void;
}) {

	const Icon = <SymbolView
		weight={weight}
		tintColor={color}
		resizeMode="scaleAspectFit"
		name={name}
		style={[
			{
				width: size,
				height: size,
			},
			style,
		]}
	/>;

	return onPress ? (
		<Pressable onPress={onPress}>
			{Icon}
		</Pressable>
	) : (
		Icon
	);
}
