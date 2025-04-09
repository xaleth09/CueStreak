import React from 'react';
import { Column } from '@/components/ui/Flex/Flex';
import { Button } from '@/components/ui/Buttons/Button';
import { ButtonVariant } from '@/components/ui/Buttons/BaseButton';

const ALL_BUTTON_VARIANTS: ButtonVariant[] = [
	'solid-primary', 'solid-secondary', 'solid-tertiary', 'solid-destructive',
	'outline-primary', 'outline-secondary', 'outline-tertiary', 'outline-destructive',
	'ghost-primary', 'ghost-secondary', 'ghost-tertiary', 'ghost-destructive',
];

export const AllButtonVariantsDemo = () => {
	return (
		<Column gap={8} padding={16}>
			{ALL_BUTTON_VARIANTS.map(variant => (
				<Button
					key={variant}
					variant={variant}
					onPress={() => console.log(`Pressed ${variant}`)}
				>
					{variant}
				</Button>
			))}
		</Column>
	);
};
