import React from 'react';
import styled from 'styled-components/native';


const Area = styled.TouchableOpacity`
  background-color: #FFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: column;
  border: solid 1px #3B6895;
  
`;

const InfoArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* padding: 20px; */
  margin: 10px 0;
`;

const UserName = styled.Text`
  font-size: 15px;
`;

const CheckName = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;




export default ({data})=>{
  return(
    <Area>
      <CheckName>{data.checkName}</CheckName>
      <InfoArea>
      <UserName>Validade: {data.init} a {data.final}</UserName>
      <UserName>Questões: {data.Question}</UserName>
      </InfoArea>
      <UserName>criador por: {data.checkUser}</UserName>
    </Area>
  )

}