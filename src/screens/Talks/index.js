import React, {
  useEffect,
  useContext,
  useState,
  useRef,
  useCallback,
} from 'react';
import {
  Container,
  Scroll,
  Header,
  Footer,
  SenderInput,
  MessageUsers,
  Main,
  MessageSend,
  NameUser,
  ButtonNavigate,
  AvatarIcon,
  ButtonBeforeMessage,
  Icon,
  IconRight,
} from './styled';
import Api from '../../Api';
import Sender from '../../assets/sender.svg';
import Clip from '../../assets/clip.svg';
import {UserContext} from '../../context/UserContext';
import Loading from '../../components/Loading';
import {ws} from '../../components/WebSocket';
import {useNavigation} from '@react-navigation/native';


export default ({route}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const [textSend, setTextSend] = useState('');
  const [totalPage, setTotalPage] = React.useState(2);
  const {state: userState} = useContext(UserContext);
  const [load, setLoad] = useState(true);
  const scrollRef = useRef(null);
  const nav = useNavigation();

  useEffect(async () => {
    let userPhoto = await Api.USER_PHOTO(
      userState.session,
      route.params.item.id_user,
    );
    // console.log(userPhoto);
    if (userPhoto.error) {
      Alert.alert('Error', ErroLog(userPhoto.message));
      return;
    }
    setPhoto(userPhoto.photo);

    loadMessage();

    // scrollRef.current.scrollTo({x:0, y:0, animated:true});

    // navigation.addListener('focus', () => {
    //   setLoad(!load)
    // })
  }, [route.params.item]);

  // useEffect(async () => {
  //   console.log('total page ak', totalPage, page, load)
  // },[])

  ws.onmessage = function (ev) {
    console.log(JSON.stringify(ev));
    if (ev.data.objectType === 'message') {
      getMessage(ev.data);
    }
  };

  const getMessage = ev => {
    if (ev.user == route.params.item.id_user) {
      setData([ev.message, ...data]);
      ws.send(JSON.stringify({type: 3, send_id: route.params.item.id_user}));
    }
  };

  const loadMessage = async () => {
    if (loading) return;

    console.log('total page', totalPage, page, load, route.params.item);

    if (totalPage + 1 == page) return;

    setLoading(true);

    const response = await Api.GET_MESSAGE_USER(
      userState.session,
      page,
      route.params.item.id_user,
      userState.userId,
    );

    // console.log('aa', userState.session, page, route.params.item.id_user, userState.userId)
    if (response.error) {
      console.log(response.message);
      setLoading(false);
      return;
    }

    setTotalPage(response.pages);

    // let unique = [];
    // unique.length = 0;
    // for (let i = response.data.length; i >= 0; --i) {
    //   if (response.data[i] && !data.some(el => el.id === response.data[i].id))
    //     unique.push(response.data[i]);
    // }
    // console.log(unique)
    // console.log('res', response.pages, page)

    response.pages >= page && setPage(page + 1);
    setData([...data, ...response.data]);
    // scrollRef.current.scrollTo({ x: 0, y: 1000 })
    ws.send(JSON.stringify({type: 3, send_id: route.params.item.id_user}));
    // console.log( scrollRef.current)

    setLoading(false);
    // scrollRef.current.scrollToEnd({ animated: true })
    // scrollRef.current.scrollToEnd({ animated: true });
  };

  //
  //post new message
  //
  const handleClickToBack = () => {
    if (page != 1 || totalPage != 2 || data.length != 0) {
      setLoading(true);
      setPage(1);
      setTotalPage(2);
      setData([]);

      return [
        setPage(1),
        setTotalPage(2),
        setData([]),
        setLoading(false),
        nav.navigate('Message'),
      ];
    }
    nav.navigate('Message');
    setLoading(false);
  };

  const HandleClickSend = async () => {
    const response = await Api.POST_MESSAGE(
      {
        id_user: userState.userId,
        message: textSend,
        type: 1,
        id_sender: route.params.item.id_user,
      },
      userState.session,
    );

    console.log(response);
    if (response.error) {
      console.log(response.message);
      return;
    }
    let createData = {
      id: response.last_id,
      id_user: userState.userId,
      message: textSend,
      notification: 1,
      type: '1',
    };

    setTextSend('');
    setData([createData, ...data]);
    scrollRef.current.scrollToEnd({animated: true});
    ws.send(
      JSON.stringify({
        type: 2,
        send_id: route.params.item.id_user,
        last_id: response.last_id,
      }),
    );
    // scrollRef.current.scrollTo({x:0, y:500});
  };

  return (
    <Container>
      {loading && <Loading text={'text'} />}
      <Header>
        <ButtonNavigate onPress={handleClickToBack}>
          <ButtonBeforeMessage>{'<'}</ButtonBeforeMessage>
        </ButtonNavigate>
        <AvatarIcon source={{uri: 'data:image/png;base64,' + photo}} />
        <NameUser>{route.params.item.description}</NameUser>
      </Header>
      <Scroll
        ref={scrollRef}
        style={{flexGrow: 1}}
        onContentSizeChange={() =>
          page == 2
            ? scrollRef.current.scrollToEnd({animated: true})
            : page > 2
            ? scrollRef.current.scrollTo({y: 1000, animated: true})
            : ''
        }
        // keyboardShouldPersistTaps={'never'}
        // contentContainerStyle={{ flexGrow: 1 }}

        onScroll={event =>
          event.nativeEvent.contentOffset.y <= 10 && !loading
            ? loadMessage()
            : ''
        }
        // contentOffset={{ y: 10000}}
        // contentInset={{ top: 100 }}

        // contentContainerStyle={{ paddingTop: 340 }}
        // onLayout = {(event)=> console.log(event.nativeEvent.layout)}
        // onContentSizeChange={(contentWidth, contentHeight)=>{
        //   console.log(contentWidth, contentHeight);
        //   }}

        // contentOffset={() => scrollRef.current.scrollToEnd({ animated: true })}
      >
        {data &&
          data
            .slice(0)
            .reverse()
            .map((item, key) => (
              <Main key={item.id}>
                {item.type == 1 ? (
                  item.id_user != userState.userId ? (
                    <MessageSend>{item.message}</MessageSend>
                  ) : (
                    <MessageUsers>{item.message}</MessageUsers>
                  )
                ) : item.type == 2 ? (
                  item.id_user != userState.userId ? (
                    <Icon
                      source={{
                        uri: `http://192.168.0.99:71/GLOBAL/Controller/CLPP/uploads/${item.message}`,
                      }}
                    />
                  ) : (
                    <IconRight
                      source={{
                        uri: `http://192.168.0.99:71/GLOBAL/Controller/CLPP/uploads/${item.message}`,
                      }}
                    />
                  )
                ) : (
                  ''
                )}
              </Main>
            ))}
      </Scroll>

      <Footer>
        {/* <FabGroup style={{ bottom: 100, left: 0 }}/> */}
        <Clip
          width="24"
          height="24"
          onPress={}
        />
        <SenderInput
          placeholder="digite aqui"
          onChangeText={t => setTextSend(t)}
          value={textSend}
        />
        <Sender width="24" height="24" onPress={} />
      </Footer>
    </Container>
  );
};

