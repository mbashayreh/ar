import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {AppRegistry} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () => {


  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
          </SafeAreaView>
          </SafeAreaProvider>
  );
};
AppRegistry.registerComponent('MyApplication', () => App);

export default App;
