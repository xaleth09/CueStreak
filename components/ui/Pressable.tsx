import { GestureResponderEvent, Pressable as RNPressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { useMemo, useState } from 'react';

type PressableStyleProps = {
	backgroundColor?: string;

}

const PressableWrapper = styled(RNPressable)<PressableStyleProps>`
    border-radius: 4px;
	${({backgroundColor}) => `
		background-color: ${backgroundColor};
	`}
`;

type Props = PressableProps & PressableStyleProps & {
	onPressBackgroundColor?: string;
	disabledBackgroundColor?: string;
}

export const Pressable = ({
							  disabled,
							  backgroundColor = 'transparent',
							  onPressBackgroundColor = 'lightgray',
							  disabledBackgroundColor = 'darkgray',
							  onPressIn,
							  onPressOut,
							  children,
							  ...rest
						  }: Props
) => {
	const [pressed, setPressed] = useState(false);

	const handleOnPressIn = (event: GestureResponderEvent) => {
		setPressed(true);
		onPressIn?.(event);
	};

	const handleOnPressOut = (event: GestureResponderEvent) => {
		setPressed(false);
		onPressOut?.(event);
	};

	const bgColorFromProps = useMemo(() => {
		if(disabled) {
			return disabledBackgroundColor;
		}

		if(pressed) {
			return onPressBackgroundColor;
		}

		return backgroundColor;
	}, [disabled, pressed, backgroundColor, onPressBackgroundColor, disabledBackgroundColor]);

	return (
		<PressableWrapper
			disabled={disabled}
			backgroundColor={bgColorFromProps}
			onPressIn={handleOnPressIn}
			onPressOut={handleOnPressOut}
			{...rest}
		>
			{children}
		</PressableWrapper>
	);
};
