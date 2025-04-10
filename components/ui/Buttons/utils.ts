import { ButtonVariant } from '@/components/ui/Buttons/BaseButton';

type GetButtonColorsOptions = {
	variant: ButtonVariant;
	disabled?: boolean | null;
};

const themeColors = {
	primary: 'royalblue',
	secondary: 'limegreen',
	tertiary: 'slategray',
	destructive: 'crimson',
	disabledText: 'gray',
	disabledBackground: '#e0e0e0',
	disabledBorder: '#c0c0c0',
};

export const getButtonColorsForVariant = ({ variant, disabled = false }: GetButtonColorsOptions) => {
	const [style, tone] = variant.split('-') as ['solid' | 'outline' | 'ghost', keyof typeof themeColors];
	const baseColor = themeColors[tone];

	if (disabled) {
		return {
			borderWidth: style === 'outline' ? 1 : 0,
			textColor: themeColors.disabledText,
			backgroundColors: {
				static: themeColors.disabledBackground,
				pressed: themeColors.disabledBackground,
			},
			borderColor: style === 'outline' ? themeColors.disabledBorder : 'transparent',
		};
	}

	return {
		borderWidth: style === 'solid' || style === 'ghost' ? 0 : 1,
		textColor: style === 'solid' ? 'white' : baseColor,
		backgroundColors: {
			static: style === 'solid' ? baseColor : 'transparent',
			pressed: style === 'solid' ? darken(baseColor) : 'rgba(0,0,0,0.05)',
		},
		borderColor: style === 'outline' ? baseColor : 'transparent',
	};
};

// You can use a helper like this to simulate `darken` without a lib:
function darken(color: string): string {
	// naive version for demo purposes
	if (color === 'royalblue') return '#204ecf';
	if (color === 'mediumseagreen') return '#2e8b57';
	if (color === 'slategray') return '#5a6770';
	if (color === 'crimson') return '#a00020';
	return color;
}
