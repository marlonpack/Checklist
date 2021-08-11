import React, {useState, useContext, useRef} from 'react';
import { Modalize } from 'react-native-modalize';
import styled from 'styled-components/native';
import { TextArea } from "native-base";
import { ResponseContext } from '../../context/ResponseContext';
// import {UserContext} from '../../context/UserContext';


const Container = styled.View`
  padding: 10px;
  /* align-items: center; */
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





export default ({Modal, setResponseObject, idQuestion})=>{
  const [handleChange,setHandleChange] = React.useState('');

  const{dispatch: responseDispatch}= useContext(ResponseContext);


  const HandleClickSave = async()=>{


    responseDispatch({
      type: 'setNote',
      payload:{id: idQuestion, note: handleChange }
    })
   Modal.current?.close();
  };

  return(
    <Modalize ref={Modal} snapPoint={400} height={400}>
      <Container>
        <Message>Observação</Message>
      <TextArea h={20}   onChangeText={(t)=>setHandleChange(t)}/>
      <ButtonSave onPress={HandleClickSave}><ButtonText>Salvar</ButtonText></ButtonSave>
      </Container>
    </Modalize>
  )

}