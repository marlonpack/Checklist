import React from 'react';
import SignatureCapture from '../../components/SignatureCapture';
import { View } from 'react-native';
import PhotoCapture from '../../components/PhotoCapture';


export default ({ route, navigation }) => {
  console.log(route.params.type)
  return (
    <View style={{ flex: 1 }}>
      {route.params.type == 1 ?
        <SignatureCapture />
        :
        <PhotoCapture />
      }
    </View>
  )
}