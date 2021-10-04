import { useNavigation, useIsFocused} from '@react-navigation/native';
import { View, Text, FlatList, TextInput } from 'react-native';
import React, { useEffect, useContext, useState, useRef } from 'react';
import { Container, Scroll, Header, SearchInput } from './styled';
import Api from '../../Api';
import { UserContext } from '../../context/UserContext';
import ErroLog from '../../components/ErroLog';
import { Keyboard, Alert } from 'react-native';
import Search from '../../assets/search.svg';
import Notification from '../../assets/notification.svg';
import UsersMessage from '../../components/UsersMessage';
import Person from '../../assets/person.svg';
import ModalMessagePerson from '../../components/Modal/ModalMessagePerson';
import {ws} from '../../components/WebSocket';

export default ({ navigation}) => {
  const { state: userState } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [changeSearches, setChangeSearches] = useState(false);
  const [search, setSearch] = useState([]);
  const modal = useRef(null);
  const nav = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;
    // console.trace()
    // nav.navigate('Talks', { item: {"description": "Hygor Azevedo Bueno", "id_user": "148", "notification": "0"} })


    const getUserTalksMessage = async()=>{
      let res = await Api.GET_NOTIFY(userState.session, userState.userId);
      
      if (res.error) {
        Alert.alert('Error', ErroLog(res.message));
        return;
      }

      setData(res.data)
    }

    if(isActive){
      getUserTalksMessage();
    }
    

    return{
      isActive: false
    }

  }, [isFocused]);
  

  useEffect(async () => {
    if (text.length <= 0) setChangeSearches(false)
  }, [text.length <= 0]);


  useEffect(async () => {
    let users = await Api.ALL_USER(userState.session);

    if (users.error) {
      Alert.alert('Error', ErroLog(res.message));
      return;
    }

    setAllUsers(users.data)
  }, []);


  const handleClickPerson = () => {
    modal.current?.open();
  }


  ws.onmessage = function (ev) {
    // console.log(JSON.parse(ev.data))
    let json = JSON.parse(ev.data)
    if (json.objectType === 'message' && navigation) {
      getMessage(JSON.parse(ev.data))
    }

  }

  const getMessage = async(ev) => {

    let res = await Api.GET_NOTIFY(userState.session, userState.userId);

    // setData('')
    if (res.error) {
      Alert.alert('Error', ErroLog(res.message));
      return;
    }
    // console.log(res.data);
    setData(res.data)
  }

  const handleClickSearch = async () => {
    let searchUser = [];

    for (let i = 0; i < allUsers.length; i++) {
      if ((allUsers[i].user.toLowerCase().indexOf(text.toLowerCase()) >= 0) && (allUsers[i].id) != userState.userId) {
        searchUser.push({
          "id_user": allUsers[i].id,
          "description": allUsers[i].user,
          "notification": allUsers[i].notification
        })
      }
    }
    setSearch(searchUser)
    setChangeSearches(true)
  }


  const handleClickTalks = item => {
    console.log(item)

    nav.navigate('Talks', { item: item })
 
  }

  return (
    <Container>
      <ModalMessagePerson Modal={modal} allUsers={allUsers} userId={userState.userId} />
      <Scroll>
        <Header >
          <Search width='30px' height='30px' onPress={handleClickSearch} />
          <SearchInput placeholder="buscar aqui" onChangeText={t => setText(t)} />
          <Person width='30px' height='30px' onPress={handleClickPerson} />
        </Header>
        {!changeSearches ?
          data?.map((item, key) =>
            <UsersMessage data={item} key={key} onPress={() => handleClickTalks(item)} />
          )
          :
           search?.map((item, key) =>
            <UsersMessage data={item} key={key} onPress={() => handleClickTalks(item)} />
          )}
      </Scroll>
    </Container>
  );
}