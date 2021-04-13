// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
// Import Screens


import SplashScreen from './Screen/Components/SplashScreen';
import LoginScreen from './Screen/Components/LoginScreen';
import RegisterScreen from './Screen/Components/signup';
import Home from './Screen/Components/HomeScreen';
import statistics from './Screen/Components/statistics';
import NavigationDrawerHeader from './Screen/Components/NavigationDrawerHeader';

import CustomSidebarMenu from './Screen/Components/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();





const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home', //Set Header Title
         
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen12"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Stats"
        component={statistics}
        options={{
          title: 'Stats', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const accessedpages = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Statistics '}}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};



const App = () => {
  return (
   

    <NavigationContainer>
       
      
      <Stack.Navigator initialRouteName="intrpage">

        <Stack.Screen
          name="intropage"
          component={SplashScreen}

          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={RegisterScreen}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
         <Stack.Screen
          name="accessedpages"
          component={accessedpages}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />

       
      </Stack.Navigator>
    </NavigationContainer>

  )
};





export default App;



