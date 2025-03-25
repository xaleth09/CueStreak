import { View } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

const Layout = styled(View)<{
	variant: Props['variant']
	$padding: Props['padding']
}>`
    border-radius: 8px;
    ${({variant, $padding}) => `
        padding: ${$padding}px;
        border: ${variant === 'solid' ? 'solid 1px black' : 'none'};        
        background-color: ${variant === 'solid' ? 'white' : 'none'};
    `}
`;

type Props = {
	padding?: number
	variant?: 'solid' | 'ghost';
	children?: React.ReactNode;
}

export const Card = ({variant = 'solid', padding = 12, children}: Props) => {

	return (
		<Layout variant={variant} $padding={padding}>
			{children}
		</Layout>
	);
};
