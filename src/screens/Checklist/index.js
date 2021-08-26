import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Container, HeaderArea, SearchArea, ListArea, Scroller, TextLogo, Input, ButtonSearch } from './styled';
import { RefreshControl } from 'react-native';
// import Input from '../../components/Input';
import TableItem from '../../components/TableItem';
import SearchIcon from '../../assets/search';
import { UserContext } from '../../context/UserContext';
import Api from '../../Api';
import Loading from '../../components/Loading';



export default ({navigation}) => {
  const [refreshing, setRefreshing] = useState(true);
  const [search, setSearch] = useState('');
  const [listFilter, setListFilter] = useState([]);
  const { state } = useContext(UserContext);
  const [checklistDate, useChecklistDate] = useState([]);
  const [loading, setLoading] = useState(false)
  const [load,setLoad] = useState(true)

  const onRefresh = () => {
    setRefreshing(false);
  }

  const handleClickSearch=()=>{
    setLoading(true)
    let filter = checklistDate.filter((data)=>
      String(data.description).toLowerCase().includes(search)||
      String(data.data_init).toLowerCase().includes(search)||
      String(data.data_final).toLowerCase().includes(search)||
      String(data.creator_name).toLowerCase().includes(search)
    )
    setListFilter([...filter])
    setLoading(false)
  }

  useEffect(async () => {
    setLoading(true)
    let res = await Api.GET_CHECKLIST_ALL(parseInt(state.userId), state.session)
    if (!res["error"]) {
      useChecklistDate(res.data)
    } else {
      alert(res['message'])
    }
    setLoading(false)
    navigation.addListener('focus', ()=>{  
      setLoad(!load)

    })
  }, [load, navigation])

  
  return (
    <Container>
      <Scroller RefreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {loading&& <Loading/>}
        <SearchArea>
          <Input placeholder="digite o nome da checklist" value={search} onChangeText={t => setSearch(t)} />
          <ButtonSearch onPress={handleClickSearch}>
            <SearchIcon />
          </ButtonSearch>
        </SearchArea>
        <ListArea>
          {listFilter.length>0?
          listFilter.map(item => (
            <TableItem data={item} key={item.id} disabled={true} />
          )):
          checklistDate.map(item => (
            <TableItem data={item} key={item.id} disabled={true}/>
          ))}
        </ListArea>
      </Scroller>
    </Container>
  )
}