import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import UserContextProvider from './context/UserContext';
import ResponseContextProvider from './context/ResponseContext';
import { NativeBaseProvider } from 'native-base';

export default () => {
  return (
    <NativeBaseProvider>
      <ResponseContextProvider>
        <UserContextProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </UserContextProvider>
      </ResponseContextProvider>
    </NativeBaseProvider>
  );
}