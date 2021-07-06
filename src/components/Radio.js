import React from 'react';
import { Radio, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  margin: 5px 5px;
  background-color: #FFF;
  padding: 10px;
  border-radius: 20px;

`;

export default ({ question, option }) => {
  const [value, setValue] = React.useState("one");
  const [options, setOptions] = React.useState(option);

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

      <Divider bgColor="#326744" />
      <Radio.Group defaultValue="1" name="myRadioGroup" onChange={(nextValue) => { setValue(nextValue) }}>
        {Object.values(options).map((item, index) => <Radio key={index} accessibilityLabel="This is a checkbox" value={item} my={1}>{item}</Radio>)}
        {/* <Radio accessibilityLabel="This is a Radio" value="1" my={1}>
          First
        </Radio>
        <Radio accessibilityLabel="This is a Radio" value="2" my={1}>
          Second
        </Radio>
        <Radio accessibilityLabel="This is a Radio" value="3" my={1}>
          Third
        </Radio> */}
      </Radio.Group>
    </Container>
  )
}
