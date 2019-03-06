import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Foam extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username"
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
        />

        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    width: 300,
    marginVertical: 4,
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderRadius: 25,
    paddingHorizontal: 16,
    elevation: 4
  },
  buttonText: {
    fontSize: 16,
    backgroundColor: "#35337e",
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
    width: 180,
    marginVertical: 4,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: "center",
    elevation: 4,
    top: 4
  }
});
