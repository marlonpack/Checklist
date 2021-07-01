import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import Checkbox from '../../components/Checkbox';
import DataPicker from '../../components/DataPicker';
import Radio from '../../components/Radio';
import Slider from '../../components/Slider';
import TextArea from '../../components/TextArea';
import QuestionButton from '../../components/QuestionButton';
import SignatureCapture from '../../components/SignatureCapture';
import { Container, Scroller, HeaderArea, TextButton, ButtonSave, Header, HeaderText } from './styled';
import { Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import Loading from '../../components/Loading';
import MainTab from '../../stacks/MainTab';

export default ({ route, navigation }) => {
  const nav = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [load,setLoad] = useState(true)

 
  useEffect(async () => {
    setData([])
    setLoading(true)
    let res = await Api.GET_QUESTIONS(parseInt(route.params.item.id));
    // console.log(route.params.item.id)
    setData(res.data)
    setLoading(false)
    // navigation.addListener('focus', ()=>setLoad(!load))
    // [load, navigation]
  }, [route.params.item.id]);

  const handleTypeQuestion = (item) => {
    let element;
    switch (String(item.type)) {
      case '1':
        element = <Checkbox key={item.id} question={item.asking} option={item.option} />
        break
      case '2':
        element = <DataPicker key={item.id} question={item.asking} />
        break
      case '3':
        element = <Radio key={item.id} question={item.asking} option={item.option} />
        break
      case '4':
        element = <Slider key={item.id} question={item.asking} option={item.option} />
        break
      case '5':
        element = <TextArea key={item.id} question={item.asking} answer={'Digite  aqui'} />
        break
      case '6':
        element = <QuestionButton key={item.id} question={item.asking} answer={'Clique aqui'} onPress={() => nav.navigate('Capture', { type: 1 })} />
        break
      case '7':
        element = <QuestionButton key={item.id} question={item.asking} answer={'Clique aqui'} onPress={() => nav.navigate('Capture', { type: 0 })} />
        break
      default:
        console.warn('Não existe tipo=' + type)
        break
    }
    return element;
  }

  // console.log(route.params)

  return (
    // <SafeAreaView style={{ flex: 1 }}>
      <Container>
        {loading&&<Loading/>}
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="rgba(0,0,0,0.07)" translucent={false} />
        <Scroller>

          <Header>
            <HeaderText>{route.params.item.description}</HeaderText>
          </Header>

          {data.map((item, key) => (
            handleTypeQuestion(item)
          ))}

          <ButtonSave>
            <TextButton>Salvar</TextButton>
          </ButtonSave>

        </Scroller>
        {/* <MainTab/> */}
      </Container>
    // </SafeAreaView>
  );
}