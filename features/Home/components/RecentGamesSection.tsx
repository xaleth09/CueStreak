import { GamesList } from '@/features/Games/components/GamesList';
import { FAKE_LAST_5_GAMES } from '@/features/Home/constants';
import { Column, Row } from '@/components/ui/Flex/Flex';
import { H2 } from '@/components/ui/Typography';
import { Pressable } from 'react-native';

type Props = {}

export const RecentGamesSection = ({}: Props) => {

	return (
		<Column>
			<H2>Recent Games</H2>
			<GamesList games={FAKE_LAST_5_GAMES}/>
		</Column>
	);
};
