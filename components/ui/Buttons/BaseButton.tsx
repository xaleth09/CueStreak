import { PressableProps, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { SIZES } from '@/constants/design-tokens';
import { useMemo, useState } from 'react';
import { getButtonColorsForVariant } from '@/components/ui/Buttons/utils';

export type ButtonVariant =
	| 'solid-primary' | 'solid-secondary' | 'solid-tertiary' | 'solid-destructive'
	| 'outline-primary' | 'outline-secondary' | 'outline-tertiary' | 'outline-destructive'
	| 'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'ghost-destructive';

export type BaseButtonProps = Pick<PressableProps,
	| 'disabled'
	| 'hitSlop'
	| 'accessibilityHint'
	| 'children'
> & {
	onPressIn?: () => void;
	onPress: () => void;
	onPressOut?: () => void;
	variant?: ButtonVariant;
	height?: number;
	width?: number | string;
	paddingHorizontal?: number;
	paddingVertical?: number;
	borderRadius?: number;
}

type BaseButtonStyleProps = {
	backgroundColor: string;
	textColor: string;
	height?: number;
	width?: string;
	paddingHorizontal: number;
	paddingVertical: number;
	borderColor: string;
	borderWidth: number;
	borderRadius: number;
}

const BaseButtonComponent = styled(Pressable)<BaseButtonStyleProps>`
    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;

    ${({
           backgroundColor,
           textColor,
           height,
           width,
           paddingHorizontal,
           paddingVertical,
           borderWidth,
           borderColor,
           borderRadius,
       }) => `
        background-color: ${backgroundColor};
       	color: ${textColor};
       	${height ? `height: ${height}px;` : ''}
       	width: ${width ? width : 'auto'};
        padding: ${paddingVertical}px ${paddingHorizontal}px;
        border-style: solid;
        border-width: ${borderWidth}px;
        border-color: ${borderColor};
    	border-radius: ${borderRadius}px;
    `}
`;

export const BaseButton = ({
							   variant = 'solid-primary',
							   disabled,
							   onPress,
							   onPressIn,
							   onPressOut,
							   height,
							   width,
							   paddingHorizontal = SIZES.XS.val,
							   paddingVertical = SIZES.XXS.val,
							   borderRadius = SIZES.MD.val,
							   children
						   }: BaseButtonProps) => {
	const [pressed, setPressed] = useState(false);

	const handleOnPressIn = () => {
		setPressed(true);
		onPressIn?.();
	};

	const handleOnPress = () => {
		onPress();
	};

	const handleOnPressOut = () => {
		setPressed(false);
		onPressOut?.();
	};

	const {
		textColor,
		borderWidth,
		backgroundColors,
		borderColor,
	} = useMemo(() => getButtonColorsForVariant({variant, disabled}), [variant]);

	const backgroundColor = pressed ? backgroundColors.pressed : backgroundColors.static;

	return (
		<BaseButtonComponent
			disabled={disabled}
			onPressIn={handleOnPressIn}
			onPress={handleOnPress}
			onPressOut={handleOnPressOut}
			backgroundColor={backgroundColor}
			textColor={textColor}
			height={height}
			width={typeof width == 'number' ? `${width}px` : width}
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}
			borderWidth={borderWidth}
			borderColor={borderColor}
			borderRadius={borderRadius}
		>
			{children}
		</BaseButtonComponent>
	);
};
