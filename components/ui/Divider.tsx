import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { SIZES } from '@/constants/design-tokens';

type Props = {
	color?: string;
	direction?: 'vertical' | 'horizontal';
}

export const Divider = styled(View)<Props>`
    ${({color = 'dimgray', direction = 'horizontal'}) => `
		background-color: ${color};
		${direction === 'horizontal' ? `
			height: ${SIZES.ONE.px};
			flex-grow: 1;
			` : `
			flex-grow: 1;
			width: ${SIZES.ONE.px};
		`}
	`};
`;
