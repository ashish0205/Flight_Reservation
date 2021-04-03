import React, { useState } from "react";
import { Text, StyleSheet, View,TextInput, Button } from "react-native";
import axios from "axios";
import * as Animatable from 'react-native-animatable';
const QueryString=require("querystring")

const SignUP = () => {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.heading}>To create an account, Insert your Details:</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInDownBig">
              <View style={styles.formData}>
            <View style={styles.inputView}>
            
            <TextInput
                style={styles.TextInput}
                    placeholder="Your First Name"
                    placeholderTextColor="black"
                    value={fname}
                    autoCorrect={false}
                    onChangeText={(fname) => setFirstName(fname)}
                />
            </View>
            <View style={styles.inputView}>
            
            <TextInput
                style={styles.TextInput}
                placeholderTextColor="black"
                    placeholder="Your Last Name"
                    value={lname}
                    autoCorrect={false}
                onChangeText={(lname) => setLastName(lname)}
                />
            </View>
            <View style={styles.inputView}>
                
                <TextInput
                style={styles.TextInput}    
                placeholder="Enter Your Email"
                    placeholderTextColor="black"
                    value={email}
                    autoCorrect={false}
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Enter Password"
                placeholderTextColor="black"
                    secureTextEntry={true}
                  
                    autoCorrect={false}
                onChangeText={(password) => setConfirmPassword(password)}
                />
                {password.length>8?<Text>Password must be 8 character long</Text>:null}
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Confirm Password"
                placeholderTextColor="black"
                    secureTextEntry={true}
                    
                    autoCorrect={false}
                onChangeText={(confirmPassword) => setPassword(confirmPassword)}
                />
                 {confirmPassword.length>8?<Text>Password must be 8 character long</Text>:null}
            </View>
            <Button
              color="#05375a"
                title="SignUp"
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
        </Animatable.View>
     </View>    
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        marginBottom: 15,
        color: 'white',
        fontWeight:'bold'
    },
    container: {
        flex: 1,
        backgroundColor: "#1d4b6a",
      },
      header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
      },
      footer: {
        flex: 3,
        backgroundColor: '#b4c3cd',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical:30
      },
    TextInput: {
        height: 200,
        width: "100%",
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    inputView: {
        backgroundColor: "#e6ebee",
        borderRadius: 30,
        width: "50%",
        height: 45,
        marginBottom: 20,     
       
    },
    formData: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignUP;
