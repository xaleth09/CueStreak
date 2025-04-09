import { Column, Row } from '@/components/ui/Flex/Flex';
import { Body, H2, H4 } from '@/components/ui/Typography';
import { MatchStatus } from '@/types/types';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

const PressableWrapper = styled(Pressable)<{ pressed: boolean }>`
    flex-grow: 1;
    ${({pressed}) => `
		background-color: ${pressed ? 'skyblue' : 'transparent'};
	`}
`;

type Props = {
	id: string;
	gameNum: number;
	opponentName: string;
	status?: MatchStatus;
	won?: boolean;
	winCriteria: number;
	playerScore: number;
	opponentScore: number;
	onPress?: (id: string) => void;
}

export const GameHighlightRow = ({id, gameNum, opponentName, won, winCriteria, playerScore, opponentScore, onPress}: Props) => {
	const [pressed, setPressed] = useState(false);

	const handleOnPressIn = () => {
		setPressed(true);
	};

	const handleOnPress = () => {
		onPress?.(id);
	}

	const handleOnPressOut = () => {
		setPressed(false);
	};

	return (
		<PressableWrapper
			disabled={!onPress}
			pressed={pressed}
			onPressIn={handleOnPressIn}
			onPress={handleOnPress}
			onPressOut={handleOnPressOut}
		>
			<Row
				flexGrow={1}
				horizontalAlignment="spaceBetween"
				verticalAlignment="center"
				paddingVertical={12}
				paddingHorizontal={8}
			>
				<Column flexGrow={1}
						flexShrink={1}
						flexBasis="33%"
						gap={8}
				>
					<Body>Game {gameNum}</Body>
					<Body numberOfLines={1} ellipsizeMode='tail'>VS. {opponentName}</Body>
				</Column>
				<Row flexGrow={0}
					 flexShrink={0}
					 flexBasis="34%"
					 horizontalAlignment="center"
					 gap={4}
				>
					<H4>{playerScore}</H4><H4>-</H4><H4>{opponentScore}</H4>
				</Row>
				<Row flexGrow={1}
					 flexShrink={1}
					 flexBasis="33%"
					 horizontalAlignment="right"
					 columnGap={24}
					 verticalAlignment="center"
				>
					<H2>{won ? 'Win!' : 'Loss'}</H2>
				</Row>
			</Row>
		</PressableWrapper>
	);
};
