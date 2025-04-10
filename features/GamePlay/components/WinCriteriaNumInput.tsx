import { SIZES } from '@/constants/design-tokens';
import { Column } from '@/components/ui/Flex/Flex';
import React from 'react';
import styled from 'styled-components/native';
import { TextInput as RNTextInput } from 'react-native';
import { TextInputProps } from 'react-native';

const NumberInputBox = styled(Column).attrs({
	backgroundColor: 'white',
})`
    height: 184px;
    min-width: 184px;
    max-width: 200px;
    border: solid 1px darkgrey;
    border-radius: ${SIZES.MD.px};
`;

const NumberInput = styled(RNTextInput).attrs({})`
    height: 100%;
    font-size: 80px;
	padding: 16px;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

type Props = Pick<TextInputProps, 'value' | 'placeholder' | 'enterKeyHint'>

export const WinCriteriaNumInput = ({value, placeholder, enterKeyHint}: Props) => (
	<NumberInputBox
		flexShrink={1}
		horizontalAlignment="center"
	>
		<NumberInput value={value}
					 placeholder={placeholder}
					 enterKeyHint={enterKeyHint}
		/>
	</NumberInputBox>
);
