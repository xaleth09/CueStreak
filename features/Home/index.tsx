import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Card } from '@/components/ui/Card';
import { TAB_BAR_HEIGHT } from '@/constants/Sizes';

const Layout = styled(View)`
    height: 100%;
`;

const Header = styled(View)`
	height: 30%;
	background-color: orchid;
`

export default function HomeScreen() {
	return (
		<SafeAreaView>
			<KeyboardAwareScrollView
				style={{
					height: '100%',
				}}
				contentContainerStyle={{
					height: '100%',
					paddingBottom: TAB_BAR_HEIGHT,
				}}>
				<Layout>
					<Header>

					</Header>
					<Card>
						<Text>fuck</Text>
					</Card>
				</Layout>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}
