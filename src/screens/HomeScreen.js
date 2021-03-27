import React,{Component} from "react";
import { Text, View, StyleSheet, Button,SafeAreaView } from "react-native";

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-datepicker';

import ImageDetails from "../components/ImageDetails";
import Explore from "./Explore";
import Trips from "./Trips";
import Profile from "./Profile";
import { TextInput } from "react-native-gesture-handler";

class HomeScreen extends Component{
  constructor(props) {
    super(props)
    this.state={date:"2020-05-15"}
  }
  render() {    
        return (
            <View style={styles.container}>
              <ImageDetails imageSource={require("../../assets/home.jpeg")} />
              <View style={styles.space} />            
              <Text style={styles.text}>Plan a trip</Text>
              <View style={styles.space} />
            <Text style={styles.textHeading}>From City
             <TextInput
                style={styles.inputtext}
                placeholder="Select city"
                placeholderTextColor="#003f5c"
                autoCorrect={false}
              />
            </Text>
            <Text style={styles.textHeading}>To City
             <TextInput
                style={styles.inputtext}
                placeholder="Select city"
                placeholderTextColor="#003f5c"
                autoCorrect={false}
              />
            </Text>
            <DateTimePicker
              style={{width:200}}
              date={this.state.date} 
            mode="date" 
            placeholder="select date"
            format="YYYY-MM-DD"
             minDate="2016-05-01"
             maxDate="2022-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({date:date})
            }}/>
            </View>
            
          );
    }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 40,
  },
  textHeading: {
    fontSize: 18,
    fontWeight:"bold"
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
      display:"flex",
      backgroundColor: '#ffffff',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      padding: 20,
      
  },
  inputtext: {
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2, 
    borderColor: 'grey',
    margin:5
    }
  });
 


const TabNavigator = createMaterialBottomTabNavigator(
      {   
        HomeScreen: {
            screen: HomeScreen,
              navigationOptions: {
                  tabBarLabel: 'Home',
                  activeColor: '#ff0000',
                inactiveColor: '#000000',
                shifting: false,
                labeled: true,
                  barStyle: { backgroundColor: '#67baf6' },
                  tabBarIcon: () => (
                      <View>
                          <Icon name={'home'} type={'font-awesome'} size={25} style={{ color: '#ff0000' }}/>
                      </View>
                  )
        }
    },
    Explore: {
      screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            activeColor: '#ff0000',
          inactiveColor: '#000000',
          shifting: false,
          labeled: true,
            barStyle: { backgroundColor: '#67baf6' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'explore'} type={'MaterialIcons'} size={25} style={{ color: '#ff0000' }}/>
                </View>
          )
  }
    },
    Trips: {
      screen: Trips,
        navigationOptions: {
            tabBarLabel: 'Trips',
            activeColor: '#ff0000',
          inactiveColor: '#000000',
          shifting: false,
          labeled: true,
            barStyle: { backgroundColor: '#67baf6' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'tripadvisor'} type={'font-awesome'} size={25} style={{ color: '#ff0000' } }/>
                </View>
            )
  }
    },
    Profile: {
      screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            activeColor: '#ff0000',
          inactiveColor: '#000000',
          shifting: false,
          labeled: true,
            barStyle: { backgroundColor: '#67baf6' },
            tabBarIcon: () => (
                <View>
                    <Icon name={'account-circle'} type={'AntDesign'} size={25} style={{ color: '#ff0000' }}/>
                </View>
          )
  }
    }
      }    
)

export default createAppContainer(TabNavigator);

