import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import LogoImage from "../components/Logo";
import { Font } from "../Utils/Fonts";

const wardHolderGradient = ["#fce38a", "#f2dbbe", "#f0c6bc", "#f38181"];
const plainGradient = ["#f4dfb5", "#f3d8b4", "#f1c6b3", "#f1bdbd"];
const viewButtonGradient = ["#f550a0", "#f95d91", "#fc6c81", "#fe727a"];

const wardNameGradient = ["#fe727a", "#fc6c81", "#f95d91", "#f550a0"];

export default class FeeDetails extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/eziplay_parent_login_bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            {/* First Row Begin */}
            <View style={styles.childContainer}>
              <TouchableOpacity style={styles.ParentCardView}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardNameGradient}
                  style={styles.leftGradient}
                />

                <View style={styles.leftGradient}>
                  <View
                    style={{
                      width: "25%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <View
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%"
                      }}
                    >
                      <View style={styles.myStyle}>
                        <Text style={styles.forText}>Allocate Date</Text>
                      </View>
                      <Text style={styles.textManipulation}>20 Jan,2019</Text>
                    </View>
                  </View>

                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={plainGradient}
                    style={{
                      width: "75%",
                      flexDirection: "row",
                      paddingTop: 8
                    }}
                  >
                    <View
                      style={{
                        width: "70%",
                        paddingTop: 8
                      }}
                    >
                      <Text style={styles.headingTextManipulation}>
                        PLAY TO NURSERY
                      </Text>
                      <Text style={styles.headingTextManipulation}>
                        Exam Fee
                      </Text>

                      <Text style={styles.headingTextManipulation}>500.00</Text>
                    </View>

                    <View
                      style={{
                        width: "30%",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        elevation: 0
                      }}
                    >
                      <Text style={styles.wardName}>PAID</Text>
                      <Text style={styles.wardName}>25 JAN,2019</Text>
                    </View>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </View>
            {/* First Row End */}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 0.15,
    flexDirection: "column",
    top: 40
  },
  childContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "baseline"
  },
  ParentCardView: {
    width: "90%",
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 1,
    right: 2,
    position: "relative"
  },
  leftGradient: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    top: 0,
    position: "absolute",
    borderRadius: 4,
    opacity: 0.8
  },
  textManipulation: {
    alignSelf: "center",
    color: "#333333",
    alignItems: "center",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 10
  },
  wardDetail: {
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 2,
    alignSelf: "flex-start",
    elevation: 5
  },
  wardName: {
    fontSize: 9,
    color: "#000"
  },
  headingTextManipulation: {
    color: "#333333",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 10,
    left: 10
  },
  paragraphTextManipulation: {
    color: "#333333",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 7,
    left: 5
  },
  myStyle: {
    width: "100%",
    height: "22%",
    overflow: "hidden",
    zIndex: 99,
    position: "absolute",
    bottom: 0,
    left: 0,
    alignItems: "center",
    backgroundColor: "#fff",
    transform: [{ rotate: "270deg" }]
  },
  forText: {
    fontSize: 10
  }
});
