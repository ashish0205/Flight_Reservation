import React, { useState } from "react";
import { Text, StyleSheet, View,TextInput, Button } from "react-native";



const SignUP = () => {
    const [fname, setFirstName] = useState("");
   // const [lname, setLastName] = useState("");
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    //const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Insert your Details:</Text>
            <View style={styles.inputView}>
            
            <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                onChangeText={fname => setFirstName(text)}
                />
                </View>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
      
        fontSize:25  
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