import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import { MatchList } from '@/features/Matches/components/MatchList';
import { FAKE_LAST_5_GAMES } from '@/features/Home/constants';
import { H3 } from '@/components/ui/Typography';
import { Column } from '@/components/ui/Flex/Flex';
import { SIZES } from '@/constants/design-tokens';
import { GameTypeSelectorHeading } from '@/features/MatchCreation/components/GameTypeSelectorHeading/GameTypeSelectorHeading';
import { useCallback, useState } from 'react';
import { NavBar } from '@/components/ui/NavBar/NavBar';
import { Button } from '@/components/ui/Buttons/Button';
import { GameTypeKeysWithAll } from '@/features/Matches/constants';

type Props = {}

export default function MatchesPage({}: Props) {
	const [selectedGame, setSelectedGame] = useState<GameTypeKeysWithAll>('8ball');

	const handleOnGameSelect = (id: GameTypeKeysWithAll) => {
		setSelectedGame(id);
	};

	const navBar = useCallback(() => (
		<NavBar>
			<H3>Match History</H3>
		</NavBar>
	), []);

	return (
		<BasePage hasTabBar
				  renderNavBarComponent={navBar}
		>
			<GameTypeSelectorHeading withAll selectedGame={selectedGame} onChange={handleOnGameSelect}/>
			<Column paddingTop={SIZES.XS.val}>
				<H3>In Progress</H3>
				<MatchList matches={[...FAKE_LAST_5_GAMES]}/>
				<Button variant='ghost-primary' onPress={() => {}}>
					See all
				</Button>
			</Column>
			<Column paddingTop={SIZES.MD.val}>
				<H3>Completed</H3>
				<MatchList matches={[...FAKE_LAST_5_GAMES]}/>
				<Button variant='ghost-primary' onPress={() => {}}>
					See all
				</Button>
			</Column>
		</BasePage>
	);
};
