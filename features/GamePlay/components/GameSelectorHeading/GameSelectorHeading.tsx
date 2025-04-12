import { SIZES } from '@/constants/design-tokens';
import { H1 } from '@/components/ui/Typography';
import { Row } from '@/components/ui/Flex/Flex';
import React, { useState } from 'react';
import { View } from 'react-native';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import styled from 'styled-components/native';
import { GameSelectorOptions } from '@/features/GamePlay/components/GameSelectorHeading/GameSelectorOptions';
import { Pressable } from '@/components/ui/Pressable';
import { GAME_TYPES, GameTypeKeysWithAll, GAME_TYPES_WITH_ALL } from '@/features/Games/constants';

const BigHeading = styled(H1)`
    font-size: 75px;
    color: dimgray;
    text-align: center;
`;


export type GameSelectorHeadingProps = {
	withAll?: boolean;
	selectedGame: GameTypeKeysWithAll;
	onChange: (id: GameTypeKeysWithAll) => void;
}


export const GameSelectorHeading = ({selectedGame, onChange, withAll = false}: GameSelectorHeadingProps) => {
	const [selectorOpen, setSelectorOpen] = useState(false);

	const handleOnPress = () => {
		setSelectorOpen(!selectorOpen);
	};

	const handleOptionOnPress = (id: GameTypeKeysWithAll) => {
		onChange(id);
		setSelectorOpen(false);
	};

	return (
		<View>
			<Pressable onPress={handleOnPress}>
				<Row flexShrink={1}
					 horizontalAlignment="spaceBetween"
					 verticalAlignment="center"
					 columnGap={SIZES.MD.val}
				>
					<Row flexGrow={1}>
						<BigHeading numberOfLines={2}
									ellipsizeMode={'middle'}
						>
							{GAME_TYPES_WITH_ALL[selectedGame].title.short}
						</BigHeading>
					</Row>
					<IconSymbol name={'chevron.down'} size={SIZES.LG.val} color="black"/>
				</Row>
			</Pressable>
			{selectorOpen ? (
				<GameSelectorOptions games={withAll ? GAME_TYPES_WITH_ALL : GAME_TYPES}
									 onPress={handleOptionOnPress}
				/>
			) : null}
		</View>
	);
};
