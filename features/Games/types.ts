import { MatchStatus } from '@/types/types';

export type GameHighlight = {
    id: number,
    gameNum: number;
    opponentName: string;
    status?: MatchStatus;
    won?: boolean;
    winCriteria: number;
    playerScore: number;
    opponentScore: number;
}
