import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Text
} from "react-native";

export default class StudentList extends Component {
  static navigationOptions = {
    title: "Student List",
    headerStyle: {
      backgroundColor: "#FFF",
      height: 35
    },
    headerTitleStyle: {
      fontSize: 14
    }
  };
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            marginVertical: 4,
            backgroundColor: "#fff",
            paddingHorizontal: 16,
            elevation: 1,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "100%"
          }}
        >
          <View
            style={{
              width: "75%",
              height: 36,
              marginVertical: 4,
              backgroundColor: "#f7f7f7",
              borderRadius: 25,
              paddingHorizontal: 16,
              elevation: 1,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../images/search.png")}
              style={{ width: 17, height: 17, right: 6 }}
            />

            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Search"
            />
          </View>

          <TouchableOpacity>
            <View
              style={{
                width: "6%",
                marginVertical: 4,
                backgroundColor: "#f7f7f7",
                paddingHorizontal: 16,
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
                elevation: 4,
                left: 10,
                height: 32
              }}
            >
              <Image
                source={require("../images/filter_grey_shape.png")}
                style={{ width: 12, height: 12 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", elevation: 4, top: 6, height: 100 }}
        >
          <View style={{ flex: 0.3 }} />

          {/* //user Image  */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../images/student.png")}
              style={{ width: 62, height: 62 }}
            />

            {/* // session details  */}
            <View
              style={{ flexDirection: "row", alignItems: "center", top: 10 }}
            >
              <Text style={{ color: "#333", fontSize: 8, fontWeight: "bold" }}>
                Session :
              </Text>
              <Text
                style={{ color: "#07ad65", fontSize: 8, fontWeight: "bold" }}
              >
                {" "}
                2018-2019
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Text style={styles.admissionNumberSection}>Admission No.</Text>
            <Text style={styles.admissionNumberSection}>Full Name</Text>
            <Text style={styles.admissionNumberSection}>Roll No.</Text>
            <Text style={styles.admissionNumberSection}>Admission Date</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Text style={styles.admissionSectionResponse}>EPS-0218-0001</Text>
            <Text style={styles.admissionSectionResponse}>Rahul Kumar</Text>
            <Text style={styles.admissionSectionResponse}>1</Text>
            <Text style={styles.admissionSectionResponse}>28 Jan, 2018</Text>
          </View>

          <View style={{ flex: 0.3 }}>
            <Image
              source={require("../images/more.png")}
              style={{ width: 12, height: 12 }}
            />
          </View>
        </View>
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
    padding: 0,
    margin: 0
  },
  admissionNumberSection: {
    color: "#333",
    fontSize: 10,
    fontWeight: "bold"
  },
  admissionSectionResponse: {
    color: "#333",
    fontSize: 10
  }
});
