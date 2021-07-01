import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { Divider } from 'native-base';

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
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
`;


export default ({question}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  const dateFormat=(date)=>{
    let dateInit = new Date(date);
    let year = dateInit.getFullYear();
    let month = (dateInit.getMonth()+1)<9?'0'+(dateInit.getMonth()+1):dateInit.getMonth()+1;
    let day = dateInit.getDate()<9? '0'+dateInit.getDate(): dateInit.getDate();
    return `${day}/${month}/${year}`;
  }
  // return (
  //   <View>
  //     <View>
  //       <Button onPress={showDatepicker} title="Show date picker!" />
  //     </View>
  //     <View>
  //       <Button onPress={showTimepicker} title="Show time picker!" />
  //     </View>
  //     {show && (
  //       <DateTimePicker
  //         testID="dateTimePicker"
  //         value={date}
  //         mode={mode}
  //         is24Hour={true}
  //         display="default"
  //         onChange={onChange}
  //       />
  //     )}
  //   </View>
  // );

  return (
    <Container>
      <QuestionText>{question}</QuestionText>
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