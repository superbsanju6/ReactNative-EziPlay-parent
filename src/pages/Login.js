import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import LogoImage from "../components/Logo";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  updateValue(text, field) {
    if (field == "username") {
      this.state = {
        username: text
      };
    }

    if (field == "password") {
      this.state = {
        password: text
      };
    }
  }

  // login = () => {
  //   let collection = {};
  //   collection.username = this.state.username;
  //   collection.password = this.state.password;

  //   var url = "18.220.90.101:9000/api//parent-login?username="+this.state.username+"&password="+this.state.password;
  //   alert(url);

  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(response => console.log("Success:", JSON.stringify(response)))
  //     .catch(error => console.error("Error:", error));

  // }

  render() {
    return (
      <KeyboardAvoidingView>
        <ImageBackground
          source={require("../images/eziplay_parent_login_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <LogoImage />

            <View style={styles.container}>
              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Username"
                onChangeText={text => this.updateValue(text, "username")}
              />

              <TextInput
                style={styles.inputBox}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                onChangeText={text => this.updateValue(text, "password")}
              />
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#facd88", "#f8b286", "#f59183", "#f48882"]}
                style={{ marginTop: 12, borderRadius: 25, elevation: 4 }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ward")}
                >
                  {/* <TouchableOpacity onPress={() => this.Login}> */}
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </LinearGradient>

              <View style={styles.forgotPasswordTextCont}>
                <Text style={{ color: "#35337e" }}>Forgot Password?</Text>
              </View>
            </View>

            <Image
              source={require("../images/parent_image.png")}
              style={{
                width: 135,
                height: 105,
                marginLeft: 165,
                marginBottom: 15
              }}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  forgotPassordTextStyling: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
    justifyContent: "flex-start"
  },
  forgotPasswordTextCont: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    left: -90,
    top: 8
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
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
    width: 300,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: "center"
  }
});
