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

export const HeaderArea = styled.View`
  align-items: center;
  background-color: aliceblue;
  height: 90px;
  margin: 20px 0;
  justify-content: center;
`;

// export const SearchArea = styled.View`
//   height: 60px;
//   border-radius: 30px;
//   flex-direction: row;
//   align-items: center;
//   padding-left: 20px;
//   padding-right: 20px;
//   margin-top: 30px;
//   background-color: azure;
// `;


export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  /* background-color:red; */
  /* border: solid 1px #3B6895; */
`;


export const TextLogo = styled.Text`
  font-size: 36px;
`;


