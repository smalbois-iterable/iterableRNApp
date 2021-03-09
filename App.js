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
import { iterableAPIKey, Email } from './config';

const config = new IterableConfig();
config.pushIntegrationName = "com.iterablernapp";
config.autoPushRegistration = true;
config.logLevel = 1;

Iterable.initialize(iterableAPIKey, config)

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: Email,
    }
  }

  componentDidMount() {
    requestNotifications(['alert', 'sound']).then(({status, settings}) => {
    });

  }

  onClick = () => {

  const config = new IterableConfig();
  config.pushIntegrationName = "com.iterablernapp";
  config.autoPushRegistration = true;
  config.logLevel = 1;

  Iterable.initialize(iterableAPIKey, config)
  Iterable.setEmail(Email)
};

render() {
return (
    <View style={styles.container}>
      <Text>Email: {this.state.email}</Text>
      <Button
          onPress={() => {this.onClick()}}
          title='Set me!'
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