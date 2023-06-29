import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import AllRoutes from './src/screens/AllRoutes';
import Route from './src/screens/Route';

/**
 * https://reactnavigation.org/docs/typescript
 */
export type RootStackParamList = {
  AllRoutes: undefined;
  Route: { routeId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName='AllRoutes'>
          <Stack.Screen name='AllRoutes' component={AllRoutes} />
          <Stack.Screen name='Route' component={Route} />
        </Stack.Navigator>
      </NativeBaseProvider>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
