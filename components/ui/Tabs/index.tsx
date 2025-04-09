import { Row } from '@/components/ui/Flex/Flex';
import { useMemo, useState } from 'react';
import { Tab } from '@/components/ui/Tabs/Tab';
import styled from 'styled-components/native';
import { View } from 'react-native';
import React from 'react';
import { SIZES } from '@/constants/design-tokens';

const Divider = styled(View)`
    height: 82%;
    width: 2px;
    background-color: dimgray;
`;

const RoundedRow = styled(Row)`
    overflow: hidden;
    border: 0 solid black;
    border-top-width: ${SIZES.ONE.px};
`;

type TabProps = {
	id: string;
	label: string,
}

type Props = {
	tabs: TabProps[];
	onChange?: (id: string) => void;
	defaultSelectedId?: string;
	backgroundColor?: string;
	pressedTabColor?: string;
	selectedTabColor?: string;
	selectedPressedTabColor?: string;
}

export const Tabs = ({
						 tabs,
						 onChange,
						 defaultSelectedId,
						 backgroundColor = 'white',
						 selectedTabColor = 'dodgerblue',
						 pressedTabColor,
						 selectedPressedTabColor = 'royalblue',
					 }: Props) => {
	const [selected, setSelected] = useState<string | undefined>(defaultSelectedId);

	const handleOnPress = (id: string) => {
		setSelected(id);
		onChange?.(id);
	};

	const childrenWithDividers = useMemo(() => {
		return tabs.flatMap(({id, label}, idx) => (
			<React.Fragment key={id}>
				<Tab
					id={id}
					onPress={handleOnPress}
					backgroundColor={selected === id ? selectedTabColor : backgroundColor}
					pressedBackgroundColor={selected === id ? selectedPressedTabColor : pressedTabColor}
				>
					{label}
				</Tab>
				{idx !== tabs.length - 1 ? (
					<Divider key={`divider-${idx}`}/>
				) : null}
			</React.Fragment>
		));
	}, [tabs, selected]);

	return (
		<RoundedRow flexGrow={1} verticalAlignment="center" backgroundColor={backgroundColor}>
			{childrenWithDividers}
		</RoundedRow>
	);
};
