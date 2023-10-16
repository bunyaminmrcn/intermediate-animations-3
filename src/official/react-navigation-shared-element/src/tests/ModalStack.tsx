import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { MainScreen, DetailScreen, createScreen } from "../screens";

const name = "ModalStack";

const Stack = createSharedElementStackNavigator({
  name,
  debug: true,
});

const ModalDetailScreen = createScreen(DetailScreen, undefined, undefined, {
  modal: "full",
});

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        presentation: "modal",
      })}
    >
      <Stack.Screen name={name} component={MainScreen} />
      <Stack.Screen name="Detail" component={ModalDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
