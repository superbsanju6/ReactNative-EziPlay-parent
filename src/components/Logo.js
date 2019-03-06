import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 170, height: 75,marginTop:33 }}
          source={require("../images/eziplay_logo_new.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .7,
    justifyContent: "center",
    alignItems: "center"
  }
});
