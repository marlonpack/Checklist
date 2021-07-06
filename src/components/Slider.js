import React from 'react';
import {
  Slider,
  Stack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
`;

export default ({question})=>{
  const [onChangeValue, setOnChangeValue] = React.useState(0)
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(0)

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
      <Text>Valor: {onChangeValue}</Text>
      {/* <Text>onChangeEndValue - {onChangeEndValue}</Text> */}

      <Box mx={5} w="90%">
        <Slider
          defaultValue={0}
          minValue={0}
          maxValue={100}
          colorScheme="red"
          onChange={(v) => {
            setOnChangeValue(Math.floor(v))
          }}
          onChangeEnd={(v) => {
            v && setOnChangeEndValue(Math.floor(v))
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Container>
  )
}