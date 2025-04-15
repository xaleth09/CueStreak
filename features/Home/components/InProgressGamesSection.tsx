import { MatchList } from '@/features/Matches/components/MatchList';
import { FAKE_LAST_5_GAMES } from '@/features/Home/constants';
import { Column } from '@/components/ui/Flex/Flex';
import { H2 } from '@/components/ui/Typography';

type Props = {}

export const InProgressGamesSection = ({}: Props) => {

	return (
		<Column>
			<H2>In Progress</H2>
			<MatchList matches={FAKE_LAST_5_GAMES.slice(0,2)}/>
		</Column>
	);
};
