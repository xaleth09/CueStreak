import { Tabs } from '@/components/ui/Tabs';
import { useMemo, useState } from 'react';
import { GameNames, GameTypes } from '@/types/types';

export const HEADER_TAB_MAP = {
	'8ball': '8 Ball',
	'9ball': '9 Ball',
	'10ball': '10 Ball',
	'onePocket': 'One Pocket',
	'straightPool': 'Straight Pool',
};

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

export type GameTabKey = Exclude<keyof GameTypes, 'banks'> | 'all';

type Props = {
	selectedGameTab: GameTabKey;
	onChange: (id: GameTabKey) => void;
	includeAllTab?: boolean;
	showBottomBorder?: boolean;
}

export const GameTabSelector = ({selectedGameTab, onChange, includeAllTab, showBottomBorder}: Props) => {
	const tabs = useMemo(() => (includeAllTab ? [ALL_TAB, ...TABS] : TABS), [includeAllTab]);

	const handleTabOnChange = (id: string) => {
		onChange(id as GameTabKey);
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
