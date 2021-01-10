import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../container/home'
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Navigator;
