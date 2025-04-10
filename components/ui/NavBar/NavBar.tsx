import { Row } from '@/components/ui/Flex/Flex';
import React from 'react';
import styled from 'styled-components/native';
import { PublicRowProps } from '@/components/ui/Flex/types';
import { View } from 'react-native';
import { NAV_BAR_ICON_SIZE, NAV_BAR_MIN_HEIGHT } from '@/components/ui/NavBar/constants';

const IconPlaceHolder = styled(View)`
    height: ${NAV_BAR_ICON_SIZE};
    width: ${NAV_BAR_ICON_SIZE};
`;

const Bar = styled(Row).attrs({})`
    min-height: ${NAV_BAR_MIN_HEIGHT}px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Web */
    z-index: 10;
`;

type Props = Pick<PublicRowProps, 'horizontalAlignment'> & {
	children?: React.ReactNode;
}

export const NavBar = ({
						   horizontalAlignment = 'spaceBetween',
						   children
					   }: Props) => {

	return (
		<Bar flexGrow={1}
			 verticalAlignment="center"
			 horizontalAlignment={horizontalAlignment}
			 style={{
				 elevation: 3, // Android
				 shadowColor: 'orchid', // iOS
				 shadowOffset: {width: 0, height: 2},
				 shadowOpacity: 0.1,
				 shadowRadius: 4,
				 zIndex: 10,
			 }}
		>
			{children}
		</Bar>
	);
};
