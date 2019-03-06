import React from "react";
import { Text, View, Button, Image } from "react-native";

export class FirstTab extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Tab1"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{fontSize:24}}>Tab 1</Text>
      </View>
    );
  }
}
