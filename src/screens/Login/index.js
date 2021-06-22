import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import React, { useState } from 'react';
import { Container, InputArea, CustomButton, CustomButtonText, LogoArea, SignMessageButton, SignMessageButtonText } from './styled';
import Input from '../../components/Input';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';


export default () => {
  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
    <Container>
      <LogoArea>CLPP</LogoArea>
      <InputArea>
        <Input IconSvg={PersonIcon} placeholder="digite seu login" value={userField} onChangeText={t => setUserField(t)} />
        <Input IconSvg={LockIcon} placeholder="digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true} />
        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>

        <SignMessageButton>
          <SignMessageButtonText>Sua Senha é a padrão clique aqui para alterar-la</SignMessageButtonText>
        </SignMessageButton>
      </InputArea>
    </Container>
  )
}