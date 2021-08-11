import React, { useEffect, useContext, useRef } from 'react';
import { Radio, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { ResponseContext } from '../context/ResponseContext';
import Api from '../Api';
import Note from '../assets/note.svg';
import Camera from '../assets/camera.svg';
import ModalNote from './Modal/ModalNote';
import { useNavigation } from '@react-navigation/native';

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: transparent;
  margin-left: 20px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  margin: 5px 5px;
  background-color: #FFF;
  padding: 10px;
  border-radius: 20px;

`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

export const HeaderTitle = styled.View`
  flex: 1;
  width: 90%;
`;

export const HeaderOption = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Main = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

export const Rad = styled.View`
  flex: 1;
  flex-direction: row;
  width: 50%;
`;


export const LineOption = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

export default ({ question, option, id, Modal, setTes, setResponseObject, idQuestion, setIdQuestion }) => {
  const [value, setValue] = React.useState();
  const [options, setOptions] = React.useState(option);
  const [verific, setVerific] = React.useState(false);
  const [note, setNote] = React.useState(false);
  const [photo, setPhoto] = React.useState(false);
  const [response, setResponse] = React.useState([]);
  const { dispatch: responseDispatch } = useContext(ResponseContext);
  const nav = useNavigation();
  // const Modal = useRef(null);


  const handleCheck = (value) => {
    setValue(value)
    setVerific(true)

    for (let req of response) {

      if (req.id == value) {
        // console.log(req)
        if (req.observe == 1 && req.photo == 0) {
          responseDispatch({
            type: 'setResponse',
            payload: { id: value, questionId: req.question_id, description: req.description, type: '2', note: 'null' }
          })
        }
        else if (req.photo == 1 && req.observe == 0) {
          responseDispatch({
            type: 'setResponse',
            payload: { id: value, questionId: req.question_id, description: req.description, type: '2', photo: 'null' }
          })
        }
        else if (req.photo == 1 && req.observe == 1) {
          responseDispatch({
            type: 'setResponse',
            payload: { id: value, questionId: req.question_id, description: req.description, type: '2', note: 'null', photo: 'null' }
          })
        }
        else if(req.photo == 1 && req.observe == 1){
          responseDispatch({
            type: 'setResponse',
            payload: { id: value, questionId: req.question_id, description: req.description, type: '2'}
          })
        }
      }
    }

    // setResponseObject({
    //   type: 'setResponse',
    //   payload: { id: value.id, questionId: id, description: value.description, photo: '', note: '' }
    // })
  }

  const handleClickNote = (item) => {
    idQuestion != item && setIdQuestion(item)
    Modal.current?.open();
    // Modal.current['a']=1
  }

  const handleClickPhoto = (item) => {
    // console.log('clique')
    // Modal.current?.open();
    nav.navigate('Capture', { type: 0, id: item })
    // setTes(true)
  }

  React.useEffect(async () => {
    setResponse([]);
    let res = await Api.GET_OPTION(id);
    setResponse(...response, res.data);
  }, [id]);



  // React.useEffect(() => {
  //   value != undefined && 

  // }, [value]);

  return (
    <Container style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    }}>

      <Header>

        <HeaderTitle>
          <QuestionText>{question}</QuestionText>
        </HeaderTitle>

        <HeaderOption>
          {verific && <Verified width="24" height="24" />}
        </HeaderOption>

      </Header>


      <Divider bgColor="#326744" />
      {/* // return (
        //   <Main key={index} >
        //     <Rad> */}
      <Radio.Group name="myRadioGroup" onChange={(nextValue) => { handleCheck(nextValue) }}>
        {response && response.map((item, index) => {
          return (
            <Main key={index}>
              <Radio  accessibilityLabel="This is a checkbox" value={item.id} my={1}>{item.description}</Radio>
              <LineOption>
                {item.observe == 1 && value == item.id && <Note width="24" height="24" onPress={() => handleClickNote(item.id)} />}
                {item.photo == 1 && value == item.id && <Camera width="24" height="24" onPress={() => handleClickPhoto(item.id)} />}
              </LineOption>
            </Main>
          )
        })}
      </Radio.Group>
      {/* // </Rad> */}
      {/* // </Main>
        // ) */}

    </Container >
  )
}
