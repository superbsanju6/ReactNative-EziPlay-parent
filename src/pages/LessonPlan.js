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

const plainGradient = ["#ededed", "#ededed"];
const viewButtonGradient = ["#f550a0", "#f95d91", "#fc6c81", "#fe727a"];

const wardNameGradient = ["#fe727a", "#fc6c81", "#f95d91", "#f550a0"];

/* Image path stored within a variable */
var img_src = "../images/sample_girl_image.jpg";

export default class LessonPlan extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/eziplay_parent_login_bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
          <View style={styles.container}>
            {/* First Row Begin */}
            <View style={styles.childContainer}>
              <TouchableOpacity style={styles.ParentCardView}>
                

                <View style={styles.leftGradient}>
                  <View
                    style={{
                      width: "25%",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                  <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardNameGradient}
                  style={styles.leftGradient}
                />
                    <Text style={styles.lectureCodeTextManipulation}>
                      Lecture Code
                    </Text>
                    <Text style={styles.textManipulation}>1045</Text>
                  </View>

                  <View
                    style={{
                      width: "75%",
                      flexDirection: "row",
                      paddingTop: 8,
                      backgroundColor:"#fff"
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        paddingTop: 8,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          left: 10
                        }}
                      >
                        <Image
                          source={require(img_src)}
                          style={styles.circularImage}
                        />
                      </View>

                      <View
                        style={{ justifyContent: "center", top: -7, left: 5 }}
                      >
                        <Text style={styles.headingTextManipulation}>
                          Suman Sharma
                        </Text>
                        <Text style={styles.headingTextManipulation}>
                          Chemistry
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        width: "40%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        top: -7,
                        right: -9,
                        elevation: 0
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={viewButtonGradient}
                        style={styles.wardDetail}
                      >
                        <Text style={styles.wardName}>View plan</Text>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* First Row End */}

           
{/* First Row Begin */}
            <View style={styles.childContainer}>
              <TouchableOpacity style={styles.ParentCardView}>
                

                <View style={styles.leftGradient}>
                  <View
                    style={{
                      width: "25%",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                  <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardNameGradient}
                  style={styles.leftGradient}
                />
                    <Text style={styles.lectureCodeTextManipulation}>
                      Lecture Code
                    </Text>
                    <Text style={styles.textManipulation}>1045</Text>
                  </View>

                  <View
                    style={{
                      width: "75%",
                      flexDirection: "row",
                      paddingTop: 8,
                      backgroundColor:"#fff"
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
                        paddingTop: 8,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          left: 10
                        }}
                      >
                        <Image
                          source={require(img_src)}
                          style={styles.circularImage}
                        />
                      </View>

                      <View
                        style={{ justifyContent: "center", top: -7, left: 5 }}
                      >
                        <Text style={styles.headingTextManipulation}>
                          Suman Sharma
                        </Text>
                        <Text style={styles.headingTextManipulation}>
                          Chemistry
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        width: "40%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        top: -7,
                        right: -9,
                        elevation: 0
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={viewButtonGradient}
                        style={styles.wardDetail}
                      >
                        <Text style={styles.wardName}>View plan</Text>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* First Row End */}


        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: "column",
    top: 40,
    elevation:4
  },
  childContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
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
    color: "#fff",
    alignItems: "center",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 18,
    top: -2
  },
  lectureCodeTextManipulation: {
    alignSelf: "center",
    color: "#fff",
    alignItems: "center",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 10,
    bottom: -2
  },
  wardDetail: {
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 2,
    alignSelf: "flex-start",
    elevation: 5
  },
  wardName: {
    fontSize: 10,
    color: "#fff"
  },
  headingTextManipulation: {
    color: "#333333",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 9,
    left: 10
  },
  paragraphTextManipulation: {
    color: "#333333",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 6,
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
  },
  circularImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignSelf: "center",
    top: -8
  }
});
