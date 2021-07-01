import React from 'react';
import SignatureCapture from '../../components/SignatureCapture';
import { View } from 'react-native';
import PhotoCapture from '../../components/PhotoCapture';


export default ({ route, navigation }) => {
  // console.log(navigation.goBack())
  return (
    <View style={{ flex: 1 }}>
      {route.params.type == 1 ?
        <SignatureCapture navigation={navigation}/>
        :
        <PhotoCapture />
      }
    </View>
  )
}