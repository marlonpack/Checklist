import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Select, TextArea } from 'native-base';
import { Modalize } from 'react-native-modalize';

const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

// const Selected = styled(Select)``;

const Button = styled.TouchableOpacity`
 background-color: #326744;
  align-items: center;
  width: 40%;
  height: 50px;
  justify-content: center;
  border-radius: 50px;
  margin-top: 5px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

const Message = styled.Text`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export default ({ModalHelper}) => {


  return (
    <Modalize ref={ModalHelper} snapPoint={500} modalHeight={300}>

      <Container>

        <Message>Entre em contato com o suporte</Message>
        
        {/* <Select placeholder="digite aqui" accessibilityLabel="digite aqui" minWidth={500} dropdownOpenIcon>
          <Select.Item label="teste" value="teste"/>
        </Select> */}

        <TextArea h={20} w='100%' numberOfLines={4} placeholder="digite aqui sua duvida ou sugestão" accessibilityLabel="digite aqui sua duvida ou sugestão"/>

        <Button><ButtonText>Enviar</ButtonText></Button>
      </Container>
    </Modalize>
  );
}