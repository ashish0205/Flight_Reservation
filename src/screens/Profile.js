import React from 'react';
import { View, Text,StyleSheet,Button,TouchableOpacity} from 'react-native'

const Profile=({navigation}) => {
    return (
      <View style={styles.container}>
         
        <View style={styles.header}>
                <Text style={styles.text}>Book faster and manage your details more easily with an account.</Text>
         </View>
        <View style={styles.footer}>
        <Button
            style={styles.button}
            color="#05375a"
                onPress={() => navigation.navigate("SignUp")}
                title="Create a new account"
              />
              <View style={styles.space} />
              <Button
            style={styles.button}
                color="#05375a"
                onPress={() => navigation.navigate("LogIn")}
                title="LogIn"
              />
        </View>           
        </View>
   ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop:20
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop:50
  },
    text: {
        fontSize: 30,
        marginTop: 40,
        padding: 10,
        textAlign: "justify",
        color: 'white',
        fontWeight:'bold'
    },
     button: {
        margin: 20,
        padding: 30,
       
      },
    space: {
        width: 20,
        height: 30,
      },
     
});

export default Profile;