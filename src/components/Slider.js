import React from 'react';
import {
  Slider,
  Text,
  Box,
} from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';


export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Container = styled.View`
   flex: 1;
  margin: 5px 5px;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;
`;

export const Header = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
`;

export default ({ question, response, id, setResponse }) => {
  const [onChangeValue, setOnChangeValue] = React.useState(0);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(0);
  const [verific,setVerific] = React.useState(false);

  React.useEffect(() => {
    for (let i = 0; i <= response.length; i++) {
      if (response[i] && response[i].id !== id) {
        setResponse([...response, { id: id, response: onChangeEndValue }])
      } else {
        response.splice(i, 1)
        setResponse([...response, { id: id, response: onChangeEndValue }])
      }
    }
    onChangeEndValue >0 ? setVerific(true) : setVerific(false) 
  }, [onChangeEndValue])



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

      <Header>
        <QuestionText>{question}</QuestionText>
      {verific&&<Verified width="24" height="24"/>}
      </Header>
      <Divider bgColor="#326744" />

      <Text>Valor: {onChangeValue}</Text>


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