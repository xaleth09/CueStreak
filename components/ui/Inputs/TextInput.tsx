import { View, Text, TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components/native';
import { Column } from '@/components/ui/Flex/Flex';
import { Description } from '@/components/ui/Typography';
import { SIZES } from '@/constants/design-tokens';

const StyledTextInput = styled(RNTextInput)`
    border: ${SIZES.ONE.px} solid darkgray;
    border-radius: ${SIZES.XXXS.px};
    padding: ${SIZES.XXS.px} ${SIZES.XS.px};
`;


type Props = {
	label?: string;
	value: string;
	placeholder?: string,
	onChange?: (value: string) => void;
	disabled?: boolean
	error?: string;
}

export const TextInput = ({
							  label,
							  value,
							  placeholder,
							  onChange,
							  disabled,
							  error,
						  }: Props) => {

	return (
		<Column gap={SIZES.XXXS.val}>
			{label ? <Description>{label}</Description> : null}
			<StyledTextInput
				editable={!disabled}
				multiline
				numberOfLines={4}
				maxLength={40}
				onChangeText={onChange}
				value={value}
				placeholder={placeholder}
			/>
			{error ? <Description>{error}</Description> : null}
		</Column>
	);
};
