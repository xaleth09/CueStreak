import { SIZES } from '@/constants/design-tokens';
import { H1 } from '@/components/ui/Typography';
import { Row } from '@/components/ui/Flex/Flex';
import React from 'react';
import { GameTabKey, HEADER_TAB_MAP } from '@/features/Games/components/GameTabSelector';
import { Pressable } from 'react-native';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import styled from 'styled-components/native';

const BigHeading = styled(H1)`
	font-size: 80px;
	color: dimgray;
`

type Props = {
	selectedGame: GameTabKey;
	onChange: (selectedId: GameTabKey) => void;
}

export const GameSelectorHeading = ({selectedGame, onChange}: Props) => {

	return (
		<Pressable>
			<Row flexShrink={1}
				 horizontalAlignment='spaceBetween'
				 verticalAlignment="center"
				 columnGap={SIZES.MD.val}

			>
				{/* @ts-ignore*/}
				<BigHeading numberOfLines={1} ellipsizeMode={'middle'}>{HEADER_TAB_MAP[selectedGame]}</BigHeading>
				<IconSymbol name={'chevron.down'} size={32} color="black"/>
			</Row>
		</Pressable>
	);
};
