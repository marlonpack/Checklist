import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Api from '../Api';
import AddCircle from '../assets/addCircle.svg';

//  const Container = styled.View`
//   flex: 1;
//   margin: 5px 0;
//   background-color: #FFF;
//   padding: 10px;
//   border-radius: 20px;
//   margin: 5px 5px;
// `;

 const ButtonArea = styled.TouchableOpacity`
  /* background-color: transparent; */
  /* width: 60px; */
  /* margin-left: 10px; */
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #000; */
  margin: 5px 5px;
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
`;

 const QuestionText = styled.Text`
  font-size: 20px;
  /* margin-bottom: 5px; */
  font-weight: bold;
`;

//  const Header = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: space-between;
// `;

//  const InputArea = styled.View`
//   width: 100%;
//   height: 60px;
//   /* background-color: #83D6E3; */
//   flex-direction: row;
//   border-radius: 30px;
//   padding-left: 15px;
//   padding-right: 15px;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 15px;
//   border: #000000 solid 1px;
// `;



//  const Input = styled.TextInput`
//   flex: 1;
//   font-size: 16px;
//   /* color: #268596; */
//   margin-left: 10px;
//   /* padding: 3px; */
//   /* align-items: center;
//   justify-content: center; */
//   /* height: 100%; */
//   /* border: 1px solid #000; */
// `;


//  const TextArea = styled.Text`
//   /* color: #000; */
//   font-size: 18px;
//   /* margin-bottom: 2px; */
//   /* border: 1px solid #000; */
// `;

export default ({ question, id, setIdQuestion, idQuestion, CPFModal }) => {
  const [valueName, setValueName] = React.useState('');
  const [valueCPF, setValueCPF] = React.useState('');
  const [response, setResponse] = React.useState('');
  


  React.useEffect(async () => {
    setResponse([]);
    let res = await Api.GET_OPTION(id);
    setResponse(res.data);
  }, [id]);


  
  const handleClickNote = () => {
    idQuestion != response[0].id && setIdQuestion(response[0].id)
    CPFModal.current?.open();
  }


  return (
    <ButtonArea style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    }}

    onPress={handleClickNote}
    >
      <QuestionText>{question}</QuestionText>
    
      <AddCircle width="20" height="20" fill="#326744"/>

    </ButtonArea>
  );
}