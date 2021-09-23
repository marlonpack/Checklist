import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';
import {StyleSheet} from 'react-native';

import Sender from '../assets/sender.svg';
import Home from '../assets/home.svg';

export default props => {
  const [open, setOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    var toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue: toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const homeStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50],
        }),
      },
    ],
  };

  const heartStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback onPress={() => alert('Home button')}>
        <Animated.View style={[styles.button, styles.subMenu, heartStyle]}>
          <Sender width="30px" height="30px" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => alert('Home heart')}>
        <Animated.View style={[styles.button, styles.subMenu, homeStyle]}>
          <Sender width="30px" height="30px" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Sender width="30px" height="30px" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#A134D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#A134D6',
  },
  subMenu: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});
