import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import SignatureCapture from './SignatureCapture';
import { Divider } from 'native-base';

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;
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

export default ({question, answer, onPress})=>{

  return(
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
  <QuestionText>{question}</QuestionText>
  {/* <Divider bgColor="#326744"  /> */}
  <ButtonArea onPress={onPress}>
    <TextArea>
     {answer}
    </TextArea>
  </ButtonArea>
  </Container>
  )
}