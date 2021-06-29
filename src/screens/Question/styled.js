import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;


export const TextButton = styled.Text`
  font-size: 25px;
  color: #FFF;
`;

export const ButtonSave = styled.TouchableOpacity`
  align-items: center;
  background-color: #326744;
  width: 100px;
  margin: 5px auto;
  border-radius: 36px;
`;
