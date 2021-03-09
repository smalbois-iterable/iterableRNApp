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
import {requestNotifications} from 'react-native-permissions';
import { iterableAPIKey } from './Config';

const config = new IterableConfig();
config.pushIntegrationName = "com.iterablernapp";
config.autoPushRegistration = true;
config.logLevel = 1;

Iterable.initialize(iterableAPIKey, config)

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'World!',
    }


      /* const config = new IterableConfig();
      config.pushIntegrationName = "com.iterablernapp";
      config.autoPushRegistration = true;
      config.logLevel = 1;

      Iterable.initialize("0c7d3bb37e9e4f9b90fb8b2b7c5db3a1", config)

       */
  }

  componentDidMount() {
    /*
    requestNotifications(['alert', 'sound']).then(({status, settings}) => {
    });

     */

  }

  onClick = () => {
      Iterable.setEmail("seb.malbois+rn5@iterable.com")
  };

  render() {
    return (
        <View style={styles.container}>
          <Text>Hello {this.state.name}</Text>
          <Button
              onPress={() => {this.onClick()}}
              title='Click me!'
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