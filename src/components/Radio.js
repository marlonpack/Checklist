import React from 'react';
import { Radio, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';


export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
`;

export default ({question}) => {
  const [value, setValue] = React.useState("one")

  return (
    <Container>
      <QuestionText> {question}</QuestionText>
      <Radio.Group defaultValue="1" name="myRadioGroup" onChange={(nextValue) => {setValue(nextValue)}}>
        <Radio accessibilityLabel="This is a Radio" value="1" my={1}>
          First
        </Radio>
        <Radio accessibilityLabel="This is a Radio" value="2" my={1}>
          Second
        </Radio>
        <Radio accessibilityLabel="This is a Radio" value="3" my={1}>
          Third
        </Radio>
      </Radio.Group>
    </Container>
  )
}
