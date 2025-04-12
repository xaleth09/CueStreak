import { GameWinningCriteria } from '@/types/types';

type GameConfig = {
	title: {
		full: string;
		short: string;
	};
	winCriteriaPerGame?: GameWinningCriteria;
};

export const GAME_TYPES = {
	'8ball': {
		title: {
			full: '8 Ball',
			short: '8 Ball',
		},
		winCriteriaPerGame: 'winLoss',
	},
	'9ball': {
		title: {
			full: '9 Ball',
			short: '9 Ball',
		},
		winCriteriaPerGame: 'winLoss',
	},
	'10ball': {
		title: {
			full: '10 Ball',
			short: '10 Ball',
		},
		winCriteriaPerGame: 'winLoss',
	},
	'onePocket': {
		title: {
			full: 'One Pocket',
			short: '1 Pkt',
		},
		winCriteriaPerGame: 'ballCount',
	},
	'straightPool': {
		title: {
			full: 'Straight Pool',
			short: '14.1',
		},
		winCriteriaPerGame: 'ballCount',
	},
	// Uncomment when ready
	// 'banks': {
	// 	title: {
	// 		full: 'Banks',
	// 		short: 'Banks',
	// 	},
	// 	winCriteriaPerGame: 'ballCount',
	// },
} as const;

export const ALL_GAME_TYPE = {
	all: {
		title: {
			full: 'All Games',
			short: 'All',
		},
	},
} as const;

export const GAME_TYPES_WITH_ALL = {
	...ALL_GAME_TYPE,
	...GAME_TYPES,
} as const;

export type GameTypes = typeof GAME_TYPES;
export type GameTypesWithAll = typeof GAME_TYPES_WITH_ALL;

export type GameTypeKeys = keyof typeof GAME_TYPES;
export type GameTypeKeysWithAll = keyof typeof GAME_TYPES_WITH_ALL;
