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
  ScrollView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { Font } from "../Utils/Fonts";

const wardHolderGradient = ["#fce38a", "#f2dbbe", "#f0c6bc", "#f38181"];
const plainGradient = ["#f4dfb5", "#f3d8b4", "#f1c6b3", "#f1bdbd"];
const viewButtonGradient = ["#f550a0", "#f95d91", "#fc6c81", "#fe727a"];

import Abc from "../components/NoticeBoardComponent";

export default class NoticeBoard extends Component {
  static navigationOptions = {
    headerTintColor: "#ffffff",
    headerTransparent: true,
    headerLeft: (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate("home")}
      >
        <Icon
          name="angle-left"
          size={22}
          color="#fff"
          style={{ left: 15, alignSelf: "center" }}
          onPress={() => this.props.navigation.navigate("home")}
        />
      </TouchableHighlight>
    ),
    headerTitle: (
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Text
          style={{
            alignSelf: "center",
            resizeMode: "contain",
            textColor: "#fff",
            fontFamily: Font.MontserratSemiBold
          }}
        >
          Notice Board
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
        {/* <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        > */}
          <View style={styles.parentContainer}>
            <Abc heading="aaaa" paragraph="kapil" style={{ bottom: 8 }} />
            <Abc heading="bbbb" paragraph="solanki" style={{ bottom: 8 }} />
            <Abc heading="bbbb" paragraph="solanki" style={{ bottom: 8 }} />
            <Abc heading="bbbb" paragraph="solanki" style={{ bottom: 8 }} />
            {/* <Abc heading="bbbb" paragraph="solanki" style={{bottom:8}}/>
          <Abc heading="bbbb" paragraph="solanki" style={{bottom:8}}/>
          <Abc heading="bbbb" paragraph="solanki" style={{bottom:8}}/> */}
          </View>
        {/* </ScrollView> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: "column"
  }
});
