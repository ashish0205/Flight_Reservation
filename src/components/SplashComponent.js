import { StatusBar } from "expo-status-bar";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require("../../assets/logo.jpg")}
            style={styles.logo}
            resizeMode={"stretch"}
          />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Book Your Flight</Text>
          <Text style={styles.text}>Sign in with account</Text>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() =>
                setTimeout(() => {
                  const isLogin = AsyncStorage.getItem("_id");

                  console.log(isLogin);
                  if (isLogin) this.props.navigation.navigate("Home");
                  else this.props.navigation.navigate("LogIn");
                })
              }
            >
              <LinearGradient colors={["#5db8fe", "#39cff2"]}>
                <Text style={styles.textsign}>
                  Get Started
                  <MaterialIcons
                    name="navigate-next"
                    color="black"
                    size={20}
                  />{" "}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#05375a",
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1.5,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 40,
    overflow: "hidden",
  },
  title: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 150,
  },
  textsign: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    flexDirection: "row",
    fontSize: 18,
    margin: 10,
  },
});
