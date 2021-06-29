import React from 'react';
import { Text, View } from 'react-native';
import Checkbox from '../../components/Checkbox';
import DataPicker from '../../components/DataPicker';
import Radio from '../../components/Radio';
import Slider from '../../components/Slider';
import TextArea from '../../components/TextArea';
import QuestionButton from '../../components/QuestionButton';
import {Container, Scroller, HeaderArea, TextButton, ButtonSave}from './styled';
import { Divider } from 'native-base';

export default ({ route, navigation }) => {

  const handleTypeQuestion = (type) => {
    let element;
    switch (type) {
      case '1':
        element = <Checkbox question={'digite sua pergunta aqui'}/>
        break
      case '2':
        element = <DataPicker question={'data'}/>
        break
      case '3':
        element = <Radio question={'digite sua pergunta aqui'}/>
        break
      case '4':
        element = <Slider question={'digite sua pergunta aqui'}/>
        break
      case '5':
        element = <TextArea question={'digite sua pergunta aqui'} answer={'Digite  aqui'}/>
        break
      case '6':
        element = <QuestionButton question={'Assinatura do líder do setor'} answer={'Clique aqui'}/>
        break
      case '7':
        element = <QuestionButton question={'tire uma foto líder do setor'} answer={'Clique aqui'}/>
        break
      default:
        console.warn('Não existe tipo=' + type)
        break
    }
    return element;
  }

  // console.log(route.params)

  return (
    <Container>
      <Scroller>
      {handleTypeQuestion('1')}
      <Divider bg="blue.500"/>
      {/* {handleTypeQuestion('2')}
      <Divider bg="blue.500"/> */}

      
      <ButtonSave>
        <TextButton>Salvar</TextButton>
      </ButtonSave> 
      </Scroller>
    </Container>
  );
}