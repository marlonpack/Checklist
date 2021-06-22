import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #FAFAFA;
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
  font-size: 60px;
  color: #000;
`;

export const SignMessageButton = styled.Text`
  font-size: 60px;
  color: #FFF;
  margin: 20px 0;
  align-items: center;
  text-align: center;
`;

export const  SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #000;
`;
