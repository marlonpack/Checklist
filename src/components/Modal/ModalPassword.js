import React, {useState, useContext} from 'react';
import { Modalize } from 'react-native-modalize';
import styled from 'styled-components/native';
// import {UserContext} from '../../context/UserContext';
import Api from '../../Api';

const Container = styled.View`
  padding: 10px;
  /* align-items: center; */
`;

const Label = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

const HeaderText = styled.Text`
  font-size: 30px;
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

const Input = styled.TextInput`
  border: 1px solid #000;
  border-radius: 50px;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  padding-left: 10px;
`;



export default ({ModalPass})=>{
  const [userName, setUserName]= useState('');
  const [lastPassword, setLastPassword]= useState('');
  const [newPassword, setNewPassword]= useState('');
  const [confirmPassword, setConfirmPassword]= useState('');

  // const{state: user}= useContext(UserContext);


  const HandleClickSave = async()=>{
    if(confirmPassword == newPassword) {
      let response = await Api.PASSWORD_PATTERN({ "user": userName, "password": lastPassword, "new_password": newPassword });
      if(!response.error){
        alert('sua senha foi modificada')
        ModalPass.current?.close();
      }
    }else{
      alert('senhas não se coincidem')
    }
  };

  return(
    <Modalize ref={ModalPass} snapPoint={600} >
      <Container>
        <HeaderText>Troque sua senha</HeaderText>

        <Label>digite seu usuário:</Label>
        <Input value={userName} onChangeText={t=>setUserName(t)}/>

        <Label>digite sua antiga senha:</Label>
        <Input value={lastPassword} secureTextEntry={true} onChangeText={t=>setLastPassword(t)}/>

        <Label>digite sua nova senha:</Label>
        <Input value={newPassword} secureTextEntry={true} onChangeText={t=>setNewPassword(t)}/>

        <Label>confirme sua nova senha:</Label>
        <Input value={confirmPassword} secureTextEntry={true} onChangeText={t=>setConfirmPassword(t)}/>

      <ButtonSave onPress={HandleClickSave}><ButtonText>Salvar</ButtonText></ButtonSave>
      </Container>
    </Modalize>
  )

}