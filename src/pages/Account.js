import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

/* Image path stored within a variable */
var img_src = "../images/sample_girl_image.jpg";

/* gradient colors stored in array */
const wardHolderGradient = ["#facd88", "#f8b286", "#f59183", "#f48882"];
const wardNameGradient = ["#fe727a", "#fc6c81", "#f95d91", "#f550a0"];

export default class Account extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      /* Parent View Begin */
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/profile_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>

            <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("dashboardSection")}
                >
              <Image source={require(img_src)} style={styles.circularImage} />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#333333",
                  alignSelf: "center",
                  top: 30
                }}
              >
                Rajeev Dhiman
              </Text>
            </View>

            {/* Message Section Begin */}
            <View style={{ flex: 0.2,marginTop:40 }}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  background: "#000",
                  backgroundColor: "rgba(240, 240, 240, 1)",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/envelope.png")}
                  style={styles.iconAttributes}
                />
                <Text style={{ left: 35,color:'#0b0a3d' }}>Messages</Text>
                <LinearGradient
                  colors={wardNameGradient}
                  style={{
                    alignSelf: "flex-start",
                    borderRadius: 20,
                    width:20,
                    height:20,
                    left: 45,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Text style={{ color: "#fff" }}>2</Text>
                </LinearGradient>
              </View>
            </View>

            {/* Message Section End */}

            
            <View style={{width:"100%",height:1,backgroundColor:"#fff"}}/>

            {/* Notification Section Begin */}
            <View style={{ flex: 0.2 }}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  background: "#000",
                  backgroundColor: "rgba(240, 240, 240, 1)",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../images/notification.png")}
                  style={styles.iconAttributes}
                />
                <Text style={{ left: 35 ,color:'#0b0a3d'}}>Notification</Text>
                <LinearGradient
                  colors={wardNameGradient}
                  style={{
                    alignSelf: "flex-start",
                    borderRadius: 20,
                    width:20,
                    height:20,
                    left: 45,
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <Text style={{ color: "#fff" }}>2</Text>
                </LinearGradient>
              </View>
            </View>

            {/* Notification Section End */}

            <View style={{width:"100%",height:1,backgroundColor:"#fff"}}/>

            {/* Logout Section Begin */}

            <View style={{ flex: 0.2 }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#facd88", "#f8b286", "#f59183", "#f48882"]}
                style={{
                  padding: 3,
                  alignItems: "center",
                  alignSelf: "center",
                  flexDirection: "row",
                  flex: 1,
                  width: "100%"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../images/exit.png")}
                    style={styles.iconAttributes}
                  />
                  <Text style={{ left: 35,color:'#0b0a3d' }}>Logout</Text>
                </View>
              </LinearGradient>
            </View>

            {/* Logout Section End */}

            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", flex: 1 }} />
            </View>
          </View>
        </ImageBackground>
      </View>
      /* Parent View End */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },
  wardInformationHolder: {
    flexDirection: "row",
    flex: 1,
    height: 140,
    borderRadius: 10,
    margin: 10,
    elevation: 10
  },
  leftInnerBlockOfWardInformationHolder: {
    width: "50%",
    height: 140,
    alignItems: "center",
    justifyContent: "center"
  },
  rightInnerBlockOfWardInformationHolder: {
    width: "50%",
    height: 140,
    flexDirection: "column",
    justifyContent: "center"
  },
  circularImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    top: 25
  },
  wardName: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold"
  },
  wardContent: {
    fontSize: 10,
    color: "#fff",
    left: 16
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
  iconAttributes: { width: 19, height: 19, left: 25 }
});
