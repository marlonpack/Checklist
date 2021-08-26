import React, { useRef, useContext } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'native-base';
import { ResponseContext } from '../context/ResponseContext';
import { UserContext } from '../context/UserContext';
import Api from '../Api';
import {Alert} from 'react-native'; 
import ErroLog from './ErroLog';


export default ({ navigation,  id, question }) => {
  const sign = useRef(null);
  const nav = useNavigation();
  const { dispatch: responseDispatch} = useContext(ResponseContext);
  const { state: userState } = useContext(UserContext);
  const [response, setResponse] = React.useState('');

  React.useEffect(async () => {
    setResponse([]);
      let res = await Api.GET_OPTION(id, userState.session);
      if(res.error){
        Alert.alert('Error',ErroLog(json.message));
        return;
      }
      setResponse(res.data);
  }, [id]);


  const SaveSign = () => {
    sign.current.saveImage()
  };

  const ResetSign = () => {
    sign.current.resetImage()
  };


  const OnSaveEvent = (result) => {
    // console.log(result.encoded)



    responseDispatch({
      type: 'setResponse',
      payload: { id: response[0].id, questionName:question, photo: result.encoded }
     })

    navigation.goBack();
  };

  const OnDragEvent = () => {
    // console.log('dragged')
  };



  return (
    <View style={{ flex: 1, flexDirection: "column",  }}>

      <Text style={{ alignItems: "center", justifyContent: "center" }}>Assinatura</Text>

      <SignatureCapture
        style={[{ flex: 1}, styles.Signature]}
        ref={sign}
        onSaveEvent={OnSaveEvent}
        onDragEvent={OnDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={true}
        showBorder={true}
        minStrokeWidth={5}
        maxStrokeWidth={5}
        // backgroundColor="#ff00ff"
        // viewMode={"landscape"}
        viewMode={"portrait"}
      />

      <View style={{  flexDirection: "row" }}>

        <TouchableHighlight style={styles.buttonStyle} onPress={SaveSign}>
          <Text>Save</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonStyle} onPress={ResetSign}>
          <Text>Reset</Text>
        </TouchableHighlight>

      </View>

    </View>
  );
}

// const styles = StyleSheet.create({
//   Signature: {
//     flex: 1,
//     borderColor: '#000033',
//     borderWidth: 1,
//   },
//   buttonStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 50,
//     backgroundColor: "#eeeeee",
//     margin: 10,
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
    height: '80%',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});