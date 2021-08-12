import React from 'react';
import SignatureCapture from '../../components/SignatureCapture';
import { View } from 'react-native';
import PhotoCapture from '../../components/PhotoCapture';
import Api from '../../Api';


export default ({ route, navigation }) => {


 
  return (
    <View style={{ flex: 1 }}>

      {route.params.type == 1 ?
        <SignatureCapture navigation={navigation} id={route.params.id} question={route.params.question}/>
        :
        <PhotoCapture navigation={navigation} id={route.params.id} />
      }
    </View>
  )
}