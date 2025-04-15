import { MatchStatus } from '@/types/types';
import { GameTypeKeys } from '@/features/Matches/constants';

export const MATCH_ONE_POCKET = {
	date_created: '',
	date_completed: '',
	time_played: '',
	status: 'inProgress' as MatchStatus,
	currentShooterId: '123',
	gameType: 'onePocket' as GameTypeKeys,
	handicapped: true,
	players: {
		'123': {
			playerName: 'Player1',
			ballCountCriteria: 8,
			gameCountCriteria: 2,
			gameCount: 0,
			ballCount: 2,
		},
		'234': {
			playerName: 'Player2',
			ballCountCriteria: 9,
			gameCountCriteria: 3,
			gameCount: 1,
			ballCount: 4,
		}
	}
};

export const MATCH_STRAIGHT_POOL = {
	date_created: '',
	date_completed: '',
	time_played: '',
	status: 'inProgress' as MatchStatus,
	currentShooterId: '123',
	gameType: 'straightPool' as GameTypeKeys,
	handicapped: true,
	players: {
		'123': {
			playerName: 'Player1',
			ballCountCriteria: 150,
			gameCountCriteria: 2,
			gameCount: 0,
			ballCount: 112,
		},
		'234': {
			playerName: 'Player2',
			ballCountCriteria: 175,
			gameCountCriteria: 2,
			gameCount: 1,
			ballCount: 134,
		}
	}
};

export const MATCH_8_BALL = {
	date_created: '2025-04-12T10:30:00Z',
	date_completed: null,
	time_played: null,
	status: 'inProgress' as MatchStatus,
	currentShooterId: '123',
	gameType: '8ball' as GameTypeKeys,
	handicapped: false,
	players: {
		'123': {
			playerName: 'Player1',
			ballCountCriteria: null,
			gameCountCriteria: 5,
			gameCount: 2,
			ballCount: null,
		},
		'234': {
			playerName: 'Player2',
			ballCountCriteria: null,
			gameCountCriteria: 5,
			gameCount: 3,
			ballCount: null,
		}
	}
};

