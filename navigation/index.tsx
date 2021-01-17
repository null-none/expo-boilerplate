import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Root } from "native-base";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/profile/SettingsScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import AppScreen from "../screens/AppScreen";
import AppReducer from "../AppReducer";

const Stack = createStackNavigator<RootStackParamList>();
const store = createStore(AppReducer, applyMiddleware(thunk));

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Provider store={store}>
      <Root>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="App" component={AppScreen} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!", headerShown: false }}
          />
        </Stack.Navigator>
      </Root>
    </Provider>
  );
}
