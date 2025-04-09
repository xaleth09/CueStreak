import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import { GamesList } from '@/features/Games/components/GamesList';
import { FAKE_LAST_5_GAMES } from '@/features/Home/constants';
import { H1, H3 } from '@/components/ui/Typography';
import { Column } from '@/components/ui/Flex/Flex';
import { SIZES } from '@/constants/design-tokens';

type Props = {}

export default function GamesPage({}: Props) {

	return (
		<BasePage hasTabBar>
			<H1>Match History</H1>
			<Column paddingTop={SIZES.MD.val}>
				<H3>In Progress</H3>
				<GamesList games={[...FAKE_LAST_5_GAMES]}/>
			</Column>
			<Column paddingTop={SIZES.MD.val}>
				<H3>Completed</H3>
				<GamesList games={[...FAKE_LAST_5_GAMES]}/>
			</Column>
		</BasePage>
	);
};
