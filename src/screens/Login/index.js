import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import React, { useState, useContext } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText, LogoArea, SignMessageButton, SignMessageButtonText } from './styled';
import Input from '../../components/Input';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import Api from '../../Api';
import { UserContext } from '../../context/UserContext';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordChange, setPasswordChange] = useState(false);


  const handleClick = async () => {
    if (userField != '' && passwordField != '') {
      let json = await Api.TOKEN_POST({ "user": userField, "password": passwordField })
      if (!json.error) {
        let userPhoto = await Api.USER_PHOTO(json.data.session, json.data.id)

        if (!json.error) {

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: userPhoto.photo
            }
          })

          navigation.reset({ routes: [{ name: 'MainTab' }] })

        } else {
          alert(json.message);
        }

      } else {
       
        if (json.message == "Default password is not permited") {
          userDispatch({
            type: 'setUserName',
            payload: {
              userName: userField
            }
          })
          setPasswordChange(true)
        }
        else {
          alert(json.message);
        }
      }
    } else {
      alert('digite seu nome de usuário e a senha')
    }
  }

  const handleClickChangePassword = () => {
    navigation.navigate('ChangePassword');
    setPasswordField('');
    setPasswordChange(false);
    setUserField('');
  }

  return (
    <Container>
      <LogoArea>CLPP</LogoArea>
      <InputArea>
        <Input IconSvg={PersonIcon} placeholder="digite seu login" value={userField} onChangeText={t => setUserField(t)} />
        <Input IconSvg={LockIcon} placeholder="digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true} />

        <CustomButton onPress={handleClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>

        {passwordChange &&
          <SignMessageButton onPress={handleClickChangePassword}>
            <SignMessageButtonText>Sua senha é a padrão</SignMessageButtonText>
            <SignMessageButtonText> Clique aqui para alterar-la</SignMessageButtonText>
          </SignMessageButton>
        }
      </InputArea>
    </Container>
  )
}