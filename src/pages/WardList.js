import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

/* Image path stored within a variable */
var img_src = "../images/sample_girl_image.jpg";

/* gradient colors stored in array */
const wardHolderGradient = ["#facd88", "#f8b286", "#f59183", "#f48882"];
const wardNameGradient = ["#fe727a", "#fc6c81", "#f95d91", "#f550a0"];

export default class WardList extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      /* Parent View Begin */
      <View style={styles.container}>
        {/*  Ward Information Holder Begin */}

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={wardHolderGradient}
          style={styles.wardInformationHolder}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("account")}
            style={styles.leftInnerBlockOfWardInformationHolder}
          >
            <View>
              <Image source={require(img_src)} style={styles.circularImage} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("account")}
            style={styles.rightInnerBlockOfWardInformationHolder}
            >
          <View >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={wardNameGradient}
              style={styles.wardDetail}
            >
              <Text style={styles.wardName}>Rahul Gupta</Text>
            </LinearGradient>
            <Text style={styles.wardContent}>LKG</Text>
            <Text style={styles.wardContent}>Section-A</Text>
            <Text style={styles.wardContent}>+91-9026352688</Text>
          </View>
          </TouchableOpacity>
        </LinearGradient>
        {/*  Ward Information Holder End */}
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
    width: 80,
    height: 80,
    borderRadius: 50
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
  }
});
