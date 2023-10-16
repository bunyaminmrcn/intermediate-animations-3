import * as React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Tests, Test } from "./components";

import DefaultStack from "./tests/DefaultStack";
import CardView from "./tests/CardView";
import ListView from "./tests/ListView";
import SlideFromRightIOS from "./tests/SlideFromRightIOS";
import ScaleFromCenterAndroid from "./tests/ScaleFromCenterAndroid";
import RevealFromBottomAndroid from "./tests/RevealFromBottomAndroid";
import FadeFromBottomAndroid from "./tests/FadeFromBottomAndroid";
import ForwardOnly from "./tests/ForwardOnly";
import BackOnly from "./tests/BackOnly";
import NestedStack from "./tests/NestedStack";

import NestedStack2 from "./tests/NestedStack2";
import ModalStack from "./tests/ModalStack";
import ModalSlideFromBottomIOS from "./tests/ModalSlideFromBottomIOS";
import ModalIOS13PageSheet from "./tests/ModalIOS13PageSheet";
import BottomTabs from "./tests/BottomTabs";
import BottomTabs2 from "./tests/BottomTabs2";
import MaterialTopTabs from "./tests/MaterialTopTabs";
import SafeAreaView from "./tests/SafeAreaView";
import PushPopSameScreen from "./tests/PushPopSameScreen";
import WrongIds from "./tests/WrongIds";
import ImageBackground from "./tests/ImageBackground";

if (Platform.OS === "android") {

  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor("transparent");
}

export default () => (
  <SafeAreaProvider>
    <Tests>
      <Test
        title="DefaultStack"
        //ComponentV4={DefaultStackV4}
        Component={DefaultStack}
      />
      <Test title="CardView" //ComponentV4={CardViewV4}
        Component={CardView} />
      <Test title="ListView" //ComponentV4={ListViewV4}
        Component={ListView} />

      <Test
        title="SlideFromRightIOS"
        //ComponentV4={SlideFromRightIOSV4}
        Component={SlideFromRightIOS}
      />
      <Test
        title="ScaleFromCenterAndroid"
        // ComponentV4={ScaleFromCenterAndroidV4}
        Component={ScaleFromCenterAndroid}
      />
      <Test
        title="RevealFromBottomAndroid"
        //ComponentV4={RevealFromBottomAndroidV4}
        Component={RevealFromBottomAndroid}
      />
      <Test
        title="FadeFromBottomAndroid"
        //ComponentV4={FadeFromBottomAndroidV4}
        Component={FadeFromBottomAndroid}
      />


      <Test
        title="ForwardOnly"
        //ComponentV4={ForwardOnlyV4}
        Component={ForwardOnly}
      />
      <Test title="BackOnly" //ComponentV4={BackOnlyV4}
        Component={BackOnly} />

      <Test
        title="PushPopSameScreen"
        ComponentV4={PushPopSameScreen}
        //Component={PushPopSameScreenV4}
        issue={["v4"]}
      />
      <Test
        title="NestedStack"
        //ComponentV4={NestedStackV4}
        Component={NestedStack}
      />
      <Test
        title="NestedStack2"
        //ComponentV4={NestedStack2V4}
        Component={NestedStack2}
      />
      <Test
        title="ModalStack"
        //ComponentV4={ModalStackV4}
        Component={ModalStack}
      />
      <Test
        title="ModalSlideFromBottomIOS"
        //ComponentV4={ModalSlideFromBottomIOSV4}
        Component={ModalSlideFromBottomIOS}
      />
      <Test
        title="ModalIOS13PageSheet"
        //ComponentV4={ModalIOS13PageSheetV4}
        Component={ModalIOS13PageSheet}
        issue
      />
      <Test
        title="BottomTabs"
        //ComponentV4={BottomTabsV4}
        Component={BottomTabs}
      />

      <Test
        title="BottomTabs2"
        //ComponentV4={BottomTabs2V4}
        Component={BottomTabs2}
      />
      <Test
        title="MaterialTopTabs"
        //ComponentV4={MaterialTopTabsV4}
        Component={MaterialTopTabs}
      />
      <Test
        title="SafeAreaView"
        //ComponentV4={SafeAreaViewV4}
        Component={SafeAreaView}
        issue
      />
      <Test title="WrongIds" //ComponentV4={WrongIdsV4} 
        Component={WrongIds} />
      <Test
        title="ImageBackground"
        //ComponentV4={ImageBackgroundV4}
        Component={ImageBackground}
        issue
      />

      {/*
      
      
      

     
      
      
      
     
      
      
      */}
    </Tests>
  </SafeAreaProvider>
);
