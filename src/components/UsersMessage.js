import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Notification from '../assets/notification.svg';
import NotificationBall from '../assets/notificationBall.svg';
import Api from '../Api';
import { UserContext } from '../context/UserContext';
import { Keyboard, Alert, View } from 'react-native';
import ErroLog from './ErroLog';




const Area = styled.TouchableOpacity`
  background-color: #FFF;
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
  border: solid 1px #3B6895;
  justify-content:space-between;
  margin: 1px 0;
  align-items: center;
`;

const LeftView = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

`;

const UserName = styled.Text`
  font-size: 18px;
  margin-left: 2px;
`;

const AvatarIcon = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 10px;
`;

export default ({ data, onPress }) => {
  const { state: userState } = useContext(UserContext);
  const [photo, setPhoto] = useState('');

  useEffect(async () => {
    if (data.id_user) {
      let userPhoto = await Api.USER_PHOTO(userState.session, data.id_user)
      if (userPhoto.error) {
        Alert.alert('Error', ErroLog(userPhoto.message));
        return;
      }
      setPhoto(userPhoto.photo);
    }
  }, [data]);


  return (
    <Area onPress={onPress}>
      <LeftView >
        <AvatarIcon source={{ uri: 'data:image/png;base64,' + photo }} />
        <UserName >{data.description}</UserName>
      </LeftView>
      {data.notification==1 ?
      <NotificationBall width="24" height="24" /> :
      <Notification width="24" height="24" />
      }
    </Area>
  )

}