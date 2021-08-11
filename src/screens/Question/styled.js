import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  /* background-color: rgba(0,0,0,0.05); */
  background-color: #F1F1F1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  /* padding: 5px; */
`;


export const TextButton = styled.Text`
  font-size: 25px;
  color: #FFF;
  margin: 10px 0;
`;

export const ButtonSave = styled.TouchableOpacity`
  align-items: center;
  background-color: #326744;
  width: 70%;
  margin: 20px auto;
  border-radius: 36px;
`;

export const Header = styled.View`
  margin: 0;
  align-items: center;
  background-color: #fff;
  /* border-radius: 10px; */
`;



export const HeaderText = styled.Text`
font-size: 36px;
color: #000000;
font-weight: bold ;
font-family: 'Poppins';
`;