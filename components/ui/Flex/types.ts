import { PaddingProps } from '@/components/ui/Padding';

export type Distribution = 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
export type HorizontalAlignment = 'left' | 'center' | 'right';
export type VerticalAlignment = 'top' | 'center' | 'bottom';
export type CrossAxisAlignment = 'center' | 'stretch' | 'baseline';
export type FlexDirection = 'row' | 'column';

export type BaseFlexProps = PaddingProps & {
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    reverse?: boolean;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | string;
    padding?: number;
    gap?: number;
    rowGap?: number;
    columnGap?: number;
    backgroundColor?: string;
    children?: React.ReactNode;
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    className?: string;
};

type RowAlignmentProps = {
    direction: 'row';
    horizontalAlignment?: HorizontalAlignment | Distribution;
    verticalAlignment?: VerticalAlignment | CrossAxisAlignment;
    wrapAlignment?: VerticalAlignment | Distribution;
};

type ColumnAlignmentProps = {
    direction: 'column';
    horizontalAlignment?: HorizontalAlignment | CrossAxisAlignment;
    verticalAlignment?: VerticalAlignment | Distribution;
    wrapAlignment?: HorizontalAlignment | Distribution;
};


export type FlexProps = (RowAlignmentProps | ColumnAlignmentProps) & BaseFlexProps;

type RowProps = RowAlignmentProps & BaseFlexProps
type ColumnProps = ColumnAlignmentProps & BaseFlexProps;

export type PublicColumnProps = Omit<ColumnProps, 'direction'> & {
	direction?: never;
};

export type PublicRowProps = Omit<RowProps, 'direction'> & {
	direction?: never;
};
