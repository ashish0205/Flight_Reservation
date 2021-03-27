import React,{Component} from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import ForgetPassword from "./ForgetPassword";
import ImageDetails from "../components/ImageDetails";

 class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
              <ImageDetails imageSource={require("../../assets/home.jpeg")} />
              <View style={styles.space} />
              <Text style={styles.text}>Love at First Flight</Text>
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
            
          );
    }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 40,
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
 


const TabNavigator = createMaterialBottomTabNavigator(
      {   
        HomeScreen: {
            screen: HomeScreen,
              navigationOptions: {
                  tabBarLabel: 'Home',
                  activeColor: '#ff0000',
                  inactiveColor: '#000000',
                  barStyle: { backgroundColor: '#67baf6' },
                  tabBarIcon: () => (
                      <View>
                          <Icon name={'home'} size={25} style={{ color: '#ff0000' }}/>
                      </View>
                  )
        }
          }
      }    
)

export default createAppContainer(TabNavigator);

