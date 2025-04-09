import { Tabs } from '@/components/ui/Tabs';
import { useMemo, useState } from 'react';
import { GameNames } from '@/types/types';
import { ALL } from 'node:dns';

const DEFAULT_SELECTED_TAB_ID = '8ball';

const ALL_TAB = {
	id: 'all',
	label: 'All'
};

const TABS = [
	{
		id: '8ball',
		label: '8',
	},
	{
		id: '9ball',
		label: '9',
	},
	{
		id: '10ball',
		label: '10',
	},
	{
		id: 'onePocket',
		label: '1Pkt',
	},
	{
		id: 'straightPool',
		label: '14.1',
	},
];

export type GameTabs = Omit<GameNames, 'banks'> | 'all'

type Props = {
	selectedGame: GameTabs;
	onChange: (id: GameTabs) => void;
	includeAllTab?: boolean;
}

export const GameTabSelector = ({selectedGame, onChange, includeAllTab}: Props) => {
	const [selectedGameId, setSelectedGameId] = useState(selectedGame ?? DEFAULT_SELECTED_TAB_ID);

	const tabs = useMemo(() => (includeAllTab ? [ALL_TAB, ...TABS] : TABS), [includeAllTab]);

	const handleTabOnChange = (id: string) => {
		setSelectedGameId(id);
		onChange(id as GameTabs);
	};

	return (
		<Tabs
			tabs={tabs}
			defaultSelectedId={DEFAULT_SELECTED_TAB_ID}
			onChange={handleTabOnChange}
		/>
	);
};
