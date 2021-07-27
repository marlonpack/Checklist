import React, { useContext } from 'react';
import { Checkbox, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { ResponseContext } from '../context/ResponseContext';

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
  justify-content: space-between;
`;

export default ({ question, option, id, response, setResponse }) => {
  const [groupValues, setGroupValues] = React.useState([]);
  const [options, setOptions] = React.useState(option);
  const [verific, setVerific] = React.useState(false);

  const { dispatch: responseDispatch} = useContext(ResponseContext);
  // console.log(options)

  // userDispatch({
  //   type: 'setSession',
  //   payload: {
  //     session: json.data.session
  //   }
  // })

  const handleCheck = (value) => {
    setGroupValues(value)

     responseDispatch({
      type: 'setResponse',
      payload: { id: id, response: value }
     })


    // for (let i = 0; i <= res.response.length; ++i) {
    //   // console.log(Object.assign({},value))
    //   if (res.response[i] && res.response[i].id == id) {
    //   console.log(res.response[i], i)
        
    //    responseDispatch({
    //       type: 'setResponseRemove',
    //       payload: i
    //       // payload: res.response[i]
    //     })
        
    //     responseDispatch({
    //       type: 'setResponse',
    //       payload:{ id: id, response: Object.assign({},value) }
    //     })
    //   } else {

    //     responseDispatch({
    //       type: 'setResponse',
    //       payload:{ id: id, response: Object.assign({},value) }
    //     })
    //   }

    // }
    // console.log('res', res.response.length, res)


    // for (let i = 0; i <= res.length; i++) {
    //   console.log('res',res[i] && res[i].id != id)
    //   if (res[i] && res[i].id != id) {
    //     // setResponse([...res, { id: id, response: res }])
    //     responseDispatch({
    //       type: 'setResponse',
    //       payload: { id: id, response: value }
    //     })
    //     console.log('resa',res)
    //   } else {
    //     console.log('resd',res)
    //     res.splice(i, 1)
    //     console.log('resd',res)
    //     responseDispatch({
    //       type: 'setResponse',
    //       payload: { id: id, response: value }
    //     })
    //   }
    // }
  }

  React.useEffect(() => {
    groupValues.length > 0 && setVerific(true)
    groupValues.length == 0 && setVerific(false)
  }, [groupValues]);

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
        <QuestionText>{question}</QuestionText>
        {verific && <Verified width="24" height="24" />}
      </Header>
      <Divider bgColor="#326744" />

      <Checkbox.Group onChange={t => handleCheck(t)} value={groupValues}   >
        {Object.values(options).map((item, index) => <Checkbox key={index} accessibilityLabel="This is a checkbox" value={item} my={1}>{item}</Checkbox>)}

      </Checkbox.Group>
    </Container>
  )
}