import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import UserContextProvider from './context/UserContext';
import { NativeBaseProvider } from 'native-base';

export default () => {
  return (
    <NativeBaseProvider>
      <UserContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </UserContextProvider>
    </NativeBaseProvider>
  );
}