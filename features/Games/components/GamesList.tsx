import { View } from 'react-native';
import { GameHighlight } from '@/features/Games/types';
import styled from 'styled-components/native';
import { Row } from '@/components/ui/Flex/Flex';
import { GameHighlightRow } from '@/features/Games/components/GameHighlightRow';
import { useCallback } from 'react';
import { useRouter } from 'expo-router';

const BorderedRow = styled(Row)<{ lastRow: boolean }>`
    ${({lastRow}) => `
    	${!lastRow ? `
    		border-bottom-width: 1px;
    		border-bottom-color: dimgrey;
    		border-bottom-style: solid;
    	` : ''}
    `}
`;

type Props = {
	games: GameHighlight[];
}

export const GamesList = ({games}: Props) => {
	const router = useRouter();

	const handleNavigateToGameDetails = useCallback((id: string) => {
		router.push('/(tabs)/(games)/game_details');
	}, [])

	return (
		<View>
			{games.map(({
							id,
							gameNum,
							opponentName,
							status,
							won,
							winCriteria,
							playerScore,
							opponentScore,
						}, index) => (
				<BorderedRow key={id} lastRow={index === games.length - 1}>
					<GameHighlightRow gameNum={gameNum}
									  opponentName={opponentName}
									  status={status}
									  won={won}
									  winCriteria={winCriteria}
									  playerScore={playerScore}
									  opponentScore={opponentScore}
									  onPress={handleNavigateToGameDetails}
					/>
				</BorderedRow>
			))}
		</View>
	);
};
