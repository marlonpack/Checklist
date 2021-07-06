import {useNavigation} from '@react-navigation/native';
import { View, Text } from 'react-native';
import React, {useContext, useRef} from 'react';
import {Container, AreaDataUser, AreaButton, ImagemUser, NameUser, ButtonHelp, ButtonPassword, ButtonLogout, TextButton} from './styled';
import { UserContext } from '../../context/UserContext';
import {Modalize} from 'react-native-modalize';
import ModalLogout from '../../components/Modal/ModalLogout';
import ModalHelp from '../../components/Modal/ModalHelp';
import ModalPassword from '../../components/Modal/ModalPassword';

export default ()=>{
  const { state: user } = useContext(UserContext);
  const ModalizeRef = useRef(null);
  const ModalHelper = useRef(null);
  const ModalPass = useRef(null);

  const OpenLogout=()=>{
    ModalizeRef.current?.open();
  };

  const OpenHelp=()=>{
    ModalHelper.current?.open();
  }

  const OpenPassword=()=>{
    ModalPass.current?.open();
  }

  return (
    <Container>
     
      <AreaDataUser>
        <ImagemUser source={{ uri: 'data:image/png;base64,' + user.avatar }}/>
        <NameUser>{user.userName}</NameUser>
      </AreaDataUser>

      <AreaButton>

      <ButtonPassword onPress={OpenPassword}>
        <TextButton>Alterar Senha</TextButton>
      </ButtonPassword>
      
      <ButtonHelp onPress={OpenHelp}>
        <TextButton>Suporte</TextButton>
      </ButtonHelp>

      <ButtonLogout onPress={OpenLogout}>
        <TextButton>Sair</TextButton>
      </ButtonLogout>

      </AreaButton>

      <ModalLogout ModalizeRef={ModalizeRef} ></ModalLogout>
      <ModalHelp ModalHelper={ModalHelper}></ModalHelp>
      <ModalPassword ModalPass={ModalPass}></ModalPassword>
    </Container>
  )
}