import React from "react";
import { Text, StyleSheet,View,TextInput, Button} from "react-native";


const ForgetPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Fill the detail:</Text>
            <View style={styles.inputView}>
            <TextInput                  
                placeholder="Enter Your Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
            <TextInput                  
                placeholder=" Confirm Enter Your Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
           />
            </View>
            <Button
                onPress={() => navigation.navigate('ResponseForgetPassword')}
                style={styles.btn}
                title="Submit"
            />
        </View>
    ) 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: "#ccf2ff",
        alignItems: "center",
        marginTop: 40,
         
    },
    inputView: {
        backgroundColor: "#e6ccff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,     
        alignItems: "center",
        
    },
    text: {
        marginBottom: 20,
        fontSize:30
    },
    btn:{
        flex: 1,
        justifyContent: "center",
        padding: 16
    }
});

export default ForgetPassword;