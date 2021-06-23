import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Container, HeaderArea, SearchArea, ListArea, Scroller, TextLogo } from './styled';
import { RefreshControl } from 'react-native';
import Input from '../../components/Input';
import TableItem from '../../components/TableItem';
import SearchIcon from '../../assets/search';


export default () => {
  const [refreshing, setRefreshing] = useState(true);
  const [search, setSearch] = useState('');

  const onRefresh = () => {
    setRefreshing(false);
  }
  const data = {
    "checkName": "Teste",
    "init": "21/06/2021",
    "final": "30/07/2021",
    "Question": 10,
    "checkUser": "marlon"
  }
  
  return (
    <Container>
      <Scroller RefreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <HeaderArea>
          <TextLogo>CLPP</TextLogo>
        </HeaderArea>
        {/* <SearchArea> */}
        <Input IconSvg={SearchIcon} placeholder="digite o nome da checklist" value={search} onChangeText={t => setSearch(t)} />
        {/* </SearchArea> */}
        <ListArea>
          <TableItem data={data} />
        </ListArea>
      </Scroller>
    </Container>
  )
}