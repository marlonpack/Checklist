import React, { useContext } from 'react';
import { Checkbox, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { ResponseContext } from '../context/ResponseContext';
import Api from '../Api';
import Note from '../assets/note.svg';
import Camera from '../assets/camera.svg';
import { useNavigation } from '@react-navigation/native';

export const Container = styled.View`
  flex: 1;
  margin: 5px 0;
  background-color: #FFF;
  padding: 10px;
  border-radius: 20px;
  margin: 5px 5px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
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

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: transparent;
  margin-left: 20px;
  `;

export const Main = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

export const Check = styled.View`
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
  const [groupValues, setGroupValues] = React.useState([]);
  const [options, setOptions] = React.useState(option);
  const [verific, setVerific] = React.useState(false);
  const [response, setResponse] = React.useState([]);
  const [note, setNote] = React.useState(false);
  const [photo, setPhoto] = React.useState(false);
  const nav = useNavigation();
  const { dispatch: responseDispatch } = useContext(ResponseContext);

  React.useEffect(async () => {
    setResponse([]);
    let res = await Api.GET_OPTION(id);
    setResponse(...response, res.data);
  }, [id]);


  const handleCheck = async (value) => {
    setGroupValues(value)

    if (value.length > 0) {
      setVerific(true)

      for (let required of value) {
        for (let req of response) {

          if (req.id == required) {

            if (req.observe == 1 && req.photo == 0) {
              responseDispatch({
                type: 'setResponse',
                payload: { id: required, questionName:question, questionId: req.question_id, description: req.description, type: '1', note: 'null' }
              })
            }
            else if (req.photo == 1 && req.observe == 0) {
              responseDispatch({
                type: 'setResponse',
                payload: { id: required, questionName:question, questionId: req.question_id, description: req.description, type: '1', photo: 'null' }
              })
            }
            else if (req.photo == 1 && req.observe == 1) {
              responseDispatch({
                type: 'setResponse',
                payload: { id: required, questionName:question, questionId: req.question_id, description: req.description, type: '1', note: 'null', photo: 'null' }
              })
            }
            else if (req.photo == 0 && req.observe == 0) {
              responseDispatch({
                type: 'setResponse',
                payload: { id: required, questionName:question, questionId: req.question_id, description: req.description, type: '1' }
              })
            }
          }
        }
      }
    }
    else {
      setVerific(false);
    }
  }

  const handleClickNote = (item) => {
    idQuestion != item && setIdQuestion(item)
    Modal.current?.open();
  }

  const handleClickPhoto = (item) => {
    nav.navigate('Capture', { type: 0, id: item })
  }


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

      {response.length > 0 && response.map((item, key) => {
        return (
          <Main key={key} >
            <Check>
              <Checkbox.Group onChange={t => handleCheck(t)} value={groupValues}   >
                <Checkbox accessibilityLabel="This is a checkbox" value={item.id} my={1}>{item.description}</Checkbox>
              </Checkbox.Group>
            </Check>
            <LineOption>
              {item.observe == 1 && groupValues.some(element => element == item.id) && <Note width="24" height="24" onPress={() => handleClickNote(item.id)} />}
              {item.photo == 1 && groupValues.some(element => element == item.id) && <Camera width="24" height="24" onPress={() => handleClickPhoto(item.id)} />}
            </LineOption>
          </Main>
        )
      }
      )}

    </Container>
  )
}