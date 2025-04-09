import { View } from 'react-native';
import styled from 'styled-components/native';

type PaddingValue = number | string;

export type PaddingProps = {
	padding?: PaddingValue;
	paddingVertical?: PaddingValue;
	paddingHorizontal?: PaddingValue;
	paddingTop?: PaddingValue;
	paddingRight?: PaddingValue;
	paddingBottom?: PaddingValue;
	paddingLeft?: PaddingValue;
}

export const Padding = styled(View).attrs<PaddingProps>(({
															 padding,
															 paddingVertical,
															 paddingHorizontal,
															 paddingTop,
															 paddingRight,
															 paddingBottom,
															 paddingLeft
														 }) => ({
	paddingTop: paddingTop ?? paddingVertical ?? padding,
	paddingBottom: paddingBottom ?? paddingVertical ?? padding,
	paddingLeft: paddingLeft ?? paddingHorizontal ?? padding,
	paddingRight: paddingRight ?? paddingHorizontal ?? padding,
}))``;

