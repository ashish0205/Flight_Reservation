import React from 'react';
import { View, Text,StyleSheet,Button} from 'react-native'

const Profile=({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.space} />
            <Text style={styles.text}>Book faster and manage your details more easily with an account.</Text>
            <View style={styles.space} />
            <Button
                style={styles.button}
                onPress={() => navigation.navigate("SignUp")}
                title="Create a new account"
              />
              <View style={styles.space} />
              <Button
                style={styles.button}
                onPress={() => navigation.navigate("LogIn")}
                title="LogIn"
              />
        </View>
   ) 
}

const styles = StyleSheet.create({
    text: {
        fontSize:30
    },
     button: {
        margin: 20,
        padding: 30,
      },
    space: {
        width: 40,
        height: 40,
      },
      container: {
        flex: 1,
        backgroundColor: "#b8b5ff",
        alignItems: "center",
          justifyContent: "center",
      }, 
});

export default Profile;