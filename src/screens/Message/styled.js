import React from 'react';
import styled from 'styled-components';


export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #F1F1F1;
  /* padding: 80px; */
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 20px;
  border: 1px solid black;
  margin: 5px;
  border-radius: 8px;
`;

export const Area = styled.TouchableOpacity`
  background-color: #FFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: column;
  border: solid 1px #3B6895;
  box-shadow: 0px 2px 1px rgba(0,0,0,0.25);
  
`;


export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 2px;
  padding: 2px 12px;
  border: 1px solid black;
  align-items : center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: white;
`;

export const SearchInput = styled.TextInput`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  height: 90%;
`;