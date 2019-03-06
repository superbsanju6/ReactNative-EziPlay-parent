import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { Font } from "../Utils/Fonts";

const wardHolderGradient = ["#fce38a", "#f2dbbe", "#f0c6bc", "#f38181"];
const plainGradient = ["#f4dfb5", "#f3d8b4","#f1c6b3","#f1bdbd"];
const viewButtonGradient = ["#f550a0", "#f95d91", "#fc6c81","#fe727a"];
export default class NoticeBoardComponent extends Component {
  
  render() {
    return (
      
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            {/* First Row Begin */}
            <View style={styles.childContainer}>
              <TouchableOpacity style={styles.ParentCardView}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardHolderGradient}
                  style={styles.leftGradient}
                />

                <View
                  style={{
                    width: "25%",
                    flexDirection: "column",
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Image
                    source={require("../images/calendar_icon.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text style={styles.textManipulation}>1 Jan,2019</Text>
                </View>

                <View
                  style={{
                    width: "50%",
                    flexDirection: "column",
                    paddingTop: 8
                  }}
                >
                  <Text style={styles.headingTextManipulation}>
                    {this.props.heading}
                  </Text>
                  <View
                    style={{
                      width: "50%",
                      flexDirection: "row"
                    }}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={wardHolderGradient}
                      style={{
                        width: "10%",
                        height: "100%",
                        borderRadius: 10,                
                      }}
                    />
                    <Text
                      style={styles.paragraphTextManipulation}
                      maxLength={26}
                      numberOfLines={1}
                    >
                      {this.props.paragraph}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: "25%",
                    flexDirection: "column",
                    alignItems: "center",
                    alignSelf: "center",
                    elevation: 2
                  }}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={viewButtonGradient}
                    style={styles.wardDetail}
                  >
                    <Text style={styles.wardName}>View more</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </View>
            {/* First Row End */}

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "column",
    height:80
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
    borderRadius: 10,
    elevation: 1,
    right: 2,
    position: "relative"
  },
  leftGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    borderRadius: 10,
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
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 2,
    alignSelf: "flex-start",
    elevation: 5
  },
  wardName: {
    fontSize: 9,
    color: "#fff"
  },
  headingTextManipulation: {
    color: "#333333",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 10
  },
  paragraphTextManipulation: {
    color: "#333333",
    fontFamily: Font.MontserratSemiBold,
    fontSize: 7,
    left:5
  }
});
