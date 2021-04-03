import React, { useState } from "react";
import { StyleSheet, Button, View, Dimensions, Text} from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "react-native-elements";
import { Switch } from 'react-native-switch';

import DateTimePicker from "@react-native-community/datetimepicker";

import Explore from "./Explore";
import Trips from "./Trips";
import Profile from "./Profile";
import { TextInput } from "react-native-paper";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { render } from "react-dom";

const HomeScreen = () => {

  const [departuretext, setDepText] = React.useState("");
  const [arrivaltext, setArvText] = React.useState("");
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   
  return (
      
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Search Your Flight</Text>
      </View>
      <View style={styles.footer}>
      <View style={styles.row}> 
        <View style={styles.inputWrap}>
          <TextInput
            label="Departure"
            value={departuretext}
            onChangeText={(dep) => setDepText(dep)}
            type="flat"
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            label="Arrival"
            value={arrivaltext}
            onChangeText={(arrival) => setArvText(arrival)}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.inputdate}>
            <Text>Departure</Text>
            <Button onPress={showDatepicker} title="Select Departure Date" />

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.inputdate}  style={{display: isEnabled ? 'block' : 'none' }} >
            <Text>Return</Text>
            <Button onPress={showDatepicker} title="Select Return Date" />

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
               
              />
            )}
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.toggle}>
            <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}                  
            />
              <Text>Two Way</Text>
          </View>        
        </View>
        <View style={{ flexDirection: 'row',margin:30 }}>
          <Button
          title="Search"
          ></Button>
        </View>
      </View>
      </View> 
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  
    row: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop: 10,
    },
  
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop:10
  },
  header_text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white'
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
  inputWrap: {
    width: '45%',
    margin:10
  },
  inputdate: {
    margin: 10,
    color: "#6a4595",
    
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595",
  },
  toggle: {
    margin: 30,    
  }
});

const TabNavigator = createMaterialBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      activeColor: "#ff0000",
      inactiveColor: "#000000",
      shifting: false,
      labeled: true,
      barStyle: { backgroundColor: "#67baf6" },
      tabBarIcon: () => (
        <View>
          <Icon
            name={"home"}
            type={"font-awesome"}
            size={25}
            style={{ color: "#ff0000" }}
          />
        </View>
      ),
    },
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "Wishlist",
      activeColor: "#ff0000",
      inactiveColor: "#000000",
      shifting: false,
      labeled: true,
      barStyle: { backgroundColor: "#67baf6" },
      tabBarIcon: () => (
        <View>
          <Icon
            name={"heart"}
            type={"font-awesome"}
            size={25}
            style={{ color: "#ff0000" }}
          />
        </View>
      ),
    },
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "History",
      activeColor: "#ff0000",
      inactiveColor: "#000000",
      shifting: false,
      labeled: true,
      barStyle: { backgroundColor: "#67baf6" },
      tabBarIcon: () => (
        <View>
          <Icon
            name={"history"}
            type={"font-awesome"}
            size={25}
            style={{ color: "#ff0000" }}
          />
        </View>
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      activeColor: "#ff0000",
      inactiveColor: "#000000",
      shifting: false,
      labeled: true,
      barStyle: { backgroundColor: "#67baf6" },
      tabBarIcon: () => (
        <View>
          <Icon
            name={"account-circle"}
            type={"AntDesign"}
            size={25}
            style={{ color: "#ff0000" }}
          />
        </View>
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
