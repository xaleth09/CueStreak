import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { TAB_BAR_HEIGHT } from '@/constants/Sizes';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Column, Row } from '../Flex/Flex';
import { BaseFlexProps } from '@/components/ui/Flex/types';
import { SIZES } from '@/constants/design-tokens';
import { View } from 'react-native';
import styled from 'styled-components/native';

const BASE_BOTTOM_FAB_ADJUSTMENT = 80;

const FloatingActionButton = styled(View)<{bottomPosition: number}>`
	position: absolute;
	right: 32px;
	${({bottomPosition}) => `
		bottom: ${bottomPosition};
	`}
`

type BaseProps = Pick<BaseFlexProps, 'gap' | 'columnGap' | 'rowGap'> & {
	hasTabBar?: boolean;
	paddingVertical?: number;
	paddingHorizontal?: number;
	renderNavBarComponent?: () => React.ReactNode;
	renderFABComponent?: () => React.ReactNode;
	renderBottomComponent?: () => React.ReactNode;
	children: React.ReactNode;
};

type Props = BaseProps & { padding?: number } | BaseProps & {}

export const BasePage = ({
							 hasTabBar,
							 paddingHorizontal = SIZES.SM.val,
							 paddingVertical = SIZES.XS.val,
							 gap,
							 columnGap,
							 rowGap,
							 renderNavBarComponent,
							 renderFABComponent,
							 renderBottomComponent,
							 children
						 }: Props) => {

	const {bottom} = useSafeAreaInsets();

	return (
		<SafeAreaView style={{flex: 1}}>
			{renderNavBarComponent ? (
				<Row paddingHorizontal={paddingHorizontal}>
					{renderNavBarComponent?.()}
				</Row>
			) : null}
			<KeyboardAwareScrollView
				style={{flex: 1}}
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: hasTabBar ? TAB_BAR_HEIGHT : 0,
				}}
			>
				<Column paddingVertical={paddingVertical}
						paddingHorizontal={paddingHorizontal}
						gap={gap}
						columnGap={columnGap}
						rowGap={rowGap}
						flexGrow={1}
				>
					{children}
				</Column>
			</KeyboardAwareScrollView>
			{renderBottomComponent ? (
				<Column style={{marginBottom: hasTabBar ? TAB_BAR_HEIGHT : 0}}>
					{renderBottomComponent?.()}
				</Column>
			) : null}
			<FloatingActionButton bottomPosition={hasTabBar ? TAB_BAR_HEIGHT + bottom : BASE_BOTTOM_FAB_ADJUSTMENT + bottom}>
				{renderFABComponent?.()}
			</FloatingActionButton>
		</SafeAreaView>
	);
};
