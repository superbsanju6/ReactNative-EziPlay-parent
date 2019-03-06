import React from 'react';
import {Text, View} from "react-native";


// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TabNavigator } from "react-navigation";

import firstScreen from './FirstTab';
import SecondScreen from './SecondTab';


var MainScreenNavigator = TabNavigator({
    Tab1:{screen: firstScreen},
    Tab2:{screen: SecondScreen}
});

MainScreenNavigator.navigationOptions = {
    title: "Tab example"
};

export default MainScreenNavigator;