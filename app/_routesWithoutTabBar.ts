export const ROUTES_WITHOUT_TAB_BAR = {
    game_details: true,
    '(game_play)': true,
} as const;

export type RoutesWithoutTabBar = keyof typeof ROUTES_WITHOUT_TAB_BAR;
