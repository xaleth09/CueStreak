import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import styled from "styled-components/native";

import {KeyboardAvoidingView} from "react-native-keyboard-controller";

const Layout = styled(View)`
    height: 100%;
    flex-grow: 1;
    background-color: cornflowerblue;
`

export default function Explore() {
  return (
      <SafeAreaView>
          <KeyboardAvoidingView>
              <Layout>
                  <Text>rawr</Text>
              </Layout>
          </KeyboardAvoidingView>
      </SafeAreaView>
  );
}
