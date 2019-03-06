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
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Font } from "../Utils/Fonts";

const myIcon = (<Icon name="angle-left" size={22} color="#fff"  style={{left:15,alignSelf:'center'}}/>)

const wardHolderGradient = ["#fce38a", "#f2dbbe", "#f0c6bc", "#f38181"];
const plainGradient = ["#ededed", "#ededed"];

export default class Dashboard extends Component {
  static navigationOptions = {
    headerTransparent: true,
    
    headerTintColor: 'white',
    headerBackTitle: null,
    headerLeft: (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate("home")}
      >
        {/* <Image
          source={require("../images/left_arrow.png")}
          style={{ height: 17, width: 17, left: 15 }}
        /> */}

        <Icon name="angle-left" size={22} color="#fff"  style={{left:15,alignSelf:'center'}} onPress={() => this.props.navigation.navigate("home")} />
    
      </TouchableHighlight>
    ),
    headerTitle: (
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Text
          style={{
            alignSelf: "center",
            resizeMode: "contain",
            textColor: "#fff",
            fontFamily:Font.MontserratSemiBold,
          }}
        >
          Dashboard
        </Text>
      </View>
    ),
    headerStyle: {
      height: 35
    }
    
  };
  render() {
    return (
      <ImageBackground
        source={require("../images/profile_bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            {/* First Row Begin */}
            <View style={styles.childContainer}>
            <TouchableOpacity style={styles.leftBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardHolderGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Dashboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightBlock} onPress={() => this.props.navigation.navigate("parallelsection")}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={plainGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Academic</Text>
              </TouchableOpacity>
            </View>

            {/* First Row End */}

            {/* Second Row Begin */}

            <View style={styles.childContainer}>
              
            <TouchableOpacity style={styles.leftBlock} onPress={() => this.props.navigation.navigate("noticeboardSection")}>
            {/* <TouchableOpacity style={styles.leftBlock}> */}
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={plainGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Notice Board</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rightBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardHolderGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Feeds</Text>
              </TouchableOpacity>
            </View>

            {/* Second Row End */}

            {/* Third Row Begin */}

            <View style={styles.childContainer}>
              
            <TouchableOpacity style={styles.leftBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardHolderGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Attendance</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rightBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={plainGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Subjects</Text>
              </TouchableOpacity>
            </View>
            {/* Third Row End */}

            {/* forth Row Begin */}

            <View style={styles.childContainer}>
             
            <TouchableOpacity style={styles.leftBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={plainGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Time Table</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rightBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardHolderGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Exam Report</Text>
              </TouchableOpacity>
            </View>

            {/* forth Row End */}

            {/* five Row Begin */}

            <View style={styles.childContainer}>
             
            <TouchableOpacity style={styles.leftBlock}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={wardHolderGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation}>Schedule</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rightBlock} onPress={() => this.props.navigation.navigate("lessonplanSection")}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={plainGradient}
                  style={styles.leftGradient}
                />
                <Text style={styles.textManipulation} >Lesson Plan</Text>
              </TouchableOpacity>
            </View>
            {/* five Row End */}

          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: "column"
  },
  container: {
    flex: 0.6,
    flexDirection: "column",
    top: 40
  },
  childContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    top: 8,
    alignItems: "baseline"
  },
  leftBlock: {
    width: "42%",
    height: 60,
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
  rightBlock: {
    width: "42%",
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 1,
    left: 2,
    position: "relative"
  },
  textManipulation: {
    alignSelf: "center",
    color: "#333333",
    opacity: 1,
    position: "absolute",
    zIndex: 99,
    left: 21,
    width: "100%",
    fontFamily:Font.MontserratSemiBold,
    fontSize:12
  }
});
