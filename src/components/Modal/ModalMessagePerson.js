import React, { useState, useContext, useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import styled from 'styled-components/native';
import { TextArea } from "native-base";
import { ResponseContext } from '../../context/ResponseContext';
import { UserContext } from '../../context/UserContext';
import Api from '../../Api';
import { useNavigation } from '@react-navigation/native';


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



export default ({ Modal, allUsers, userId}) => {
  const { state: userState } = useContext(UserContext);
  const [photo, setPhoto] = useState('');
  const nav = useNavigation();


 

  // const HandleSearchPhoto = async(id) =>{
  //   let userPhoto = await Api.USER_PHOTO(userState.session, id)
  //   // console.log(userPhoto, id)

  //       if (userPhoto.error) {
  //         console.log('Error',(userPhoto.message));
  //         return;
  //       }
  //       await setPhoto(userPhoto.photo)
  // }


  // const HandleClickSave = async () => {
  //   Modal.current?.close();
  // };

  const handleClickTalks = item => {
    console.log(item)

    nav.navigate('Talks', { item: {"description": item.user, "id_user": item.id, "notification": "0"}  })
 
  }

  return (
    <Modalize ref={Modal} snapPoint={400} >
      {allUsers&& allUsers.map(user => (
        userId != user.id &&
        <Area key={user.id} onPress={() => handleClickTalks(user)}>
          {/* {HandleSearchPhoto(user.id)} */}
          <LeftView >
            {/* {HandleSearchPhoto(user.id)} */}
          {/* <AvatarIcon source={{uri: `data:image/png;base64,${photo}`}} /> */}
            <UserName >{user.user}</UserName>
          </LeftView>
        </Area>
      ))}
    </Modalize>
  )

}