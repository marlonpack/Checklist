import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import { Container, InputArea, CustomButton, CustomButtonText, LogoArea, SignMessageButton, SignMessageButtonText } from './styled';
import Input from '../../components/Input';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import Api from '../../Api';
import { UserContext } from '../../context/UserContext';
import Loading from '../../components/Loading';
import { Keyboard, Alert } from 'react-native';
import ErroLog from '../../components/ErroLog';


export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordChange, setPasswordChange] = useState(false);
  const [loading, setLading] = useState(false);
  const [text, setText]= useState('');


  const handleClick = async () => {
    if (userField != '' && passwordField != '') {
      Keyboard.dismiss()
      setText('buscando informações...')
      setLading(true)
      let json = await Api.TOKEN_POST({ "user": userField, "password": passwordField })

      if (!json.error) {

        userDispatch({
          type: 'setSession',
          payload: {
            session: json.data.session
          }
        })

        userDispatch({
          type: 'setUserId',
          payload: {
            userId: json.data.id
          }
        })


        let userPhoto = await Api.USER_PHOTO(json.data.session, json.data.id)

        if (!userPhoto.error) {

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: userPhoto.photo
            }
          })

          let dataUser = await Api.EMPLOYEE_USER(json.data.session, json.data.id);

          if (!dataUser.error) {
            setText('bem vindo...')
            userDispatch({
              type: 'setUserName',
              payload: {
                userName: dataUser.data[0].name
              }
            })

            navigation.reset({ routes: [{ name: 'MainTab' }] })

          }else{
            Alert.alert('Error',ErroLog(json.message));
          }
        } else {
          Alert.alert('Error',ErroLog(json.message));
        }

      } else {
        userDispatch({
          type: 'setUserName',
          payload: {
            userName: userField
          }
        })
        if (json.message == "Default password is not permited") {

          setPasswordChange(true)
        }
        else {
          Alert.alert('Error',ErroLog(json.message));
        }
      }
    } else {
      Alert.alert('Error','digite seu nome de usuário e a senha')
    }
    setLading(false)
  }

  const handleClickChangePassword = () => {
    navigation.navigate('ChangePassword');
    setPasswordField('');
    setPasswordChange(false);
    setUserField('');
  }

  return (
    <Container>
      <Image style={{ width:100, height:100}}source={require('../../assets/logo.png')}  />
      {loading && <Loading text={text}/>}
      <LogoArea>Checklist PegPese</LogoArea>
      <InputArea>
        <Input IconSvg={PersonIcon} placeholder="digite seu login" value={userField} onChangeText={t => setUserField(t)} />
        <Input IconSvg={LockIcon} placeholder="digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true} />

        <CustomButton onPress={handleClick}>
          <CustomButtonText >LOGIN</CustomButtonText>
        </CustomButton>

        {passwordChange &&
          <SignMessageButton onPress={handleClickChangePassword} >
            <SignMessageButtonText>Sua senha é a padrão</SignMessageButtonText>
            <SignMessageButtonText> Clique aqui para alterar-la</SignMessageButtonText>
          </SignMessageButton>
        }
      </InputArea>
    </Container>
  )
}