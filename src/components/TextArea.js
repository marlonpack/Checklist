import React from "react"
import { View } from "react-native"
import { TextArea, Stack, Center, NativeBaseProvider } from "native-base"
import styled from 'styled-components/native';
import { Divider } from 'native-base';

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
 
`;

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;
`;

export default ({question, answer}) => {
  return (
    // <Stack space={4} w="90%">
    <Container>
      <QuestionText>{question}</QuestionText>
      <Divider bgColor="#326744"  />
      <TextArea h={20} placeholder={answer} variant="unstyled"/>
    </Container>
    // </Stack>
  )
}