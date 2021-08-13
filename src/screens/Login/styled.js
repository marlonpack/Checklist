import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #F1F1F1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: #326744;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const LogoArea = styled.Text`
  font-size: 18px;
  color: #326744;
`;

export const SignMessageButton = styled.TouchableOpacity`
  font-size: 60px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const  SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: red;
`;
