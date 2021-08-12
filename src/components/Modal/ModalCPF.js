import React, {useState, useContext, useRef} from 'react';
import { Modalize } from 'react-native-modalize';
import styled from 'styled-components/native';
import { ResponseContext } from '../../context/ResponseContext';
// import {UserContext} from '../../context/UserContext';


const Container = styled.View`
  padding: 10px;
  margin: 10px;
  /* align-items: center; */
`;

export const ButtonArea = styled.TouchableOpacity`
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

const Message = styled.Text`
  font-size: 25px;
  margin-top: 10px;
`;



const ButtonSave = styled.TouchableOpacity`
  background-color: green;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  height: 50px;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  /* background-color: #83D6E3; */
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: #000000 solid 1px;
`;



const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  /* color: #268596; */
  margin-left: 10px;
  padding: 3px;
  /* align-items: center;
  justify-content: center; */
  height: 100%;
  /* border: 1px solid #000; */
`;


export const TextArea = styled.Text`
  color: #000;
  font-size: 16px;
  margin-bottom: 2px;
  /* border: 1px solid #000; */
`;




export default ({CPFModal, idQuestion})=>{
  const [handleChange,setHandleChange] = React.useState('');
  const [valueName, setValueName] = React.useState('');
  const [valueCPF, setValueCPF] = React.useState('');

  const{dispatch: responseDispatch}= useContext(ResponseContext);


  const HandleClickSave = async()=>{

    if(valueName.length<0 || valueCPF.length<14){
      alert('Nome ou CPF incorreto');
      return;
    }


    responseDispatch({
      type: 'setNote',
      payload:{id: idQuestion,  note: `${valueName}-${valueCPF}` }
    })
    CPFModal.current?.close();
    setValueCPF('');
    setValueName('');
  };

  return(
    <Modalize ref={CPFModal} snapPoint={400} >
      <Container>

      <InputArea>
          <TextArea>Nome:</TextArea>
          <Input
            placeholder="digite seu nome"
            // placeholderTextColor="#268596"
            value={valueName}
            onChangeText={(t) => setValueName(t)}
          />
        </InputArea>
        <InputArea>
          <TextArea>CPF:</TextArea>
          <Input
            placeholder="XXX.XXX.XXX-XX"
            keyboardType='numeric'
            // // placeholderTextColor="#268596"
            value={valueCPF}
            onChangeText={(t) => setValueCPF(t.replace(/\D/g, '')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d{1,2})/, '$1-$2')
              .replace(/(-\d{2})\d+?$/, '$1'))}
          // secureTextEntry={password}
          />
        </InputArea>
      <ButtonSave onPress={HandleClickSave}><ButtonText>Salvar</ButtonText></ButtonSave>
      </Container>
    </Modalize>
  )

}