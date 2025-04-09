import { Text, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { Row } from '@/components/ui/Flex/Flex';
import { Body } from '@/components/ui/Typography';


const StyledPressable = styled(Pressable)`
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    padding-top: 4px;
    padding-bottom: 4px;
`;

type Props = {
	id: string;
	onPress: (id: string) => void;
	backgroundColor?: string;
	pressedBackgroundColor?: string;
	children: string;
}

export const Tab = ({id, onPress, backgroundColor = 'white', pressedBackgroundColor = 'royalblue', children}: Props) => {
	const [pressed, setPressed] = useState(false);

	const handleOnPressIn = () => {
		setPressed(true);
	};

	const handleOnPress = () => {
		onPress(id);
	};

	const handleOnPressOut = () => {
		setPressed(false);
	};

	return (
		<StyledPressable
			onPressIn={handleOnPressIn}
			onPressOut={handleOnPressOut}
			onPress={handleOnPress}
		>
			<Row flexGrow={1}
				 paddingVertical={12}
				 horizontalAlignment="center"
				 style={{width: '100%'}}
				 backgroundColor={pressed ? pressedBackgroundColor : backgroundColor}
			>
				<Body numberOfLines={1} ellipsizeMode={'tail'}>{children}</Body>
			</Row>
		</StyledPressable>
	);
};
