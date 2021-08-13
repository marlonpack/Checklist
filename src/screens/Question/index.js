import React, { useEffect, useState, useContext, useRef } from 'react';
import {StatusBar, Alert} from 'react-native';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import QuestionButton from '../../components/QuestionButton';
import { Container, Scroller, HeaderArea, TextButton, ButtonSave, Header, HeaderText } from './styled';
import { Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import Loading from '../../components/Loading';
import { ResponseContext } from '../../context/ResponseContext';
import InputCPF from '../../components/InputCPF';
import ModalNote from '../../components/Modal/ModalNote';
import ModalCPF from '../../components/Modal/ModalCPF';
import ErroLog from '../../components/ErroLog';

export default ({ route, navigation }) => {
  const nav = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [response, setResponse] = useState({});
  const [responseObject, setResponseObject] = useState([]);
  const [idQuestion, setIdQuestion] = useState();
  // const [res, setRes] = useState([]);
  const [tes, setTes] = useState(false);
  const { state: responseState, dispatch: responseDispatch } = useContext(ResponseContext);
  const Modal = useRef(null);
  const CPFModal = useRef(null);
  const[text, setText] = useState();


  const handleClickSave = () => {
    let unique = []
    
    setTes('Verificando Informações...')
    setLoading(true)
    for (let i = responseState.response.length; i >= 0; i--) {
      if (responseState.response[i] && !(unique.some(el => el.id === responseState.response[i].id))) {
        if (responseState.response[i].note == 'null' && responseState.response[i].type != '3' && responseState.response[i].type != '4') {
          Alert.alert('Erro',`você deixou de responder observação na questão: "${responseState.response[i].questionName}"`)
          unique.length = 0;
          setLoading(false)
          return;
        } else if (responseState.response[i].photo == 'null' && responseState.response[i].type != '3' && responseState.response[i].type != '4') {
          Alert.alert('Erro',`você deixou de responder foto na questão:  "${responseState.response[i].questionName}"`)
          unique.length = 0;
          setLoading(false)
          return;
        }
        else {
          unique.push(responseState.response[i])
        }
      }
    }

    for (let file of data) {
      if (!(unique.some(el => el.questionId === file.id))) {
        Alert.alert('Erro',`você não respondeu a questão ${file.description}`)
        unique.length = 0;
        setLoading(false)
        return;
      }
    }

    
    nav.navigate('Approved')
    console.log('u', unique)
    setLoading(false)
  }



  useEffect(async () => {
    setData([])
    setText('Carregando...')
    setLoading(true)
    let res = await Api.GET_QUESTIONS(parseInt(route.params.item.id));
    if(!res.error){
      setData(res.data)
      setLoading(false)
    }else{
      setLoading(false)
      Alert.alert('Erro', ErroLog(res.message))
    }
    navigation.addListener('focus', () => setLoad(!load))
    // [load, navigation]
    //[route.params.item.id]
    // console.log(route.params.item)
  }, [route.params.item.count_question || route.params.item.id || route.params.item.description]);




  const handleTypeQuestion = (item) => {
    let element;
    switch (String(item.type)) {
      case '1':
        element = <Checkbox key={item.id} idQuestion={idQuestion} setIdQuestion={setIdQuestion} setTes={setTes} question={item.description} Modal={Modal} option={item.option} id={item.id} response={response} />
        break
      case '2':
        element = <Radio key={item.id} idQuestion={idQuestion} setIdQuestion={setIdQuestion} setTes={setTes} question={item.description} Modal={Modal} option={item.option} id={item.id} response={response} />
        break
      case '3':
        element = <InputCPF key={item.id} question={item.description} CPFModal={CPFModal} idQuestion={idQuestion} setIdQuestion={setIdQuestion} option={item.option} id={item.id} setResponse={setResponse} response={response} />
        break
      case '4':
        element = <QuestionButton key={item.id} question={item.description} type={1} id={item.id} />
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
      {loading && <Loading text={text}/>}
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#326744" translucent={false} />
      <Scroller >

        <Header>
          <HeaderText>{route.params.item.description}</HeaderText>
        </Header>

        <Divider bgColor="#326744" />

        {data && data.map((item) => (
          handleTypeQuestion(item)
        ))}

        {!loading &&
          <ButtonSave onPress={handleClickSave}>
            <TextButton>Salvar</TextButton>
          </ButtonSave>
        }

      </Scroller>
      {/* <MainTab/> */}
      <ModalCPF CPFModal={CPFModal} idQuestion={idQuestion}></ModalCPF>
      <ModalNote Modal={Modal} idQuestion={idQuestion} ></ModalNote>
    </Container>
    // </SafeAreaView>
  );
}