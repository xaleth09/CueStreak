import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import { H1 } from '@/components/ui/Typography';
import React, { useCallback, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Column, Row } from '@/components/ui/Flex/Flex';
import styled from 'styled-components/native';
import { Switch } from '@/components/ui/Switch';
import { SIZES } from '@/constants/design-tokens';
import { NavBar } from '@/components/ui/NavBar/NavBar';
import { IconButton } from '@/components/ui/Buttons/IconButton';
import { useRouter } from 'expo-router';
import { WinCriteriaInputGroup } from '@/features/GameCreation/components/WinCriteriaInputGroup';
import { GameSelectorHeading } from '@/features/GameCreation/components/GameSelectorHeading/GameSelectorHeading';
import { GameTypeKeys, GameTypeKeysWithAll } from '@/features/Games/constants';

const DEFAULT_WIN_CRITERIA_BY_GAME = {
	'8ball': {
		games: 5,
		balls: undefined,
	},
	'9ball': {
		games: 5,
		balls: undefined,
	},
	'10ball': {
		games: 5,
		balls: undefined,
	},
	'onePocket': {
		games: 3,
		balls: 8,
	},
	'straightPool': {
		games: 1,
		balls: 75,
	},
	'banks': {
		games: 3,
		balls: 5,
	},
};

const DEFAULT_INPUT_STATE = {
	player1Name: '',
	player1Games: undefined,
	player1Balls: undefined,
	player2Name: '',
	player2Games: undefined,
	player2Balls: undefined,
};


const PlayerNameInput = styled(RNTextInput)<{ underline?: boolean }>`
    flex-grow: 1;
    font-size: 40px;
    font-weight: bold;
    color: dimgray;
    padding: 0;

    ${({underline}) => underline ? `
		border-bottom-width: 1px;
		border-bottom-color: darkgrey;
		border-bottom-style: solid;
	` : ``}
`;

const GiantVS = styled(H1)`
    font-size: 84px;
    text-align: center;
`;


type Props = {}

export default function CreateGamePage({}: Props) {
	const router = useRouter();

	const [inputValues, setInputValue] = useState({});
	const [selectedGame, setSelectedGame] = useState<GameTypeKeys>('8ball');
	const [isHandicapped, setIsHandicapped] = useState(false);

	const handleSelectedGameOnChange = (id: GameTypeKeysWithAll) => {
		setSelectedGame(id as GameTypeKeys);
	};

	const handleHandicappedOnChange = (handicapped: boolean) => {
		setIsHandicapped(handicapped);
	};

	const navBar = useCallback(() => (
		<NavBar horizontalAlignment='right'>
			<Switch label={'Handicapped?'}
					value={isHandicapped}
					onPress={handleHandicappedOnChange}
			/>
		</NavBar>
	), [isHandicapped]);

	const handleNavToGamePlay = useCallback(() => {
		router.push('/(tabs)/(game_play)/game_in_progress');
	}, []);

	const playFAButton = useCallback(() => (
		<IconButton iconName="play.fill" onPress={handleNavToGamePlay}/>
	), []);

	const showBallCountInputs = selectedGame === 'onePocket' || selectedGame === 'straightPool';

	return (
		<BasePage renderNavBarComponent={navBar}
				  renderFABComponent={playFAButton}
		>
			<GameSelectorHeading selectedGame={selectedGame} onChange={handleSelectedGameOnChange}/>

			<Row gap={SIZES.XXS.val}>
				<GiantVS>VS</GiantVS>
				<Column flexGrow={1}>
					<PlayerNameInput underline placeholder="Player 1"/>
					<PlayerNameInput placeholder="Player 2"/>
				</Column>
			</Row>

			<Row
				wrap="wrap"
				horizontalAlignment={'spaceBetween'}
				paddingHorizontal={SIZES.XS.val}
				gap={SIZES.XS.val}
			>
				<WinCriteriaInputGroup
					label="Games"
					placeholder="10"
					primaryInputValue={''}
					handicappedInputValue={''}
					showHandicappedInput={isHandicapped}
				/>
				{showBallCountInputs ? (
					<WinCriteriaInputGroup
						label="Balls"
						placeholder={selectedGame === 'straightPool' ? '100' : '8'}
						primaryInputValue={''}
						handicappedInputValue={''}
						showHandicappedInput={isHandicapped}
					/>
				) : null}
			</Row>

		</BasePage>
	);
};
