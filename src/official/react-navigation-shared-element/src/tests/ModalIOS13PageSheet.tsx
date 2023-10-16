import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets } from "@react-navigation/stack";
import * as React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { MainScreen, DetailScreen, createScreen } from "../screens";

const name = "ModalIOS13PageSheet";

const Stack = createSharedElementStackNavigator({
  name,
  debug: true,
});

const ModalDetailScreen = createScreen(DetailScreen, undefined, undefined, {
  modal: "sheet",
});

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      // Set react navigation 5 mode to modal
      // @ts-ignore:type {...} is not assignable to type
      mode="modal"
      screenOptions={() => ({
        headerShown: false,
        presentation: "modal",
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      })}
    >
      <Stack.Screen name={name} component={MainScreen} />
      <Stack.Screen name="Detail" component={ModalDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
