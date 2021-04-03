import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import LogIn from "./src/screens/LogIn";
import ForgetPassword from "./src/screens/ForgetPassword";
import ResponseForgetPassword from "./src/screens/ResponseForgetPassword";
import Profile from "./src/screens/Profile";
import ListScreen from "./src/screens/flatlist";
import React from "react";
import { BlogProvider } from "./src/context/blogContext";
import SplashComponent from "./src/components/SplashComponent";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    SignUp: SignUp,
    LogIn: LogIn,
    ForgetPassword: ForgetPassword,
    ResponseForgetPassword: ResponseForgetPassword,
    Profile: Profile,
    Welcome:SplashComponent
  },
  {
      initialRouteName: "Welcome",
      defaultNavigationOptions: {
      title: "Home",
    },

    headerMode: "screen",
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "#fff" },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
