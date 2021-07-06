import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  /* background-color: rgba(0,0,0,0.05); */
  background-color: #FFF;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 5px;
`;


export const TextButton = styled.Text`
  font-size: 25px;
  color: #FFF;
`;

export const ButtonSave = styled.TouchableOpacity`
  align-items: center;
  background-color: #326744;
  width: 100%;
  margin: 20px auto;
  border-radius: 36px;
`;

export const Header = styled.View`
  margin: 5px 0;
`;



export const HeaderText = styled.Text`
font-size: 36px;
font-weight: bold;
`;