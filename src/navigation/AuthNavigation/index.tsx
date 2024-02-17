// In AuthNavigation.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Sigup, MainAuth } from "../../screens/Auth";

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainAuth"
        component={MainAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Sigup} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
