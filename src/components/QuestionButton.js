import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import SignatureCapture from './SignatureCapture';

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
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
  <Container>
  <QuestionText>{question}</QuestionText>
  <ButtonArea onPress={onPress}>
    <TextArea>
     {answer}
    </TextArea>
  </ButtonArea>
  </Container>
  )
}