// In Navigation.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottonNavigation from "./bottomNavigation";
import AuthNavigation from "./AuthNavigation";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Auth"component={AuthNavigation} />
      <Stack.Screen name="Home" component={BottonNavigation} />
    </Stack.Navigator>
  );
}

export default Navigation;
