import React from 'react';
import styled from 'styled-components';


export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #F1F1F1;
  /* padding: 80px; */
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 2px 5px;
  padding: 2px 12px;
  border: 1px solid black;
  align-items : center;
  border-radius: 10px;
  background-color: white;
  max-height: 40px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 5px 0px 10px 5px;
  /* border: 1px solid black; */
  margin: 2px;
  border-radius: 8px;
  max-height:89%;
  /* overflow: hidden; */
`;

export const NameUser = styled.Text`
  font-size:18px;
`;

export const Main = styled.View`
  flex: 1;
  margin: 1px;

`;

export const MessageUsers = styled.Text`
  font-size:18px;
  margin: 10px;
  text-align: right;
  background-color: white;
  padding: 10px;
  /* width: 50%; */
  margin-left: 50%;
  border-radius: 10px;
`;

export const MessageSend = styled.Text`
  font-size:18px;
  margin: 10px;
  text-align: left;
  background-color: white;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
`;

export const Footer = styled.View`
  flex: 1;
  max-height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items : center;
  padding:  5px 8px;
  margin: 0 5px;
  margin-bottom: 2px;
`;


export const SenderInput = styled.TextInput`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  height: 90%;
`;


export const ButtonNavigate = styled.TouchableOpacity`
  margin-right: 8px;
`;


export const AvatarIcon = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  margin-right: 8px;
`;



export const ButtonBeforeMessage = styled.Text`
  font-size: 20px;
`;



export const Icon = styled.Image`
  width: 50%;
  height: 110px;
`;


export const IconRight = styled.Image`
  width: 50%;
  height: 110px;
  margin-left: 50%;
`;