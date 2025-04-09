import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import { H1, H3 } from '@/components/ui/Typography';
import React, { useCallback, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Column, Row } from '@/components/ui/Flex/Flex';
import styled from 'styled-components/native';
import { GameTabs, GameTabSelector } from '@/features/Games/components/GameTabSelector';
import { Switch } from '@/components/ui/Switch';
import { SIZES } from '@/constants/design-tokens';
import { NavBar } from '@/components/ui/NavBar/NavBar';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import { IconButton } from '@/components/ui/Buttons/IconButton';
import { useRouter } from 'expo-router';

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

const HEADER_TAB_MAP = {
	'8ball': '8 Ball',
	'9ball': '9 Ball',
	'10ball': '10 Ball',
	'onePocket': 'One Pocket',
	'straightPool': 'Straight Pool',
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

const NumberInputBox = styled(Column).attrs({
	backgroundColor: 'white',
})`
    height: 164px;
    min-width: 164px;
    border: solid 1px darkgrey;
    border-radius: ${SIZES.MD.px};
`;

const NumberInput = styled(RNTextInput).attrs({})`
    height: 100%;
    font-size: 84px;
    margin-bottom: 0;
`;

type Props = {}

export default function CreateGamePage({}: Props) {
	const router = useRouter();

	const [inputValues, setInputValue] = useState({});
	const [selectedGame, setSelectedGame] = useState<GameTabs>('8ball');
	const [isHandicapped, setIsHandicapped] = useState(false);

	const handleOnChange = (id: GameTabs) => {
		setSelectedGame(id);
	};

	const handleHandicappedOnChange = (handicapped: boolean) => {
		setIsHandicapped(handicapped);
	};

	const bottomGameTabs = useCallback(() => (
		<GameTabSelector onChange={handleOnChange} selectedGameTab={selectedGame} showBottomBorder/>
	), [handleOnChange, selectedGame]);

	const navBar = useCallback(() => (
		<NavBar>
			<IconSymbol
				name="chevron.backward"
				size={SIZES.MD.val}
				color={'black'}
				onPress={handleNavToHomePage}
			/>
			<Switch label={'Handicapped?'}
					value={isHandicapped}
					onPress={handleHandicappedOnChange}
			/>
		</NavBar>
	), [isHandicapped]);

	const handleNavToHomePage = useCallback(() => {
		router.push('/(tabs)/(home)');
	}, []);

	const handleNavToGamePlay = useCallback(() => {
		router.push('/(tabs)/(game_play)');
	}, []);

	const playButton = useCallback(() => (
		<IconButton iconName="play.fill" onPress={handleNavToGamePlay}/>
	), []);

	const showBallCountInputs = selectedGame === 'onePocket' || selectedGame === 'straightPool';

	return (
		<BasePage paddingVertical={0}
				  renderNavBarComponent={navBar}
				  renderFABComponent={playButton}
				  renderBottomComponent={bottomGameTabs}
		>
			<Row flexShrink={1}
				 wrap={'wrap'}
				 verticalAlignment="center"
				 columnGap={SIZES.MD.val}
			>
				{/* @ts-ignore*/}
				<H1>{HEADER_TAB_MAP[selectedGame]}</H1>
			</Row>

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
				// paddingTop={SIZES.LG.val}
			>
				<Column flexGrow={1} gap={SIZES.XXXS.val}>
					<H3>Games</H3>

					<Row columnGap={SIZES.SM.val} horizontalAlignment="spaceBetween">
						<NumberInputBox
							flexShrink={1}
							horizontalAlignment="center"
						>
							<NumberInput placeholder="10"
										 enterKeyHint="next"
							/>
						</NumberInputBox>
						{isHandicapped ? (
							<NumberInputBox
								flexShrink={1}
								horizontalAlignment="center"
							>
								<NumberInput placeholder="10"
											 enterKeyHint="next"
								/>
							</NumberInputBox>
						) : null}
					</Row>
				</Column>

				{showBallCountInputs ? (
					<Column flexGrow={isHandicapped ? 1 : 0} gap={SIZES.XXXS.val}>
						<H3>Balls</H3>
						<Row columnGap={SIZES.SM.val} horizontalAlignment="spaceBetween">
							<NumberInputBox
								flexShrink={1}
								horizontalAlignment="center"
							>
								<NumberInput placeholder="10"
											 enterKeyHint="done"
								/>
							</NumberInputBox>
							{isHandicapped ? (
								<NumberInputBox
									flexShrink={1}
									horizontalAlignment="center"
								>
									<NumberInput placeholder="10"
												 enterKeyHint="next"
									/>
								</NumberInputBox>
							) : null}
						</Row>
					</Column>
				) : null}
			</Row>

		</BasePage>
	);
};
