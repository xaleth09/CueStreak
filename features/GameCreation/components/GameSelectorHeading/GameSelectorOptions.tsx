import { SIZES } from '@/constants/design-tokens';
import { Body } from '@/components/ui/Typography';
import React from 'react';
import { Row } from '@/components/ui/Flex/Flex';
import { Pressable } from '@/components/ui/Pressable';
import { Card } from '@/components/ui/Card';
import { Divider } from '@/components/ui/Divider';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { GameTypeKeysWithAll, GameTypes, GameTypesWithAll } from '@/features/Games/constants';

const AbsolutelyPositionedWrapper = styled(View)`
    top: 90px;
    position: absolute;
    z-index: 999;
    width: 100%;
`;

type Props = {
	games: GameTypesWithAll | GameTypes
	onPress: (id: GameTypeKeysWithAll) => void;
}

export const GameSelectorOptions = ({games, onPress}: Props) => {

	return (
		<AbsolutelyPositionedWrapper>
			<Card>
				{Object.entries(games).map(([id, {title: {full, short}}], index) => {
					let label: string = short;
					if(id === 'onePocket' || id === 'straightPool') {
						label = `${short} / ${full}`;
					}

					const handleOnPress = () => {
						onPress(id as GameTypeKeysWithAll);
					};

					return (
						<React.Fragment key={id}>
							<Pressable onPress={handleOnPress}>
								<Row
									paddingVertical={SIZES.XS.val}
									paddingHorizontal={SIZES.XXS.val}
								>
									<Body>{label}</Body>
								</Row>
							</Pressable>
							{index !== Object.keys(games).length - 1 ? <Divider/> : null}
						</React.Fragment>
					);
				})}
			</Card>
		</AbsolutelyPositionedWrapper>

	);
};

