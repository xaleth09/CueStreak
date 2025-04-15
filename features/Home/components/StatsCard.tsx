import { View } from 'react-native';
import { Column, Row } from '@/components/ui/Flex/Flex';
import { Body } from '@/components/ui/Typography';
import { PieChart } from 'react-native-gifted-charts';
import { useMemo, useState } from 'react';
import { FAKE_WIN_LOSS_STATS } from '@/features/Home/constants';
import { SIZES } from '@/constants/design-tokens';
import { GameTypeSelectorHeading } from '@/features/MatchCreation/components/GameTypeSelectorHeading/GameTypeSelectorHeading';
import { GameTypeKeys } from '@/features/Matches/constants';

type Props = {}

const DEFAULT_SELECTED_GAME_TAB: GameTypeKeys = '8ball';

export const StatsCard = ({}: Props) => {
	const [selectedGame, setSelectedGame] = useState<GameTypeKeys>(DEFAULT_SELECTED_GAME_TAB);

	const handleOnGameSelect = (id: GameTypeKeys) => {
		setSelectedGame(id);
	};

	const {totalGames, wins, losses} = FAKE_WIN_LOSS_STATS[selectedGame];
	const winPercentage = wins / totalGames;
	const lossPercentage = losses / totalGames;
	const pieChartData = useMemo(() => {
		return [
			{value: winPercentage, color: 'limegreen'},
			{value: lossPercentage, color: 'darkgray'}
		];
	}, [selectedGame]);

	return (
		<Column gap={8}>
			<GameTypeSelectorHeading withAll selectedGame={selectedGame} onChange={handleOnGameSelect}/>
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
								backgroundColor: 'royalblue',
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
						paddingHorizontal={SIZES.XXL.val}
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
	);
};
