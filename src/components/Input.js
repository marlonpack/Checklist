import React from 'react';
import styled from 'styled-components/native';
import { Divider } from 'native-base';

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
`;

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <Input 
        placeholder={placeholder}
        // placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        />
        <IconSvg width="24" height="24" fill="black" />
    </InputArea>
  );
}