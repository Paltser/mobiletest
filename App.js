import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/screens/SignIn";
import Example from "./src/screens/Example";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="App"
          component={Example}
          options={{ title: "Success!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
