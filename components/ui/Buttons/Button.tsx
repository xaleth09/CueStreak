import { BaseButton, BaseButtonProps } from '@/components/ui/Buttons/BaseButton';
import styled from 'styled-components/native';
import { Body } from '@/components/ui/Typography';
import { Row } from '@/components/ui/Flex/Flex';
import { SIZES } from '@/constants/design-tokens';
import { useMemo } from 'react';
import { getButtonColorsForVariant } from '@/components/ui/Buttons/utils';
import { IconSymbol } from '@/components/ui/Icons/IconSymbol';

const ButtonText = styled(Body)`
    padding-left: ${SIZES.XXXS.px};
    padding-right: ${SIZES.XXXS.px};
`;

type Props = Omit<BaseButtonProps, 'width' | 'height'> & {
	children: string;
	width?: 'full' | 'inline';
}

export const Button = ({
						   variant = 'solid-primary',
						   disabled,
						   onPress,
						   onPressIn,
						   onPressOut,
						   width = 'full',
						   children
					   }: Props) => {

	const {textColor} = useMemo(() => getButtonColorsForVariant({variant, disabled}), [variant, disabled]);

	return (
		<BaseButton
			variant={variant}
			disabled={disabled}
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			width={width === 'inline' ? 'auto' : '100%'}
		>
			<Row verticalAlignment="center" horizontalAlignment="spaceBetween">
				<IconSymbol size={12} name={'chevron.left'} color={textColor} />
				<ButtonText
					numberOfLines={1}
					ellipsizeMode="tail"
					color={textColor}
				>
					{children}
				</ButtonText>
				<IconSymbol size={12} name={'chevron.right'} color={textColor} />
			</Row>
		</BaseButton>
	);
};
