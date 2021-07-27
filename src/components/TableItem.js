import React from 'react';
import styled from 'styled-components/native';


const Area = styled.TouchableOpacity`
  background-color: #FFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: column;
  border: solid 1px #3B6895;
  box-shadow: 0px 2px 1px rgba(0,0,0,0.25);
  
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




export default ({ data, disabled, onPress }) => {
  return (
    <Area disabled={disabled} onPress={onPress} style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    }}>
      <CheckName>{data.description}</CheckName>
      <InfoArea>
        <UserName>{data.date_init != null && data.date_final != null ? `Validade: ${data.date_init} a ${data.date_final}` : `Sem validade`}</UserName>
        <UserName>Questões: {data.count_question}</UserName>
      </InfoArea>
      <UserName>criador por: {data.creator_name}</UserName>
    </Area>
  )

}