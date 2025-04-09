import { View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import React, { useMemo } from 'react';
import { BaseFlexProps, FlexProps, PublicColumnProps, PublicRowProps } from '@/components/ui/Flex/types';
import { mapFlexAlignment } from '@/components/ui/Flex/util/mapFlexAlignment';

const StyledFlexBox = styled(View)<BaseFlexProps & {
	flexDirection?: ViewStyle['flexDirection'];
	justifyContent?: ViewStyle['justifyContent'];
	alignItems?: ViewStyle['alignItems'];
	alignContent?: ViewStyle['alignContent'];
}>`
    ${({
           flexDirection,
           justifyContent,
           alignItems,
           alignContent,
           flexGrow,
           flexShrink,
           flexBasis,
           wrap,
           gap,
           rowGap,
           columnGap,
           backgroundColor
       }) => `
    ${flexDirection ? `flex-direction: ${flexDirection};` : ''}
    ${justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${alignItems ? `align-items: ${alignItems};` : ''}
    ${alignContent ? `align-content: ${alignContent};` : ''}
    ${wrap ? `flex-wrap: ${wrap};` : ''}
    ${flexGrow !== undefined ? `flex-grow: ${flexGrow};` : ''}
    ${flexShrink !== undefined ? `flex-shrink: ${flexShrink};` : ''}
    ${flexBasis !== undefined ? `flex-basis: ${typeof flexBasis === 'number' ? `${flexBasis}px` : flexBasis};` : ''}
    ${gap !== undefined ? `gap: ${gap}px;` : ''}
    ${rowGap !== undefined ? `row-gap: ${rowGap}px;` : ''}
    ${columnGap !== undefined ? `column-gap: ${columnGap}px;` : ''}
    ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
  `}
`;

const Box = ({
				 direction,
				 reverse,
				 horizontalAlignment,
				 verticalAlignment,
				 wrapAlignment,
				 wrap,
				 flexGrow,
				 flexShrink,
				 flexBasis,
				 padding,
				 paddingVertical,
				 paddingHorizontal,
				 paddingTop,
				 paddingRight,
				 paddingBottom,
				 paddingLeft,
				 gap,
				 rowGap,
				 columnGap,
				 backgroundColor,
				 style,
				 className,
				 children,
			 }: FlexProps) => {

	const {
		flexDirection,
		justifyContent,
		alignItems,
		alignContent
	} = useMemo(() => mapFlexAlignment({
			direction,
			reverse,
			horizontalAlignment,
			verticalAlignment,
			wrapAlignment
		}) ?? {},
		[direction, reverse, horizontalAlignment, verticalAlignment, wrapAlignment]
	);


	return (
		<StyledFlexBox
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			alignContent={alignContent}
			wrap={wrap}
			flexGrow={flexGrow}
			flexShrink={flexShrink}
			flexBasis={flexBasis}
			padding={padding}
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}
			paddingTop={paddingTop}
			paddingRight={paddingRight}
			paddingBottom={paddingBottom}
			paddingLeft={paddingLeft}
			gap={gap}
			rowGap={rowGap}
			columnGap={columnGap}
			backgroundColor={backgroundColor}
			style={style}
			className={className}
		>
			{children}
		</StyledFlexBox>
	);
};

export const Column = (props: PublicColumnProps) => (
	<Box direction="column" {...props} />
);
export const Row = (props: PublicRowProps) => (
	<Box direction="row" {...props} />
);
