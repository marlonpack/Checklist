import React, { useEffect, useState, useContext, useRef } from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
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


export default ({ route, navigation }) => {
  const nav = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [response, setResponse] = useState({});
  const [responseObject, setResponseObject] = useState({});
  const [idQuestion, setIdQuestion] = useState();
  // const [res, setRes] = useState([]);
  const [tes, setTes] = useState(false);
  const { state: responseState, dispatch: responseDispatch } = useContext(ResponseContext);
  const Modal = useRef(null);
  const CPFModal = useRef(null);

  const handleClickSave = () => {
    let unique = []
    for (let i = responseState.response.length; i >= 0; i--) {
      if (responseState.response[i] && !(unique.some(el => el.id === responseState.response[i].id))) {
        unique.push(responseState.response[i])
      }
    }

    console.log('u', unique)
  }
  
  
  useEffect(async () => {
    setData([])
    setLoading(true)
    let res = await Api.GET_QUESTIONS(parseInt(route.params.item.id));
    setData(res.data)
    setLoading(false)
    navigation.addListener('focus', () => setLoad(!load))
    // [load, navigation]
    //[route.params.item.id]
    // console.log(route.params.item)
  }, [route.params.item.count_question || route.params.item.id || route.params.item.description]);
  
  
  // useEffect(async()=>{
  //   if(Object.keys(responseObject).length !=0){
  //    await responseDispatch(responseObject)
  //   }
  
  // },[responseObject])
  // const handleClickCapture = (type,id)=>{
  //   nav.navigate('Capture', { type: type, id:id })
  //    setResponse(true, id)
  //    testClick(true)
  // }  

  const handleTypeQuestion = (item) => {
    let element;
    switch (String(item.type)) {
      case '1':
        element = <Checkbox key={item.id} idQuestion={idQuestion} setIdQuestion={setIdQuestion} setTes={setTes} question={item.description} Modal={Modal} option={item.option} id={item.id}  response={response} />
        break
      case '2':
        element = <Radio key={item.id} idQuestion={idQuestion} setIdQuestion={setIdQuestion} setTes={setTes} question={item.description} Modal={Modal} option={item.option} id={item.id}  response={response} />
        break
      case '3':
        element = <InputCPF key={item.id} question={item.description} CPFModal={CPFModal} idQuestion={idQuestion} setIdQuestion={setIdQuestion} option={item.option} id={item.id} setResponse={setResponse} response={response} />
        break
      case '4':
        element = <QuestionButton key={item.id} question={item.description}  type={1}  id={item.id}  />
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
      {loading && <Loading />}
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