import React from 'react';
import { Container, Message } from './styled';
import Verified from '../../assets/verified.svg';
import { useNavigation } from '@react-navigation/native';


export default ({route, navigation})=> {
  const nav = useNavigation();
  const [load,setLoad] = React.useState(true)
  
  React.useEffect(()=>{
  
    let time
  
    time= setTimeout(()=>{nav.navigate('Home')}, 5000)


    navigation.addListener('focus', ()=>{  
      setLoad(!load)

    })

    // return clearTimeout(time);
  
  },[load, navigation])

  return(
    <Container>
      <Verified width="100" height="100" fill="#000"/>
      <Message>Respostas enviada com sucesso</Message>
    </Container>
  ) ;
}
 
