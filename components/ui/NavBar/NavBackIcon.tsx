import { IconSymbol, IconSymbolName } from '@/components/ui/Icons/IconSymbol';
import { SIZES } from '@/constants/design-tokens';
import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { NAV_BAR_ICON_SIZE } from '@/components/ui/NavBar/constants';

type LimitedIconName = Extract<IconSymbolName, 'chevron.backward' | 'xmark'>;

type Props = {
	variant?: 'back' | 'close';
	onPress?: () => void;

}

const getIconNameFromVariant = (variant: Props['variant']): LimitedIconName => {
	switch(variant) {
		case 'close':
			return 'xmark';
		case 'back':
		default:
			return 'chevron.backward';
	}
};

export const NavBackIcon = ({variant = 'back', onPress}: Props) => {
	const router = useRouter();

	const handleNavOnBackPress = useCallback(() => {
		onPress ? onPress() : router.back();
	}, [router, onPress]);

	const iconName = getIconNameFromVariant(variant);

	return (
		<IconSymbol
			name={iconName}
			size={NAV_BAR_ICON_SIZE}
			color={'black'}
			onPress={handleNavOnBackPress}
		/>
	);
};
