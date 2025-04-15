import { MatchStatus } from '@/types/types';

export type GameHighlight = {
    id: string,
    gameNum: number;
    opponentName: string;
    status?: MatchStatus;
    winningPlayerId?: string;
    winCriteria: number;
    playerScore: number;
    opponentScore: number;
}
