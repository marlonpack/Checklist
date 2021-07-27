import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import SignatureCapture from './SignatureCapture';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { useNavigation } from '@react-navigation/native';

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonArea = styled.TouchableOpacity`
  background-color: transparent;
  /* width: 60px; */
  margin-left: 10px;
  border-radius: 36px;
  align-items: center;
  border: 1px solid #000;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const TextArea = styled.Text`
  color: #000;
  font-size: 18px;
`;

export default ({ question, answer, onPress, response, id, type}) => {
  const nav = useNavigation();
  const [verific, setVerific] = useState(false);
  // const [, setId] = useState(id);

  // console.log(testClick())

  // useEffect(() => {
  //  setVerific(response);
  // }, [response]);


  return (
    <Container style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    }}>
      <Header>
        <QuestionText>{question}</QuestionText>
        {verific&&<Verified width="24" height="24" />}
      </Header>
      {/* <Divider bgColor="#326744"  /> */}
      <ButtonArea onPress={()=>{
        setVerific(true)
        nav.navigate('Capture', { type: type, id:id })
        }}>
        <TextArea>
          {answer}
        </TextArea>
      </ButtonArea>

    </Container>
  )
}