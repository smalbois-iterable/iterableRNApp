/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Iterable, IterableConfig } from '@iterable/react-native-sdk';

const config = new IterableConfig();
config.pushIntegrationName = "com.iterablernapp";
config.autoPushRegistration = true;
config.logLevel = 1;

Iterable.initialize("<Api key>", config)
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'World!',
    }
  }
  onClick = () => {
    Iterable.setEmail("<email>")
  };
  render() {
    return (
        <View style={styles.container}>
          <Text>Hello {this.state.name}</Text>
          <Button
              onPress={() => {this.onClick()}}
              title='Click me'
              color='#4169E1'>
          </Button>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 50,
    padding: 15,
  }
});