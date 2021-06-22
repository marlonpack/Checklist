import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './MainTab';
import Login from '../screens/Login';


const Stack = createStackNavigator();


export default ()=>(
  // <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
  <Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="MainTab" component={MainTab}/>
  </Stack.Navigator>
)