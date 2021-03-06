import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';
import {
  Container,
  HeaderArea,
  SearchArea,
  ListArea,
  Scroller,
  TextLogo,
  Input,
  ButtonSearch,
} from './styled';
import {RefreshControl} from 'react-native';
import TableItem from '../../components/TableItem';
import SearchIcon from '../../assets/search';
import {UserContext} from '../../context/UserContext';
import Api from '../../Api';
import Loading from '../../components/Loading';
import ErroLog from '../../components/ErroLog';
import {Alert} from 'react-native';
import FabGroup from '../../components/FabGroup';

export default ({navigation}) => {
  const [refreshing, setRefreshing] = useState(true);
  const [search, setSearch] = useState('');
  const [listFilter, setListFilter] = useState([]);
  const {state} = useContext(UserContext);
  const [checklistDate, useChecklistDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [text, setText] = useState('');
  const nav = useNavigation();

  const onRefresh = () => {
    setRefreshing(false);
  };

  const handleClickSearch = () => {
    setLoading(true);
    setText('pesquisando...');
    let filter = checklistDate.filter(
      data =>
        String(data.description).toLowerCase().includes(search) ||
        String(data.data_init).toLowerCase().includes(search) ||
        String(data.data_final).toLowerCase().includes(search) ||
        String(data.creator_name).toLowerCase().includes(search),
    );
    setListFilter([...filter]);
    setLoading(false);
  };

  // console.log(navigation);

  useEffect(async () => {
    setLoading(true);
    let res = await Api.GET_CHECKLIST_HOME(
      parseInt(state.userId),
      state.session,
    );
    if (!res.error) {
      useChecklistDate(res.data);
    } else {
      Alert.alert('Erro', ErroLog(res.message));
    }
    setLoading(false);
    navigation.addListener('focus', () => {
      setLoad(!load);
    });
  }, [load, navigation]);

  const handleClickQuestion = item => {
    // console.log('item',item)
    nav.navigate('Question', {item: item});
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0.07)"
        translucent={false}
      />
      <Scroller
        RefreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading && <Loading text={text} />}
        <HeaderArea>
          <TextLogo>CLPP</TextLogo>
        </HeaderArea>
        <SearchArea>
          <Input
            placeholder="digite o nome da checklist"
            value={search}
            onChangeText={t => setSearch(t)}
          />
          <ButtonSearch onPress={handleClickSearch}>
            <SearchIcon />
          </ButtonSearch>
        </SearchArea>
        <ListArea>
          {listFilter.length > 0
            ? listFilter.map(item => (
                <TableItem
                  data={item}
                  key={item.id}
                  onPress={() => handleClickQuestion(item)}
                />
              ))
            : checklistDate.map(item => (
                <TableItem
                  data={item}
                  key={item.id}
                  onPress={() => handleClickQuestion(item)}
                />
              ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
