import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './MainTab';
import Login from '../screens/Login';
import ChangePassword from '../screens/ChangePassword';
import Question from '../screens/Question';
import Capture from '../screens/Capture';


const Stack = createStackNavigator();


export default ()=>(
  // <Stack.Navigator  screenOptions={{headerShown: false}}>
  <Stack.Navigator initialRouteName="Login"  screenOptions={{headerShown: false}}>  
     <Stack.Screen name="Login" component={Login}/>
     <Stack.Screen name="ChangePassword" component={ChangePassword}/>
     <Stack.Screen name="MainTab" component={MainTab}/> 
    {/* <Stack.Screen name="Question" component={Question} />  */}
    <Stack.Screen name="Capture" component={Capture} />
  </Stack.Navigator>
)