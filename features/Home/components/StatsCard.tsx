import { View } from 'react-native';
import { Column, Row } from '@/components/ui/Flex/Flex';
import { Card } from '@/components/ui/Card';
import { Body, H3 } from '@/components/ui/Typography';
import { PieChart } from 'react-native-gifted-charts';
import { GameTabs, GameTabSelector } from '@/features/Games/components/GameTabSelector';
import { useMemo, useState } from 'react';
import { FAKE_WIN_LOSS_STATS } from '@/features/Home/constants';
import { SIZES } from '@/constants/design-tokens';

const HEADER_TAB_MAP = {
	'all': 'All Games',
	'8ball': '8 Ball',
	'9ball': '9 Ball',
	'10ball': '10 Ball',
	'onePocket': 'One Pocket',
	'straightPool': 'Straight Pool',
};

type Props = {}

const DEFAULT_SELECTED_GAME_TAB: GameTabs = '8ball';

export const StatsCard = ({}: Props) => {
	const [selectedGame, setSelectedGame] = useState<GameTabs>(DEFAULT_SELECTED_GAME_TAB);

	const handleOnGameSelect = (id: GameTabs) => {
		setSelectedGame(id);
	};

	const {totalGames, wins, losses} = FAKE_WIN_LOSS_STATS[selectedGame];
	const winPercentage = wins / totalGames;
	const lossPercentage = losses / totalGames;
	const pieChartData = useMemo(() => {
		return [
			{value: winPercentage, color: 'limegreen'},
			{value: lossPercentage, color: 'black'}
		];
	}, [selectedGame]);

	return (
		<Column flexGrow={1} gap={8}>
			<Card padding={0}>
				<Column gap={24} paddingHorizontal={24} paddingVertical={16}>
					{/* @ts-ignore */}
					<H3>{HEADER_TAB_MAP[selectedGame]}</H3>
					<Column flexShrink={1} gap={SIZES.SM.val}>
						<Column flexGrow={1} horizontalAlignment="center">
							<PieChart
								donut
								showText
								semiCircle
								radius={120}
								innerRadius={60}
								centerLabelComponent={() => (
									<View style={{
										height: 10,
										width: 20,
										borderTopLeftRadius: 20,
										borderBottomLeftRadius: 20,
										backgroundColor: 'dodgerblue',
										transform: [{rotate: `${winPercentage * 180}deg`}],
									}}
									/>
								)}
								innerCircleColor="white"
								textColor="black"
								data={pieChartData}
							/>
						</Column>

						<Column flexGrow={1}
								verticalAlignment="center"
								gap={4}
						>
							<Row horizontalAlignment="spaceBetween" flexShrink={1}>
								<Body>Total:</Body>
								<Body>{totalGames}</Body>
							</Row>
							<Row horizontalAlignment="spaceBetween" flexShrink={1}>
								<Body>Wins:</Body>
								<Body>{wins}</Body>
							</Row>
							<Row horizontalAlignment="spaceBetween" flexShrink={1}>
								<Body>Losses:</Body>
								<Body>{losses}</Body>
							</Row>
						</Column>

					</Column>
				</Column>

				<GameTabSelector includeAllTab
								 onChange={handleOnGameSelect}
								 selectedGameTab={selectedGame}
				/>

			</Card>
		</Column>
	);
};
