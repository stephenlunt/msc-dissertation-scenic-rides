/**
 * Last modified: 25-07-2023
 * Modifying author: Stephen Lunt
 * File description: App.tsx is the entrypoint file for the React Native application, it further
 * controls the app screen routing and theming.
 */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

import customTheme from "./src/theme";
import Home from "./src/screens/Home";
import BusRoute from "./src/screens/BusRoute";
import Guidebook from "./src/screens/Guidebook";
import Attraction from "./src/screens/Attraction";
import About from "./src/screens/About";
import Help from "./src/screens/Help";

/**
 * The RootStackParamList exports the type signatures of each route. It's set up
 * was modified from the following documentation.
 *
 * Source URL: https://reactnavigation.org/docs/typescript
 */
export type RootStackParamList = {
  Home: undefined;
  BusRoute: { id: string };
  Guidebook: { id: string };
  Attraction: { id: number; routeId: string };
  Stop: { id: number };
  About: undefined;
  Help: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * This object controls the theming of the application header and
 * colours scheme. It's set up is modified from the following documentation.
 *
 * Source URL: https://reactnavigation.org/docs/themes/
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffffff",
    card: "rgb(225, 37, 25)",
    background: "#ffffff",
    text: "#ffffff",
    border: "transparent"
  }
};

/**
 * Application wrappers from React Navigator and Native Base UI. Set up is discussed in
 * section 3.6.3 of written dissertation.
 *
 * Source documentation URLs:
 * - https://reactnavigation.org/docs/hello-react-navigation
 * - https://docs.nativebase.io/setup-provider
 *
 * @returns The entrypoint React component.
 */
export default function App() {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <NativeBaseProvider theme={customTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: "Scenic Rides" }} />
          <Stack.Screen name="BusRoute" component={BusRoute} options={({ route }) => ({ title: route.params.id })} />
          <Stack.Screen name="Guidebook" component={Guidebook} />
          <Stack.Screen name="Attraction" component={Attraction} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
