import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image
} from "react-native";

export default class StudentSection extends Component {
  static navigationOptions = {
    title: "Student",
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
      <ImageBackground
        source={require("../images/background_menu.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.cardViewHolder}>
          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Student Admission</Text>
              <View style={styles.bottomGradientView} />
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Student List</Text>
              <View style={styles.bottomGradientView} />
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Student Category</Text>
              <View style={styles.bottomGradientView} />
            </View>
          </View>

          <View style={{ backgroundColor: "#fff", width: "100%", height: 2 }} />

          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Student ID Card</Text>
              <View style={styles.bottomGradientView} />
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Student Gate Pass</Text>
              <View style={styles.bottomGradientView} />
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Student Document</Text>
              <View style={styles.bottomGradientView} />
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", width: "100%", height: 2 }} />

          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Upload Student</Text>
              <View style={styles.bottomGradientView} />
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Houses</Text>
              <View style={styles.bottomGradientView} />
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Text style={styles.categoryText}>Assign Houses</Text>
              <View style={styles.bottomGradientView} />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 2,
    backgroundColor: "#fff"
  },
  rowViewContentHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  categoryText: {
    fontWeight: "500",
    fontSize: 11,
    marginTop: 5,
    color: "#000"
  },
  cardViewHolder: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    margin: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "rgba(238, 238, 238,0.7)"
  },
  rowViewHolder: {
    flex: 1,
    flexDirection: "row"
  }
});
