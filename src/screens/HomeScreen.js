import React from "react";
import { Text, View, StyleSheet,Button } from "react-native";
import ImageDetails from '../components/ImageDetails';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageDetails imageSource={require('../../assets/home.jpeg')}
      />
      <View style={styles.space} />
      <Text style={styles.text}>Love at First sight</Text>
      <View style={styles.space} />
      <Button
        style={styles.button}
        onPress={()=>navigation.navigate('SignUp')}
        title="Create a new account"
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
  text: {
    fontSize: 40,
  },
  button: {
    margin: 20,
    padding: 30
  },
  space: {
    width: 40, 
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#b8b5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
