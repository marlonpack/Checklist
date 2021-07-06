import React from 'react';
import { Checkbox, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';

export const Container = styled.View`
  flex: 1;
  margin: 5px 0;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;
  /* width: 100%; */
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export default ({ question, option }) => {
  const [groupValues, setGroupValues] = React.useState([]);
  const [options, setOptions] = React.useState(option);
  // console.log(options)
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
      <Divider bgColor="#326744"  />
      <Checkbox.Group onChange={setGroupValues} value={groupValues}   >
        {/* <Checkbox accessibilityLabel="This is a checkbox" value="one" my={1}>One</Checkbox> */}
        {Object.values(options).map((item, index) => <Checkbox   key={index} accessibilityLabel="This is a checkbox" value={item} my={1}>{item}</Checkbox>)}

      </Checkbox.Group>
    </Container>
  )
}