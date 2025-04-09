import { Tabs } from '@/components/ui/Tabs';
import { useMemo, useState } from 'react';
import { GameNames, GameTypes } from '@/types/types';

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

export type GameTabs = Exclude<keyof GameTypes, 'banks'> | 'all';

type Props = {
	selectedGameTab: GameTabs;
	onChange: (id: GameTabs) => void;
	includeAllTab?: boolean;
	showBottomBorder?: boolean;
}

export const GameTabSelector = ({selectedGameTab, onChange, includeAllTab, showBottomBorder}: Props) => {
	const tabs = useMemo(() => (includeAllTab ? [ALL_TAB, ...TABS] : TABS), [includeAllTab]);

	const handleTabOnChange = (id: string) => {
		onChange(id as GameTabs);
	};

	return (
		<Tabs
			tabs={tabs}
			selectedTabId={selectedGameTab as string}
			onChange={handleTabOnChange}
			showBottomBorder={showBottomBorder}
		/>
	);
};
