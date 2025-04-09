import { Row } from '@/components/ui/Flex/Flex';
import { useMemo } from 'react';
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

const RoundedRow = styled(Row)<{ showBottomBorder?: boolean }>`
    overflow: hidden;
    border: 0 solid black;
    border-top-width: ${SIZES.ONE.px};
    ${({showBottomBorder}) => showBottomBorder ? `
    border-bottom-width: ${SIZES.ONE.px};
    ` : ''}
`;

type TabProps = {
	id: string;
	label: string,
}

type Props = {
	tabs: TabProps[];
	selectedTabId: string;
	onChange?: (id: string) => void;
	backgroundColor?: string;
	pressedTabColor?: string;
	selectedTabColor?: string;
	selectedPressedTabColor?: string;
	showBottomBorder?: boolean;
}

export const Tabs = ({
						 tabs,
						 selectedTabId,
						 onChange,
						 backgroundColor = 'white',
						 selectedTabColor = 'dodgerblue',
						 pressedTabColor,
						 selectedPressedTabColor = 'royalblue',
						 showBottomBorder,
					 }: Props) => {

	const handleOnPress = (id: string) => {
		onChange?.(id);
	};

	const childrenWithDividers = useMemo(() => {
		return tabs.flatMap(({id, label}, idx) => (
			<React.Fragment key={id}>
				<Tab
					id={id}
					onPress={handleOnPress}
					backgroundColor={selectedTabId === id ? selectedTabColor : backgroundColor}
					pressedBackgroundColor={selectedTabId === id ? selectedPressedTabColor : pressedTabColor}
				>
					{label}
				</Tab>
				{idx !== tabs.length - 1 ? (
					<Divider key={`divider-${idx}`}/>
				) : null}
			</React.Fragment>
		));
	}, [tabs, selectedTabId]);

	return (
		<RoundedRow flexGrow={1}
					verticalAlignment="center"
					backgroundColor={backgroundColor}
					showBottomBorder={showBottomBorder}
		>
			{childrenWithDividers}
		</RoundedRow>
	);
};
