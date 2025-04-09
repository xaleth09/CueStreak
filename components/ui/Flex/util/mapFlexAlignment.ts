import { FlexProps } from '@/components/ui/Flex/types';
import { ViewStyle } from 'react-native';

const spatialMap = {
	left: 'flex-start',
	right: 'flex-end',
	top: 'flex-start',
	bottom: 'flex-end',
	center: 'center',
	baseline: 'baseline'
};

const distributionMap = {
	spaceBetween: 'space-between',
	spaceAround: 'space-around',
	spaceEvenly: 'space-evenly',
	stretch: 'stretch'
};

type SpatialKey = keyof typeof spatialMap;
type DistributionKey = keyof typeof distributionMap;

type FlexAlignmentKey = SpatialKey | DistributionKey;

function getFlexAlignmentValue(value?: FlexAlignmentKey): string | undefined {
	if(!value) return undefined;

	if(value in spatialMap) {
		return spatialMap[value as SpatialKey];
	}

	if(value in distributionMap) {
		return distributionMap[value as DistributionKey];
	}

	return undefined;
}

export function mapFlexAlignment({
									 direction,
									 reverse,
									 horizontalAlignment,
									 verticalAlignment,
									 wrapAlignment,
								 }: Pick<FlexProps, 'direction' | 'reverse' | 'horizontalAlignment' | 'verticalAlignment' | 'wrapAlignment'>): {
	flexDirection?: ViewStyle['flexDirection'];
	justifyContent?: ViewStyle['justifyContent'];
	alignItems?: ViewStyle['alignItems'];
	alignContent?: ViewStyle['alignContent'];
} {
	const justifyContentValueForDirection = direction === 'row' ? horizontalAlignment : verticalAlignment;
	const alignItemsValueForDirection = direction === 'row' ? verticalAlignment : horizontalAlignment;

	return {
		flexDirection: reverse ? `${direction}-reverse` as ViewStyle['flexDirection'] : direction,
		justifyContent: getFlexAlignmentValue(justifyContentValueForDirection) as ViewStyle['justifyContent'],
		alignItems: getFlexAlignmentValue(alignItemsValueForDirection) as ViewStyle['alignItems'],
		alignContent: getFlexAlignmentValue(wrapAlignment) as ViewStyle['alignContent'],
	};
}
