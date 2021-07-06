import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #F1F1F1;
`;

export const  AreaDataUser = styled.View`
  background-color: transparent;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const  AreaButton = styled.View`
  background-color: transparent;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 350px;
  padding-top: 50px;
`;

export const ImagemUser = styled.Image`
  border-radius: 100px;
  background-color: aqua;
  width: 200px;
  height: 200px;
  margin: 25px 0;
`;

export const NameUser = styled.Text`
  font-size: 30px;
  color: #000000;
`;

export const ButtonHelp = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #1BA8C7;
  margin-bottom: 20px;
`;

export const ButtonPassword = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #326744;
  margin-bottom: 20px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #F95050;
  margin-bottom: 20px;
`;


export const TextButton = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
`;