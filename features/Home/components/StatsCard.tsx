import { View } from 'react-native';
import { Column, Row } from '@/components/ui/Flex/Flex';
import { Card } from '@/components/ui/Card';
import { Body, H3 } from '@/components/ui/Typography';
import { PieChart } from 'react-native-gifted-charts';
import { GameTabs, GameTabSelector } from '@/features/Games/components/GameTabSelector';
import { useState } from 'react';

const HEADER_TAB_MAP = {
	'all': 'All Games',
	'8ball': '8 Ball',
	'9ball': '9 Ball',
	'10ball': '10 Ball',
	'onePocket': 'One Pocket',
	'straightPool': 'Straight Pool',
};

type Props = {}

export const StatsCard = ({}: Props) => {
	const [selectedGame, setSelectedGame] = useState<GameTabs>('8ball');

	const handleOnGameSelect = (id: GameTabs) => {
		setSelectedGame(id);
	};

	return (
		<Column flexGrow={1} gap={8}>
			<Card padding={0}>
				<Column gap={24} paddingHorizontal={24} paddingVertical={16}>
					{/* @ts-ignore */}
					<H3>{HEADER_TAB_MAP[selectedGame]}</H3>
					<Row gap={32}
						 flexShrink={1}
						 horizontalAlignment="spaceBetween"
						 wrap="wrap"
					>
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
										transform: [{rotate: `${.8 * 180 + 10}deg`}],
									}}
									/>
								)}
								innerCircleColor="white"
								textColor="black"
								data={[{value: 80, color: 'limegreen'}, {value: 20, color: 'black'}]}
							/>
						</Column>

						<Column flexGrow={1}
								verticalAlignment="center"
								gap={4}
						>
							<Row horizontalAlignment="spaceBetween" flexShrink={1}>
								<Body>Total:</Body>
								<Body>100</Body>
							</Row>
							<Row horizontalAlignment="spaceBetween" flexShrink={1}>
								<Body>Wins:</Body>
								<Body>10</Body>
							</Row>
							<Row horizontalAlignment="spaceBetween" flexShrink={1}>
								<Body>Losses:</Body>
								<Body>10</Body>
							</Row>
						</Column>

					</Row>
				</Column>

				<GameTabSelector includeAllTab
								 onChange={handleOnGameSelect}
								 selectedGame={selectedGame}
				/>

			</Card>
		</Column>
	);
};
