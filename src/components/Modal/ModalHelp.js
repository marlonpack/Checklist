import React, { useRef, useState, useContext } from 'react';
import styled from 'styled-components/native';
import { Select, TextArea } from 'native-base';
import { Modalize } from 'react-native-modalize';
import { UserContext } from '../../context/UserContext';
import Api from '../../Api';
import { Alert } from 'react-native';

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
  const[text, setText] = useState('');
  const{state: userState} = useContext(UserContext);

  const handleChange= async()=>{
    let res= await Api.POST_SUPPORT({"id_application":13, "id_user":userState.userId, "message": text}, userState.session);
    console.log(res);
    if(res.error){
      Alert.alert("Error", "não foi possível registrar sua mensagem");
    }
  }



  return (
    <Modalize ref={ModalHelper}sss adjustToContentHeight={true}>

      <Container>

        <Message>Entre em contato com o suporte</Message>
        
   
        <TextArea h={20} onChangeText={t=>setText(t)} w='100%' numberOfLines={4} placeholder="digite aqui sua duvida ou sugestão" accessibilityLabel="digite aqui sua duvida ou sugestão"/>

        <Button onPress={handleChange}><ButtonText>Enviar</ButtonText></Button>
      </Container>
    </Modalize>
  );
}