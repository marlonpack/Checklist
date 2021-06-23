import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import UserContextProvider from './context/UserContext';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}