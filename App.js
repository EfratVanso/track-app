import React from "react";
import { createStackNavigator } from 'react-navigation-stack'
import {  createBottomTabNavigator  } from 'react-navigation-tabs'

import {
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";

import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const switchNavigator = //nested navigation
createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignUpScreen,
      Signin: SignInScreen,
    }),

    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
          TrackList: TrackListScreen,
          TrackDetail: TrackDetailScreen,
        }),

        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});

export default createAppContainer(switchNavigator);

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
