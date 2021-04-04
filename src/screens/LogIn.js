import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import axios from "axios";
const QueryString = require("querystring");

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  _Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>

      <Animatable.View style={styles.footer} animation="bounceInLeft">
        <View style={styles.inputView}>
          <View style={styles.form}>
            <StatusBar style="auto" />

            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                style={styles.TextInput}
                placeholder="Your Email"
                placeholderTextColor="#003f5c"
                value={email}
                autoCorrect={false}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                style={styles.TextInput}
                placeholder="Your Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                value={password}
                autoCorrect={false}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button
              color="#3c415c"
              title="LogIn"
              onPress={() => {
                axios
                  .post(
                    "http://localhost:4000/user/login",
                    QueryString.stringify({
                      email: email,
                      password: password,
                    }),
                    {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    }
                  )
                  .then((response) => {
                    console.log(response.data);
                    navigation.navigate("Home");
                  })
                  .catch((err) => console.log("api Erorr: ", err.response));
              }}
            />
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    marginTop: 10,
    marginBottom: 20,
    width: 250,
    height: 150,
  },
  TextInput: {
    height: 50,
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 40,
    overflow: "hidden",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    backgroundColor: "#bbbbbb",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
  },
});

export default LogIn;
