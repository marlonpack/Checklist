import React from 'react';
import { Checkbox, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;

export default ({question}) => {
  const [groupValues, setGroupValues] = React.useState([]);

  return (
    <Container>
      <QuestionText>{question}</QuestionText>
      <Checkbox.Group onChange={setGroupValues} value={groupValues} >
        <Checkbox accessibilityLabel="This is a checkbox" value="one" my={1}>One</Checkbox>
        <Checkbox accessibilityLabel="This is a checkbox" value="two" my={1}>Two</Checkbox>
      </Checkbox.Group>
    </Container>
  )
}