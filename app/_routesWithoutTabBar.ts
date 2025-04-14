export const ROUTES_WITHOUT_TAB_BAR = {
	game_in_progress: true,
} as const;

export type RoutesWithoutTabBar = keyof typeof ROUTES_WITHOUT_TAB_BAR;
