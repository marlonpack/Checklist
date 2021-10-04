import React, { useRef, useState, useContext } from 'react';
import { RNCamera } from 'react-native-camera';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ResponseContext } from '../context/ResponseContext';
import Api from '../Api';
import {ws} from './WebSocket';

export default ({ navigation,  object }) => {
  const photo = useRef(null);
  const [image, setImage] = useState('');
  const [result, setResult] = useState(0);
  const [teste, setTeste] = useState(0);
  const { dispatch: responseDispatch} = useContext(ResponseContext);
  const nav = useNavigation();

  const takePicture = async () => {
    if (photo) {
      const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true, };
      const data = await photo.current.takePictureAsync(options);

      setResult(data.base64);
      // setResult(data.uri);
      setImage(data.uri);
      setTeste(1);
    }
  };

  const handleClickCancel = ()=>{
    setTeste(0);
  }

  const handleClickContinue = async()=>{
    // console.log(object, result)

    const response = await Api.POST_MESSAGE(
        {
            id_user: object.id_user,
            message: result,
            type: 2,
            id_sender: object.id_send,
          },
          object.session,
        );

        console.log(response)
        if (response.error) {
          console.log(response.message);
          return;
        }

      await ws.send(
          JSON.stringify({
            type: 2,
            send_id: object.id_send,
            last_id: response.last_id,
          }),
        );

    nav.goBack();
    // nav.navigate('Talks', item={id_user: object.id_send, description: object.id_send, notification: '0'})
  }

  return (
    <View style={{ flex: 1 }}>
      {teste == 0 ?
        (<View style={styles.container}>
          <RNCamera
            ref={photo}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              // console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={takePicture} style={styles.capture}>
              <View style={styles.TakePictureButtonLabel} />
            </TouchableOpacity>

          </View>
        </View>) :
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={styles.preview} />
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#000100'}}>
            <TouchableOpacity onPress={handleClickContinue} style={styles.capture}>
              <Text>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClickCancel} style={styles.capture}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fc6663',
    borderRadius: 100,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  TakePictureButtonLabel: {
    width: 52,
    height: 62,
    borderRadius: 26,
    backgroundColor: '#fc6663',
  }
});