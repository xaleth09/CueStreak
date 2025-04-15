import { MatchList } from '@/features/Matches/components/MatchList';
import { FAKE_LAST_5_GAMES } from '@/features/Home/constants';
import { Column } from '@/components/ui/Flex/Flex';
import { H2 } from '@/components/ui/Typography';

type Props = {}

export const RecentMatchesSection = ({}: Props) => {

	return (
		<Column>
			<H2>Recent Matches</H2>
			<MatchList matches={FAKE_LAST_5_GAMES}/>
		</Column>
	);
};
