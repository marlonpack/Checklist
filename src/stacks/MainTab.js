import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Checklist from '../screens/Checklist';
import Message from '../screens/Message';
import Profile from '../screens/Profile';
import CustomTabBar from '../components/CustomTabBar';
import Question from '../screens/Question';

const Tab = createBottomTabNavigator();

export default ()=>(
  <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Checklist" component={Checklist}/>
    {/* <Tab.Screen name="Calendar" component={Calendar}/> */}
    <Tab.Screen name="Message" component={Message}/>
    <Tab.Screen name="Profile" component={Profile}/>
    <Tab.Screen name="Question" component={Question}/>
  </Tab.Navigator>
)