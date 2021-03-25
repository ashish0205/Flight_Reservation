import React from "react";
import { Text, StyleSheet,View, Button} from "react-native";


const ResponseForgetPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your credential detail has been sent to the registered
            email address.Please check your Inbox.</Text>
            <Button
                style={styles.button}
                onPress={()=>navigation.navigate('Home')}
                title="Home"
            />
             <View style={styles.space} />
            <Button
                style={styles.button}
                onPress={()=>navigation.navigate('LogIn')}
                title="LogIn"
            />
         </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccf2ff",
        alignItems: "center",
        paddingTop:40,       
    },
    text: {
        fontSize: 24,     
        fontWeight: 'bold',
        marginBottom: 10,
        padding:30
    },
    space: {
        width: 40, 
        height: 40,
    },
    button: {
        margin: 20,
        padding: 30
      },
});

export default ResponseForgetPassword;