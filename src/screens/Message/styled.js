import React from 'react';
import styled from 'styled-components';


export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: #F1F1F1;
  padding: 80px;
`;


export const Button = styled.TouchableOpacity`
  background-color: #326744;
  border-radius: 50px;
  align-items: center;
  justify-content: center; 
  width: 100%;
  height: 40px;
  margin-bottom: 50px;
`;

export const TextButton = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
`;

export const CircleButton = styled.TouchableOpacity`
  width: 31px;
  background-color: #F95050;
  border-radius: 50px;
  align-items: center; 
  justify-content: center; 
`;
