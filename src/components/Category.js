import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2, zIndex: 4 }}>
          <Image style={styles.mainImage} source={this.props.imageUri} />
        </View>

        <View style={styles.textCardView}>
          <Text style={styles.txtHeading}>
            {this.props.heading}
          </Text>

          <Text style={styles.txtParagraphUnderHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum{" "}
          </Text>
        </View>

        <LinearGradient
          colors={["#2279bc", "#2765aa", "#2e4d96", "#35337e"]}
          style={styles.gradientArrow}
        >
          <Image
            style={styles.arrowImage}
            source={require("../images/arrow.png")}
          />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    margin: 5
  },
  gradientArrow: {
    marginTop: 12,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 6,
    top: 130,
    left: 170,
    elevation: 4,
    padding: 8
  },
  arrowImage: {
    resizeMode: "center",
    borderColor: "#dddddd",
    width: 10,
    height: 10
  },
  textCardView: {
    flex: 1,
    position: "absolute",
    zIndex: 5,
    width: 170,
    top: 122,
    backgroundColor: "#fff",
    borderColor: "#dddddd",
    elevation: 2,
    borderRadius: 10,
    padding: 8,
    left: 9
  },
  mainImage: {
    width: 190,
    height: 190,
    resizeMode: "center",
    borderColor: "#dddddd",
    borderRadius: 16,
    left: 5,
    right: 5
  },
  txtHeading: {
    fontSize: 12,
    color: "#2279bc",
    fontWeight: "500"
  },
  txtParagraphUnderHeading: {
    fontSize: 8,
    color: "#222"
  }
});
