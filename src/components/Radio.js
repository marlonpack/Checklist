import React,{useEffect, useContext} from 'react';
import { Radio, Center, NativeBaseProvider } from "native-base";
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import Verified from '../assets/verified.svg';
import { ResponseContext } from '../context/ResponseContext';

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
  justify-content: space-between;
`;

export default ({ question, option, setResponse, id, response }) => {
  const [value, setValue] = React.useState();
  const [options, setOptions] = React.useState(option);
  const [verific,setVerific] = React.useState(false);
  const { dispatch: responseDispatch} = useContext(ResponseContext);

  const handleCheck =(value)=>{

    setValue(value)
    responseDispatch({
      type: 'setResponse',
      payload:{ id: id, response: value }
    })
      // console.log(res)
      // for (let i = 0; i <= res.response.length; ++i) {
      //   if (res.response[i] && res.response[i].id == id) {
      //    console.log(res.response[i], i)
          
      //    responseDispatch({
      //       type: 'setResponseRemove',
      //       payload: i
      //       // payload: res.response[i]
      //     })
  
      //     responseDispatch({
      //       type: 'setResponse',
      //       payload:{ id: id, response: value }
      //     })
      //   } else {
  
      //     responseDispatch({
      //       type: 'setResponse',
      //       payload:{ id: id, response: value }
      //     })
      //   }
  
      // }
  }

  React.useEffect(() => {
    value != undefined && setVerific(true)
  }, [value]);

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
       {verific&&<Verified width="24" height="24"/>}
      </Header>

      <Divider bgColor="#326744" />

      <Radio.Group defaultValue="1" name="myRadioGroup" onChange={(nextValue) => { handleCheck(nextValue) }}>
        {Object.values(options).map((item, index) => <Radio key={index} accessibilityLabel="This is a checkbox" value={item} my={1}>{item}</Radio>)}
      </Radio.Group>
    </Container>
  )
}
