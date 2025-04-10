import { H1, H3 } from '@/components/ui/Typography';
import { UserStats } from '@/types/types';
import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import { StatsCard } from '@/features/Home/components/StatsCard';
import { RecentGamesSection } from './components/RecentGamesSection';
import { useCallback } from 'react';
import { NavBar } from '@/components/ui/NavBar/NavBar';
import { SIZES } from '@/constants/design-tokens';
import { Divider } from '@/components/ui/Divider';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';
import { Row } from '@/components/ui/Flex/Flex';

const FAKE_USER_STAT = {
	totalWins: 1,
	totalLosses: 3,
	totalMatches: 4,
	totalFouls: 0,
	highestRun: {
		'8ball': 0,
		'9ball': 0,
		'10ball': 0,
		straightPool: 0,
		onePocket: 0,
	},
	streak: {
		current: 0,
		longest: 0,
	},
	current: 0,
	longest: 0,
	breakAndRuns: 0,
	lastMatchId: 'somecomplexmatchid',
};

const FAKE_CURRENT_USER = {
	id: 'somecomplexuserid007',
	name: {
		first: 'Roberto',
		last: 'Garza',
		preferred: 'Robbi'
	},
	nickname: 'Xaleth',
	email: 'rawr@goodluckhavefun.com',
	createdAt: '',
	updatedAt: '',
	stats: FAKE_USER_STAT,
	matchHistory: null,
};

const getUIUserStats = (stats: UserStats) => {
	const {totalWins, totalMatches} = stats;
	return {
		winPercentage: ((totalWins / totalMatches) * 100).toFixed(2)
	};
};

export default function HomeScreen() {
	const {name, nickname, stats} = FAKE_CURRENT_USER || {};
	// @ts-ignore
	const {winPercentage} = getUIUserStats(stats);

	const navBar = useCallback(() => (
		<NavBar horizontalAlignment='left'>
			<Row verticalAlignment='center' gap={SIZES.XXS.val}>
				<IconSymbol name="list.dash" color="black" size={28}/>
				<H3>{nickname ?? 'Hello!'}</H3>
			</Row>
		</NavBar>
	), [nickname]);

	return (
		<BasePage hasTabBar
				  gap={SIZES.SM.val}
				  renderNavBarComponent={navBar}
		>
			<StatsCard/>
			<Divider/>
			<RecentGamesSection/>
		</BasePage>
	);
};
