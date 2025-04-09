import { BaseButton, BaseButtonProps } from '@/components/ui/Buttons/BaseButton';
import { Row } from '@/components/ui/Flex/Flex';
import { SIZES } from '@/constants/design-tokens';
import { IconSymbol, IconSymbolName } from '@/components/ui/Icons/IconSymbol';
import React, { useMemo } from 'react';
import { getButtonColorsForVariant } from '@/components/ui/Buttons/utils';

type Props = Omit<BaseButtonProps,
	| 'width'
	| 'height'
	| 'borderRadius'
	| 'paddingHorizontal'
	| 'paddingVertical'
> & {
	iconName: IconSymbolName;
	size?: 'sm' | 'md' | 'lg'
}

export const IconButton = ({
							   variant = 'solid-secondary',
							   iconName,
							   size = 'lg',
							   disabled,
							   onPress,
							   onPressIn,
							   onPressOut
						   }: Props) => {

	const iconSize = useMemo(() => {
		switch(size) {
			case 'sm':
				return SIZES.SM.val;
			case 'md':
				return SIZES.MD.val;
			case 'lg':
				return SIZES.MD.val;
		}
	}, [size]);

	const buttonSize = useMemo(() => {
		switch(size) {
			case 'sm':
				return SIZES.LG.val;
			case 'md':
				return SIZES.XL.val;
			case 'lg':
				return 72; //SIZES.XXL.val;
		}
	}, [size]);

	const {textColor} = useMemo(() => getButtonColorsForVariant({variant, disabled}), [variant]);

	return (
		<BaseButton
			variant={variant}
			disabled={disabled}
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			height={buttonSize}
			width={buttonSize}
			paddingHorizontal={0}
			paddingVertical={0}
			borderRadius={999}
		>
			<Row flexGrow={1} verticalAlignment="center" horizontalAlignment="center">
				<IconSymbol size={iconSize} name={iconName} color={textColor}/>
			</Row>
		</BaseButton>
	);
};
