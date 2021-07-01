import React, { useRef } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'native-base';


export default ({ navigation }) => {
  const sign = useRef(null);
  const nav = useNavigation();

 
  const SaveSign = () => {
    sign.current.saveImage()
  };

  const ResetSign = () => {
    sign.current.resetImage()
  };


  const OnSaveEvent = (result) => {
    // console.log(result)
    navigation.goBack();
  };

  const OnDragEvent = () => {
    // console.log('dragged')
  };



  return (
    <View style={{ flex: 1, flexDirection: "column" }}>

      <Text style={{ alignItems: "center", justifyContent: "center" }}>Assinatura</Text>

      <SignatureCapture
        style={[{ flex: 1 }, styles.Signature]}
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
        viewMode={"landscape"}
      />

      <View style={{ flex: 1, flexDirection: "row" }}>

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
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});