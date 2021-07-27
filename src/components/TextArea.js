import React,{useContext} from "react"
import { TextArea } from "native-base"
import styled from 'styled-components/native';
import { Divider } from 'native-base';
import { ResponseContext } from '../context/ResponseContext';

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
 
`;

export const Container = styled.View`
  flex: 1;
  margin: 10px 0;
  background-color: #FFF;
  padding: 10px;
  /* border: 1px solid #3B6895; */
  border-radius: 20px;
`;

export default ({question, answer, response, id, setResponse}) => {
  const [verific,setVerific] = React.useState(false);
  const [handleChange,setHandleChange] = React.useState('');
  const { dispatch: responseDispatch} = useContext(ResponseContext);

  React.useEffect(()=>{
    // for(let i=0; i<= response.length; i++){
    //   if(response[i] && response[i].id!==id){
    //     setResponse([...response,{id:id, response:handleChange}])
    //   }else{
    //     response.splice(i,1)
    //     setResponse([...response,{id:id, response:handleChange}])
    //   }
    // }

    responseDispatch({
      type: 'setResponse',
      payload: { id: id, response: handleChange }
     })


    handleChange != '' ? setVerific(true): setVerific(false)
    
  },[handleChange])

  // React.useEffect(() => {
  //   value != undefined && setVerific(true)
  // }, [value]);


  return (
    // <Stack space={4} w="90%">
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
      <QuestionText>{question}</QuestionText>
      <Divider bgColor="#326744"  />
      <TextArea h={20} placeholder={answer} variant="unstyled" onChangeText={(t)=>setHandleChange(t)}/>
    </Container>
    // </Stack>
  )
}