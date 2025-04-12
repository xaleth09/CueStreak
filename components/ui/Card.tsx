import styled from 'styled-components/native';
import React from 'react';
import { Column } from './Flex/Flex';
import { FlexProps } from '@/components/ui/Flex/types';
import { SIZES } from '@/constants/design-tokens';

type Props = Pick<FlexProps, 'padding' | 'paddingHorizontal' | 'paddingVertical' | 'gap' | 'rowGap' | 'columnGap'> & {
	width?: 'full' | 'inline'
	variant?: 'solid' | 'ghost';
	children?: React.ReactNode;
}

const Layout = styled(Column)<{
	variant: Props['variant']
	$width: Props['width']
}>`
    min-height: ${SIZES.XXL.px};
    border-radius: ${SIZES.XXS.px};
    overflow: hidden;
    ${({variant, $width}) => `
        border: ${variant === 'solid' ? `solid ${SIZES.ONE.px} black` : 'none'};        
        background-color: ${variant === 'solid' ? 'white' : 'none'};
        ${$width === 'full' ? 'flexGrow: 1;' : ''}
    `}
`;

export const Card = ({variant = 'solid', width = 'full', padding = SIZES.XS.val, children}: Props) => {
	return (
		<Layout variant={variant} padding={padding} $width={width}>
			{children}
		</Layout>
	);
};
