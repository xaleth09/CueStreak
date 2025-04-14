import { SIZES } from '@/constants/design-tokens';
import { H1 } from '@/components/ui/Typography';
import { Row } from '@/components/ui/Flex/Flex';
import React, { useState } from 'react';
import { View } from 'react-native';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import styled from 'styled-components/native';
import { GameSelectorOptions } from '@/features/GameCreation/components/GameSelectorHeading/GameSelectorOptions';
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
	onChange?: (id: GameTypeKeysWithAll) => void;
	disabled?: boolean;
}


export const GameSelectorHeading = ({selectedGame, onChange, withAll = false, disabled}: GameSelectorHeadingProps) => {
	const [selectorOpen, setSelectorOpen] = useState(false);

	const handleOnPress = () => {
		if(disabled) return;

		setSelectorOpen(!selectorOpen);
	};

	const handleOptionOnPress = (id: GameTypeKeysWithAll) => {
		if(disabled) return;

		onChange?.(id);
		setSelectorOpen(false);
	};

	return (
		<View>
			<Pressable disabled={disabled}
					   onPress={handleOnPress}
					   disabledBackgroundColor="transparent"
			>
				<Row flexShrink={1}
					 horizontalAlignment="spaceBetween"
					 verticalAlignment="center"
					 columnGap={SIZES.MD.val}
				>
					<Row flexGrow={1}>
						<BigHeading numberOfLines={2}
									ellipsizeMode="middle"
						>
							{GAME_TYPES_WITH_ALL[selectedGame].title.short}
						</BigHeading>
					</Row>
					{!disabled ? <IconSymbol name={'chevron.down'} size={SIZES.LG.val} color="black"/> : null}
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
