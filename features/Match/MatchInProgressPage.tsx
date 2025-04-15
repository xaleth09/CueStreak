import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import styled from 'styled-components/native';
import { Column, Row } from '@/components/ui/Flex/Flex';
import { Body, H1, H3, H4 } from '@/components/ui/Typography';
import { GameTypeSelectorHeading } from '@/features/MatchCreation/components/GameTypeSelectorHeading/GameTypeSelectorHeading';
import { TextInput } from 'react-native';
import { MATCH_ONE_POCKET, MATCH_STRAIGHT_POOL } from '@/features/Match/constants';
import { Divider } from '@/components/ui/Divider';
import React, { useCallback } from 'react';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import { Pressable } from '@/components/ui/Pressable';
import { NavBar } from '@/components/ui/NavBar/NavBar';
import { NavBackIcon } from '@/components/ui/NavBar/NavBackIcon';

const ScoreLayout = styled(Column)`

`;

const MainScoreWrapper = styled(Column)`
    //background-color: mediumspringgreen;
`;

const MainScoreInput = styled(TextInput).attrs({})`
    //background-color: sandybrown;
    font-size: 125px;
    display: flex;
	height: 110px;
`;

const SecondaryScoreWrapper = styled(Column)`
    //background-color: tomato;
`;

const PillButtons = styled(Row)`
    overflow: hidden;
    height: 100%;
    border-radius: 24px;
    border: 1px solid black;
`;

const PillButton = styled(Pressable)`
    padding: 12px 16px;
    border-radius: 0;
`;

const COLORS = ['orchid', 'skyblue', 'tomato'];

type Props = {}

export default function MatchInProgressPage({}: Props) {

	const {
		status,
		currentShooterId,
		gameType,
		handicapped,
		players,
	} = MATCH_ONE_POCKET; //MATCH_ONE_POCKET MATCH_STRAIGHT_POOL

	const navBar = useCallback(() => (
		<NavBar>
			<NavBackIcon/>
		</NavBar>
	), []);

	return (
		<BasePage hasTabBar renderNavBarComponent={navBar}>
			<GameTypeSelectorHeading disabled selectedGame={gameType}/>
			{Object.entries(players).map(([playerId, {
				playerName,
				ballCountCriteria,
				gameCountCriteria,
				gameCount,
				ballCount
			}], index) => (
				<React.Fragment key={playerId}>
					<ScoreLayout flexGrow={1}
						// backgroundColor={currentShooterId === playerId ? COLORS[index] : 'transparent'}
					>

						<Column paddingVertical={16}>

							<Row verticalAlignment="center" columnGap={8}>
								<H4>{playerName}</H4>
								{currentShooterId === playerId ?(
									<IconSymbol name="star.circle.fill" color="limegreen"/>
								): null}
							</Row>

							<MainScoreWrapper
								paddingTop={32}
								paddingBottom={24}
								flexGrow={1}
							>
								<Row
									// backgroundColor={'purple'}
									horizontalAlignment={'center'}
									paddingLeft={48}
									verticalAlignment={'top'}
								>
									<MainScoreInput value={ballCount.toString()}/>
									<H4
										style={{
											// backgroundColor: 'royalblue',
											flexShrink: 1,
											// flexBasis: '15%',
											textAlign: 'right',
										}}
									>
										/ {ballCountCriteria} balls
									</H4>
								</Row>

							</MainScoreWrapper>

								<Row horizontalAlignment="center">
									<H1>{gameCount}</H1>
									<H4 style={{marginBottom: 8, alignSelf: 'flex-end'}}>
										/ {gameCountCriteria} Games
									</H4>
								</Row>

						</Column>
					</ScoreLayout>


					{index !== Object.entries(players).length - 1 ? (
						<Row verticalAlignment="center">
							<Divider/>

							<PillButtons
								// paddingHorizontal={16}
								// paddingVertical={12}
								horizontalAlignment="spaceBetween"
							>

								<PillButton backgroundColor="royalblue">
									<IconSymbol name="plus" color="white"/>
								</PillButton>

								<Divider direction={'vertical'}/>

								<PillButton backgroundColor="lightgray">
									<IconSymbol name="arrow.counterclockwise" color="black"/>
								</PillButton>

								<Divider direction={'vertical'}/>

								<PillButton backgroundColor="lightgray">
									<IconSymbol name="arrow.up.arrow.down" color="black"/>
								</PillButton>

								<Divider direction={'vertical'}/>

								<PillButton backgroundColor="lightgray">
									<IconSymbol name="arrow.clockwise" color="black"/>
								</PillButton>

								<Divider direction={'vertical'}/>

								<PillButton backgroundColor="tomato">
									<IconSymbol name="minus" color="white"/>
								</PillButton>

							</PillButtons>

							<Divider/>
						</Row>
					) : null}


				</React.Fragment>
			))}
		</BasePage>
	);
};
