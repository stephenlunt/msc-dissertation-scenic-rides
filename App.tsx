import { StatusBar } from "expo-status-bar";

import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

import customTheme from "./src/theme";
import Home from "./src/screens/Home";
import Route from "./src/screens/Route";
import Guidebook from "./src/screens/Guidebook";

/**
 * https://reactnavigation.org/docs/typescript
 */
export type RootStackParamList = {
  Home: undefined;
  Route: { id: string };
  Guidebook: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * https://reactnavigation.org/docs/themes/
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

export default function App() {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <NativeBaseProvider theme={customTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Route"
            component={Route}
            options={({ route }) => ({ title: route.params.id })}
          />
          <Stack.Screen name="Guidebook" component={Guidebook} />
        </Stack.Navigator>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
