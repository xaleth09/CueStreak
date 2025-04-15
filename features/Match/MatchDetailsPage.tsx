import { BasePage } from '@/components/ui/PageLayouts/BasePage';
import { AllButtonVariantsDemo } from '@/components/ui/Buttons/TEMP_ButtonList';
import React, { useCallback } from 'react';
import { NavBar } from '@/components/ui/NavBar/NavBar';
import { NavBackIcon } from '@/components/ui/NavBar/NavBackIcon';

type Props = {}

export default function MatchDetailsPage({}: Props) {
	const navBar = useCallback(() => (
		<NavBar>
			<NavBackIcon variant='close'/>
		</NavBar>
	), []);
	return (
		<BasePage renderNavBarComponent={navBar}>
			<AllButtonVariantsDemo/>
		</BasePage>
	);
};
