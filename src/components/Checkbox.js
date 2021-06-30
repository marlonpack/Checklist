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

export default ({ question, option }) => {
  const [groupValues, setGroupValues] = React.useState([]);
  const [options, setOptions] = React.useState(option)
  // console.log(options)
  return (
    <Container>
      <QuestionText>{question}</QuestionText>
      <Checkbox.Group onChange={setGroupValues} value={groupValues} >
        {/* <Checkbox accessibilityLabel="This is a checkbox" value="one" my={1}>One</Checkbox> */}
        {Object.values(options).map((item, index) => <Checkbox key={index} accessibilityLabel="This is a checkbox" value={item} my={1}>{item}</Checkbox>)}

      </Checkbox.Group>
    </Container>
  )
}