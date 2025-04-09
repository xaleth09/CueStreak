import { Row } from '@/components/ui/Flex/Flex';
import React from 'react';
import styled from 'styled-components/native';
import { SIZES } from '@/constants/design-tokens';

const Bar = styled(Row).attrs({})`
    min-height: ${SIZES.XL.px};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Web */
    z-index: 10;
`;

type Props = {
	children?: React.ReactNode;
}

export const NavBar = ({children}: Props) => {

	return (
		<Bar flexGrow={1}
			 verticalAlignment="center"
			 horizontalAlignment="spaceBetween"
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
