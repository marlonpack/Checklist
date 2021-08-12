import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText, LogoArea, SignMessageButton, SignMessageButtonText } from './styled';
import Input from '../../components/Input';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import Api from '../../Api';
import { UserContext } from '../../context/UserContext';
import ErroLog from '../../components/ErroLog';

export default () => {
  const { state: user } = useContext(UserContext);
  const navigation = useNavigation();
  
  const [passwordField, setPasswordField] = useState('');
  const [newPasswordField, setNewPasswordField] = useState('');


  const handleClick = async () => {
    if (newPasswordField != '' && passwordField != '') {

      if(newPasswordField == passwordField){
        let json = await Api.PASSWORD_PATTERN({ "user": user.userName, "password": '1234', "new_password": passwordField })
        if(!json.error){
          Alert.alert('Sucesso!','Senha Alterada com sucesso')
          navigation.navigate("Login");
        }else{
          Alert.alert('Error',ErroLog(json.message))
        }
      }
    }
  }


  return (
    <Container>
      <LogoArea>CLPP</LogoArea>
      <InputArea>
        <Input IconSvg={PersonIcon} placeholder="digite seu login" value={user.userName}  />
        <Input IconSvg={LockIcon} placeholder="digite sua nova senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true} />
        <Input IconSvg={LockIcon} placeholder="Confirme sua nova senha" value={newPasswordField} onChangeText={t => setNewPasswordField(t)} password={true} />

        <CustomButton onPress={handleClick}>
          <CustomButtonText>ALTERAR</CustomButtonText>
        </CustomButton>

      </InputArea>
    </Container>
  )
}