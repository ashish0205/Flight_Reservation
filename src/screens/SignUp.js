import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import axios from "axios";
import QueryString from "querystring";

const SignUP = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Insert your Details:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter First Name"
          placeholderTextColor="#003f5c"
          value={fname}
          autoCorrect={false}
          onChangeText={(fname) => setFirstName(fname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          placeholder="Enter Last Name"
          value={lname}
          autoCorrect={false}
          onChangeText={(lname) => setLastName(lname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Email"
          placeholderTextColor="#003f5c"
          value={email}
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(password) => setConfirmPassword(password)}
        />
        {password.length > 8 ? (
          <Text>Password must be 8 character long</Text>
        ) : null}
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(confirmPassword) => setPassword(confirmPassword)}
        />
        {confirmPassword.length > 8 ? (
          <Text>Password must be 8 character long</Text>
        ) : null}
      </View>
      <Button
        color="#3c415c"
        title="SignUp"
        raised
        onPress={() => {
          //  alert("hello");

          axios
            .post(
              "http://localhost:4000/user/signup",
              QueryString.stringify({
                firstName: fname,
                lastName: lname,
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
            })
            .catch((err) => console.log("api Erorr: ", err.response));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 200,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  inputView: {
    backgroundColor: "#bbbbbb",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default SignUP;
