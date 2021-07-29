import React from 'react';
import styled from 'styled-components/native';
import { Divider } from 'native-base';


export const Container = styled.View`
  flex: 1;
  margin: 5px 0;
  background-color: #FFF;
  padding: 10px;
  border-radius: 20px;
  margin: 5px 5px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  /* background-color: #83D6E3; */
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  margin-bottom: 15px;
  border: #000000 solid 1px;
`;



const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  /* color: #268596; */
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;


export const TextArea = styled.Text`
  color: #000;
  font-size: 16px;
  align-items: center;
  justify-content: center;
`;

export default ({ question }) => {
  const [valueName, setValueName] = React.useState('');
  const [valueCPF, setValueCPF] = React.useState('');

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
      <QuestionText>{question}</QuestionText>
      <InputArea>
      <TextArea>Nome:</TextArea>
        <Input
          placeholder="digite seu nome"
          // placeholderTextColor="#268596"
          value={valueName}
          onChangeText={(t) => setValueName(t)}
        />
      </InputArea>
      <InputArea>
        <TextArea>CPF:</TextArea>
        <Input
          placeholder="XXX.XXX.XXX-XX"
          keyboardType='numeric'
          // // placeholderTextColor="#268596"
          value={valueCPF}
          onChangeText={(t) => setValueCPF(t.replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1') )}
        // secureTextEntry={password}
        />
      </InputArea>
    </Container>
  );
}