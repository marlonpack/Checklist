import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

const ContainerButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const ButtonYes = styled.TouchableOpacity`
  background-color: #326744;
  align-items: center;
  width: 40%;
  height: 50px;
  justify-content: center;
  border-radius: 50px;
`;

const ButtonNo = styled.TouchableOpacity`
  background-color: #F95050;
  height: 50px;
  width: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

const Message = styled.Text`
  font-size: 25px;
  margin-top: 10px;
`;


export default ({ ModalizeRef }) => {

  const navigation = useNavigation();

  const HandleClickNo = () => {
    ModalizeRef.current?.close();
  };

  const HandleClickYes= ()=>{
    navigation.reset({routes: [{ name: 'Login' }]});
  };



  return (
    <Modalize ref={ModalizeRef} snapPoint={200} >
      <Container>

        <Message>Deseja realmente sair?</Message>


        <ContainerButton>

          <ButtonYes onPress={HandleClickYes}><ButtonText>Sim</ButtonText></ButtonYes>

          <ButtonNo onPress={HandleClickNo}><ButtonText>Não</ButtonText></ButtonNo>

        </ContainerButton>
      </Container>
    </Modalize>
  )

};