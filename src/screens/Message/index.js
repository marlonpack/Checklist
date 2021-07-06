import {useNavigation} from '@react-navigation/native';
import { View,Text } from 'react-native';
import React from 'react';
import {Container, Button, TextButton, CircleButton} from './styled';


export default ()=>{

  return (
    <Container>
      
 
      <CircleButton>
        <TextButton>5</TextButton>
      </CircleButton>

      <Button>
      <TextButton>Recebidas</TextButton>
      </Button>


      <Button>
      <TextButton>Enviar</TextButton>
      </Button>

    </Container>
  );
}