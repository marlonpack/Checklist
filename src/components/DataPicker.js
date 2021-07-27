import React, { useState, useEffect, useContext } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { ResponseContext } from '../context/ResponseContext';

export const Container = styled.View`
  flex: 1;
  margin: 5px 5px;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;

`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const ButtonArea = styled.TouchableOpacity`
  background-color: transparent;
  /* width: 60px; */
  margin-left: 10px;
  border-radius: 36px;
  align-items: center;
  border: 1px solid #000;
`;

export const TextArea = styled.Text`
  color: #000;
  font-size: 18px;
  margin: 4px 0;
`;

export const Header = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
`;


export default ({ question, response, id, setResponse }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [verific, setVerific] = React.useState(false);
  const { dispatch: responseDispatch} = useContext(ResponseContext);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };




  const dateFormat = (date) => {
    let dateInit = new Date(date);
    let year = dateInit.getFullYear();
    let month = (dateInit.getMonth() + 1) < 9 ? '0' + (dateInit.getMonth() + 1) : dateInit.getMonth() + 1;
    let day = dateInit.getDate() < 9 ? '0' + dateInit.getDate() : dateInit.getDate();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    // console.log(date.getFullYear()+'-'+parseInt(date.getMonth()+1)+'-'+date.getDate())
    // console.log(response)
    responseDispatch({
      type: 'setResponse',
      payload: { id: id, response: `${date.getFullYear()}-${parseInt(date.getMonth() + 1)}-${date.getDate()}` }
    })

    // for (let i = 0; i <= response.length; i++) {
    //   if (response[i] && response[i].id !== id) {
    //     setResponse([...response, { id: id, response: `${date.getFullYear()}-${parseInt(date.getMonth() + 1)}-${date.getDate()}` }])
    //   } else {
    //     response.splice(i, 1)
    //     setResponse([...response, { id: id, response: `${date.getFullYear()}-${parseInt(date.getMonth() + 1)}-${date.getDate()}` }])
    //   }
    // }
  }, [date])



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
        <Verified width="24" height="24" />
      </Header>
      <Divider bgColor="#326744" />

      <TextArea>data:{dateFormat(date)}</TextArea>

      <ButtonArea onPress={showDatepicker} >
        <TextArea>Data</TextArea>
      </ButtonArea>


      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}

    </Container>
  )
}