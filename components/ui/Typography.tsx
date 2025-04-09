import React from 'react';
import { Text, TextProps } from 'react-native';
import styled from 'styled-components/native';

// Define a base typography interface
interface TypographyProps extends TextProps {
	color?: string;
	children: React.ReactNode;
}

// Base typography styled component
const BaseText = styled(Text)<TypographyProps>`
  color: ${({ color }) => color || '#000'};
  margin: 0;
  padding: 0;
`;

// Utility function to create typography components
const createTypography = (fontSize: number, fontWeight: string = 'normal') => {
	return styled(BaseText)`
        font-size: ${fontSize}px;
        font-weight: ${fontWeight};
        flex-shrink: 1;
	`;
};

// Typography Components
const H1 = createTypography( 48, 'bold');
const H2 = createTypography( 40, 'bold');
const H3 = createTypography( 32, 'bold');
const H4 = createTypography( 24, 'bold');
const Body = createTypography(16);
const Description = createTypography( 14);
const Link = styled(BaseText)`
  font-size: 16px;
  color: blue;
  text-decoration: underline;
`;

export {
	H1,
	H2,
	H3,
	H4,
	Body,
	Description,
	Link,
};

/*
TODO: STORYBOOK
 <View style={{ padding: 20 }}>
 <H1>Heading 1</H1>
 <H2>Heading 2</H2>
 <H3>Heading 3</H3>
 <H4>Heading 4</H4>
 <Body>This is body text.</Body>
 <Description>This is description text.</Description>
 </View>
*/
