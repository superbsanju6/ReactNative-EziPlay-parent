import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight 
} from "react-native";
import CategoryRef from "../components/Category";

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <TouchableHighlight
                onPress={() => this.props.navigation.navigate("home")}
              >
      <Image
        source={require("../images/menu.png")}
        style={{ height: 15, width: 15, left: 15 }}
      />
      </TouchableHighlight>
    ),
    headerTitle: (
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <Image
          resizeMode="cover"
          source={require("../images/horizontal_logo_eziplay.png")}
          style={{
            height: 25,
            width: 175,
            alignSelf: "center",
            resizeMode: "contain"
          }}
        />
      </View>
    ),
    headerStyle: {
      height: 35
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../images/welcome_background_screen.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            <CategoryRef
              imageUri={require("../images/slideimage.png")}
              heading="Grade 1"
            />

            <CategoryRef
              imageUri={require("../images/slideimage2.png")}
              heading="Grade 2"
            />

            <CategoryRef
              imageUri={require("../images/slideimage3.png")}
              heading="Grade 3"
            />
          </ScrollView>

          <View style={{ flexDirection: "column", flex: 1, left: 8 }}>
            <View style={{ flexDirection: "row", top: -30 }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("home")}
                >
                  <View style={styles.furtherOptions}>
                    <Text style={styles.furtherOptionsHeading}>
                      Student Enrolled
                    </Text>
                    <Text style={styles.furtherOptionsParagraph}>1200</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <View style={styles.furtherOptions}>
                    <Text style={styles.furtherOptionsHeading}>
                      Fee Collection
                    </Text>
                    <Text style={styles.furtherOptionsParagraph}>1,50,500</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <View style={styles.furtherOptions}>
                    <Text style={styles.furtherOptionsHeading}>Dues</Text>
                    <Text style={styles.furtherOptionsParagraph}>50,000</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "row", top: -20 }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <View style={styles.furtherOptions}>
                    <Text style={styles.furtherOptionsHeading}>Teachers</Text>
                    <Text style={styles.furtherOptionsParagraph}>20</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <View style={styles.furtherOptions}>
                    <Text style={styles.furtherOptionsHeading}>Feeds</Text>
                    <Text
                      style={{
                        fontSize: 9,
                        top: 6,
                        backgroundColor: "#c9a102",
                        color: "#fff",
                        paddingLeft: 9,
                        paddingRight: 9,
                        paddingTop: 2,
                        paddingBottom: 2,
                        elevation: 1,
                        borderRadius: 5
                      }}
                    >
                      3 Updates
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <View style={styles.furtherOptions}>
                    <Text style={styles.furtherOptionsHeading}>Reports</Text>
                    <Text style={styles.furtherOptionsParagraph} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 0.5
  },
  furtherOptions: {
    elevation: 1,
    borderRadius: 8,
    borderColor: "transparent",
    borderWidth: 1,
    width: 106,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(238, 238, 238,0.6)"
  },
  furtherOptionsHeading: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#35337e"
  },
  furtherOptionsParagraph: {
    fontSize: 10,
    fontWeight: "bold",
    top: 6,
    color: "#c9a102"
  },
  yellowRoundedBackground: {
    elevation: 1,
    borderRadius: 8,
    color: "#ddd",
    alignItems: "center",
    justifyContent: "center"
  }
});
