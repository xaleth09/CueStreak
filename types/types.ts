// --------------------------
// Shared Types
// --------------------------

export type GameType = "8ball" | "9ball" | "onePocket";
export type MatchStatus = "ongoing" | "completed" | "forfeited" | "aborted";
export type MatchType = "traditional" | "league";

// For a match, winning is determined by game count (e.g. best of X or race to X wins)
export interface Match {
    id: string;
    gameType: GameType;
    matchType: MatchType;
    // The number of games a competitor needs to win the match.
    targetGames: number;
    // Competitors represent the teams or solo players.
    competitors: Competitor[];
    // A match is a series of discrete games.
    games: Game[];
    status: MatchStatus;
    // Overall winner determined by aggregating individual game wins.
    overallWinnerCompetitorId?: string;
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
}

// A Competitor is the match-specific entity representing a solo player or team.
// Even in a 1v1, a new Competitor record is created for match-specific state.
export interface Competitor {
    id: string;             // Unique within the match
    name: string;           // Team name or individual name
    playerIds: string[];    // Solo: one element; team: multiple user IDs.
    // For simplicity, we store no score here; game scores are maintained per Game.
}

// --------------------------
// Game and History Types
// --------------------------

// Winning criteria for a game.
// "ballCount": game is won when a competitor reaches a specified ball count.
// "winLoss": game outcome is recorded simply as win or loss (could be derived from ballCount).
// "purePoints": game is scored purely on accumulated points.
export type GameWinningCriteria = "ballCount" | "winLoss" | "purePoints";

// A Turn represents a batched update during a game.
// It captures the actions taken by one competitor during their turn.
export interface Turn {
    id: string;
    competitorId: string;   // The competitor who took this turn
    timestamp: Date;
    // Batched actions: e.g., a series of "add ball" updates
    actions: Action[];
}

// An Action represents a single update (e.g., adding or subtracting a ball).
export interface Action {
    id: string;
    type: "add_ball" | "subtract_ball" | "manual_switch" | "foul";
    count: number;
}

// A Game represents one discrete event within a match.
// It records the final scores (or ball counts) for each competitor,
// along with a turn-based history of how the game evolved.
export interface Game {
    id: string;
    // Winning criteria for this game determines how victory is measured.
    winningCriteria: GameWinningCriteria;
    // Results for each competitor.
    // For example, in a ballCount scenario, score is the number of balls made.
    // In winLoss mode, score might simply be 1 (win) or 0 (loss).
    results: {
        competitorId: string;
        score: number;
    }[];
    // Winner for this game (could be computed from results).
    winnerCompetitorId?: string;
    // History of the game captured as a series of Turns.
    turns: Turn[];
    createdAt: Date;
}
