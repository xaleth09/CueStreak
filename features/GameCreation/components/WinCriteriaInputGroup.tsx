import { SIZES } from '@/constants/design-tokens';
import { H3 } from '@/components/ui/Typography';
import { Column, Row } from '@/components/ui/Flex/Flex';
import { WinCriteriaNumInput } from '@/features/GameCreation/components/WinCriteriaNumInput';
import React from 'react';

type Props = {
	label: string;
	placeholder: string;
	primaryInputValue: string;
	handicappedInputValue: string;
	showHandicappedInput: boolean,
}

export const WinCriteriaInputGroup = ({
										  label,
										  placeholder,
										  primaryInputValue,
										  handicappedInputValue,
										  showHandicappedInput,
									  }: Props) => {

	return (
		<Column flexGrow={1} flexShrink={1} gap={SIZES.XXXS.val}>
			<H3>{label}</H3>
			<Row columnGap={SIZES.SM.val} horizontalAlignment="spaceBetween">
				<WinCriteriaNumInput value={primaryInputValue}
									 placeholder={placeholder}
									 enterKeyHint={showHandicappedInput ? 'next' : 'done'}
				/>
				{showHandicappedInput ? (
					<WinCriteriaNumInput value={handicappedInputValue}
										 placeholder={placeholder}
										 enterKeyHint={'done'}
					/>
				) : null}
			</Row>
		</Column>
	);
};
