import { View } from 'react-native';
import { GameHighlight } from '@/features/Matches/types';
import styled from 'styled-components/native';
import { Row } from '@/components/ui/Flex/Flex';
import { MatchHighlightRow } from '@/features/Matches/components/MatchHighlightRow';
import { useCallback } from 'react';
import { useRouter } from 'expo-router';

const BorderedRow = styled(Row)<{ lastRow: boolean }>`
    ${({lastRow}) => !lastRow ? `
    		border-bottom-width: 1px;
    		border-bottom-color: dimgrey;
    		border-bottom-style: solid;
    	` : ''
    }
`;

type Props = {
	matches: GameHighlight[];
}

export const MatchList = ({matches}: Props) => {
	const router = useRouter();

	const handleNavigateToGameDetails = useCallback((id: string) => {
		router.push('/_modals/match_details');
	}, []);

	return (
		<View>
			{matches.map(({
							id,
							gameNum,
							opponentName,
							status,
							winningPlayerId,
							winCriteria,
							playerScore,
							opponentScore,
						}, index) => (
				<BorderedRow key={id} lastRow={index === matches.length - 1}>
					<MatchHighlightRow
						id={id}
						gameNum={gameNum}
						opponentName={opponentName}
						status={status}
						winningPlayerId={winningPlayerId}
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
