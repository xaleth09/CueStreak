import { Column, Row } from '@/components/ui/Flex/Flex';
import { Body, H2, H4 } from '@/components/ui/Typography';
import { MatchStatus } from '@/types/types';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { SIZES } from '@/constants/design-tokens';

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
	winningPlayerId?: string;
	winCriteria: number;
	playerScore: number;
	opponentScore: number;
	onPress?: (id: string) => void;
}

const CURRENT_USER_ID = '123'

export const MatchHighlightRow = ({
									 id,
									 gameNum,
									 status,
									 opponentName,
									 winningPlayerId,
									 winCriteria,
									 playerScore,
									 opponentScore,
									 onPress
								 }: Props) => {
	const [pressed, setPressed] = useState(false);

	const handleOnPressIn = () => {
		setPressed(true);
	};

	const handleOnPress = () => {
		onPress?.(id);
	};

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
				flexShrink={1}
				horizontalAlignment="spaceBetween"
				verticalAlignment="center"
				paddingVertical={SIZES.XS.val}
				paddingHorizontal={SIZES.XXS.val}
			>

				<Column flexGrow={1}
						flexShrink={1}
						flexBasis="33%"
						rowGap={SIZES.XXS.val}
				>
					<Body>Game {gameNum}</Body>
					<Body numberOfLines={1} ellipsizeMode="tail">VS. {opponentName}</Body>
				</Column>

				<Row flexGrow={1}
					 flexShrink={1}
					 flexBasis="34%"
					 paddingHorizontal={SIZES.XXXS.val}
					 horizontalAlignment="center"
					 columnGap={4}
				>
					<H4 numberOfLines={1}>{playerScore}</H4>
					<H4>-</H4>
					<H4>{opponentScore}</H4>
				</Row>

				<Row flexGrow={1}
					 flexShrink={1}
					 flexBasis="33%"
					 horizontalAlignment="right"
					 columnGap={24}
					 verticalAlignment="center"
				>
					<H2 numberOfLines={1} ellipsizeMode="tail">
						{winningPlayerId === CURRENT_USER_ID ? 'Win!' : 'Loss'}
					</H2>
				</Row>
			</Row>
		</PressableWrapper>
	);
};
