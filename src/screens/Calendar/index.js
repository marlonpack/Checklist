import {useNavigation} from '@react-navigation/native';
import { View, Text } from 'react-native';
import React from 'react';
import {Agenda} from 'react-native-calendars';


export default ()=>{

  const items ={
    '2021-07-02':[{name:'teste'}],
    '2021-07-20':[{name:'teste'}],
  }

  return <Agenda
      items = {items}
      pastScrollRange={5}
      futureScrollRange={5}
      // hideKnob={true}
      // showClosingKnob={false}
  />
}