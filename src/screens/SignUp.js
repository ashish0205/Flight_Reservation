import React, { useState } from "react";
import { Text, StyleSheet, View,TextInput, Button } from "react-native";



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
                onChangeText={fname => setFirstName(text)}
                />
            </View>
            <View style={styles.inputView}>
            
            <TextInput
                style={styles.TextInput}
                placeholderTextColor="#003f5c"
                placeholder="Enter Last Name"
                onChangeText={lname => setLastName(text)}
                />
            </View>
            <View style={styles.inputView}>
                
                <TextInput
                style={styles.TextInput}    
                placeholder="Enter Your Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Enter Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setConfirmPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Confirm Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(confirmPassword) => setPassword(confirmPassword)}
                />
            </View>
            <Button
              color="#3c415c"
              title="SignUp"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        marginBottom:15
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