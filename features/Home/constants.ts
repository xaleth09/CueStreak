import { GameTypeKeysWithAll } from '@/features/Games/constants';

export const FAKE_LAST_5_GAMES = [
	{
		id: '1',
		gameNum: 1,
		opponentName: 'Dr. Zoidberg',
		won: true,
		winCriteria: 5,
		playerScore: 100,
		opponentScore: 0,
	},
	{
		id: '2',
		gameNum: 2,
		opponentName: 'Leela',
		won: false,
		winCriteria: 7,
		playerScore: 4,
		opponentScore: 7,
	},
	{
		id: '3',
		gameNum: 3,
		opponentName: 'Bender',
		won: true,
		winCriteria: 3,
		playerScore: 3,
		opponentScore: 2,
	},
	{
		id: '4',
		gameNum: 4,
		opponentName: 'Fry',
		won: false,
		winCriteria: 5,
		playerScore: 3,
		opponentScore: 5,
	},
	{
		id: '5',
		gameNum: 5,
		opponentName: 'Calculon',
		won: true,
		winCriteria: 9,
		playerScore: 9,
		opponentScore: 8,
	},
];

type WinLossStats = {
	totalGames: number;
	wins: number;
	losses: number;
};

export const FAKE_WIN_LOSS_STATS: Record<GameTypeKeysWithAll, WinLossStats> = {
	all: { totalGames: 138, wins: 79, losses: 59 },
	'8ball': { totalGames: 42, wins: 28, losses: 14 },
	'9ball': { totalGames: 25, wins: 11, losses: 14 },
	'10ball': { totalGames: 18, wins: 9, losses: 9 },
	onePocket: { totalGames: 20, wins: 12, losses: 8 },
	straightPool: { totalGames: 33, wins: 19, losses: 14 },
};


