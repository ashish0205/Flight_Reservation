import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, _Image, } from "react-native";
import { TouchableOpacity } from "react-native";


const LogIn = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/homeLogo.png")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                
                <TextInput
                style={styles.TextInput}    
                placeholder="Enter Your Email"
                placeholderTextColor="#003f5c"
                 value={email}
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                value={password}    
                onChangeText={(password) => setPassword(password)}
                />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
               
            </TouchableOpacity>
            
            <Button
              color="#3c415c"
              title="LogIn"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginTop:10,
        marginBottom: 20,
        width: 250,
        height:150
    },
    TextInput: {
        height: 200,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
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

export default LogIn;