import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import SignatureCapture from './SignatureCapture';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '../assets/clipboard.svg';

export const ButtonArea = styled.TouchableOpacity`
  /* background-color: transparent; */
  /* width: 60px; */
  /* margin-left: 10px; */
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #000; */
  margin: 5px 5px;
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  /* margin-bottom: 5px; */
  color: #000;
  font-weight: bold;
  /* margin-right: 5px; */
`;



export default ({ question, id, type }) => {
  const nav = useNavigation();
  const [verific, setVerific] = useState(false);
  // const [, setId] = useState(id);

  // console.log(testClick())

  // useEffect(() => {
  //  setVerific(response);
  // }, [response]);


  return (
    // <Container style={{
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 4,
    //   },
    //   shadowOpacity: 0.30,
    //   shadowRadius: 4.65,

    //   elevation: 8,
    // }}>
    //   <Header>
    //     {verific&&<Verified width="24" height="24" />}
    //   </Header>
    //  <Divider bgColor="#326744"  />
    <ButtonArea
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
      }}

      onPress={() => {
        setVerific(true)
        nav.navigate('Capture', { type: type, id: id })
      }}>

      {/* <Header> */}
        <QuestionText>{question}</QuestionText>
        <Clipboard width="20" height="20" />
      {/* </Header> */}

    </ButtonArea>

    // </Container>
  )
}