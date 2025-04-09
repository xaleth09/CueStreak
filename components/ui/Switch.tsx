import { View, Text, Pressable } from 'react-native';
import { Body } from '@/components/ui/Typography';
import { Row } from '@/components/ui/Flex/Flex';
import { useState } from 'react';
import styled from 'styled-components/native';
import { SIZES } from '@/constants/design-tokens';

const SWITCH_RADIUS = 20;
const TRACK_HORIZONTAL_PADDING = 2;

const Track = styled(Row)`
    width: ${(SWITCH_RADIUS * 2) + (TRACK_HORIZONTAL_PADDING * 2)}px;
    padding: ${SIZES.XXXS.px} ${TRACK_HORIZONTAL_PADDING}px;
    border-radius: ${SIZES.MD.px};
`;

const ToggleButton = styled(View)`
    height: ${SWITCH_RADIUS}px;
    width: ${SWITCH_RADIUS}px;
    border-radius: 999px;
    background-color: white;
`;

type Props = {
	label?: string;
	value: boolean;
	onPress: (value: boolean) => void;
}

export const Switch = ({
						   label,
						   value,
						   onPress,
					   }: Props) => {

	const handleOnPress = () => {
		console.log("value",value, "!value", !value)
			onPress?.(!value);
	};

	return (
		<Pressable onPress={handleOnPress}>
			<Row flexShrink={1} gap={SIZES.XXS.val} horizontalAlignment="center">
				<Body style={{flexShrink: 1, alignSelf: 'center'}}>
					{label}
				</Body>
				<Track flexShrink={1}
					   backgroundColor={value ? 'dodgerblue' : 'dimgrey'}
					   horizontalAlignment={value ? 'right' : 'left'}
				>
					<ToggleButton/>
				</Track>
			</Row>
		</Pressable>
	);
};
