import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Home extends Component {
  static navigationOptions = {
    title: "Menu",
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("student")}
            >
              <View style={styles.rowViewContentHolder}>
                <Image
                  source={require("../images/study.png")}
                  style={styles.categoryIcons}
                />
                <Text style={styles.categoryText}>Student</Text>
                <LinearGradient
                  colors={["#b01163", "#b8196c", "#d8388b", "#f150a4"]}
                  style={{ marginTop: 12 }}
                >
                  <View style={styles.bottomGradientView} />
                </LinearGradient>
              </View>
            </TouchableOpacity>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/money_bag.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Finance</Text>
              <LinearGradient
                colors={["#2279bc", "#2765aa", "#2e4d96", "#35337e"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/training.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Teachers</Text>
              <LinearGradient
                colors={["#114d1a", "#155719", "#237c14", "#2d9811"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/icons.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Attendance</Text>
              <LinearGradient
                colors={["#bca300", "#c78f01", "#d86f03", "#e06104"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>
          </View>

          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/bank_building.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Academic</Text>
              <LinearGradient
                colors={["#bca300", "#c78f01", "#d86f03", "#e06104"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/exam.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Exams</Text>
              <LinearGradient
                colors={["#114d1a", "#155719", "#237c14", "#2d9811"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/bank_building.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Institution</Text>
              <LinearGradient
                colors={["#2279bc", "#2765aa", "#2e4d96", "#35337e"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/feed_button.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Feed</Text>
              <LinearGradient
                colors={["#b01163", "#b8196c", "#d8388b", "#f150a4"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>
          </View>

          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/living_room.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Subject</Text>
              <LinearGradient
                colors={["#b01163", "#b8196c", "#d8388b", "#f150a4"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/chat_bubbles.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Messages/SMS</Text>
              <LinearGradient
                colors={["#2279bc", "#2765aa", "#2e4d96", "#35337e"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/calendar.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Time Table</Text>
              <LinearGradient
                colors={["#114d1a", "#155719", "#237c14", "#2d9811"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/settings_gears.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Settings</Text>
              <LinearGradient
                colors={["#bca300", "#c78f01", "#d86f03", "#e06104"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>
          </View>

          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/dollar_sign.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>PayRoll</Text>
              <LinearGradient
                colors={["#bca300", "#c78f01", "#d86f03", "#e06104"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/add_user.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Promote a Student</Text>
              <LinearGradient
                colors={["#114d1a", "#155719", "#237c14", "#2d9811"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/hostel.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Hostel</Text>
              <LinearGradient
                colors={["#2279bc", "#2765aa", "#2e4d96", "#35337e"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/meeting.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Employee</Text>
              <LinearGradient
                colors={["#b01163", "#b8196c", "#d8388b", "#f150a4"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>
          </View>

          <View style={styles.rowViewHolder}>
            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/bus_side_view.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Transport</Text>
              <LinearGradient
                colors={["#b01163", "#b8196c", "#d8388b", "#f150a4"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/dollar_symbol.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Expense</Text>
              <LinearGradient
                colors={["#2279bc", "#2765aa", "#2e4d96", "#35337e"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              <Image
                source={require("../images/raise_hand.png")}
                style={styles.categoryIcons}
              />
              <Text style={styles.categoryText}>Enquiry</Text>
              <LinearGradient
                colors={["#114d1a", "#155719", "#237c14", "#2d9811"]}
                style={{ marginTop: 12 }}
              >
                <View style={styles.bottomGradientView} />
              </LinearGradient>
            </View>

            <View style={styles.container} />

            <View style={styles.rowViewContentHolder}>
              {/* <Image source={require('../images/lock.png')} style={styles.categoryIcons}/>
                        <Text style={styles.categoryText}>Employee</Text>
                        <LinearGradient colors={['#61045f','#20011f']} style={{marginTop:12}}>
                                <View style={styles.bottomGradientView}/>
                            </LinearGradient> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1
  },
  rowViewContentHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  categoryText: {
    fontWeight: "500",
    fontSize: 8,
    marginTop: 5,
    color: "#000"
  },
  categoryIcons: {
    width: 20,
    height: 20,
    marginTop: 10
  },
  bottomGradientView: {
    width: 70,
    height: 6
  },
  cardViewHolder: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    margin: 15,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 10,
    elevation: 2,
    backgroundColor: "#fff"
  },
  rowViewHolder: {
    flex: 1,
    flexDirection: "row"
  }
});
