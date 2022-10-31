import React,{Component, useState} from 'react';
import { View, Text , StyleSheet , Animated, TouchableOpacity} from 'react-native';

const ButtonWithSpin = () => {
    const rotateAnimation = new Animated.Value(0);

    const handleAnimation = () => {
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 8000,
      }).start(()=>{
        rotateAnimation.setValue(0);
      });
    };

    const interpolateRotating = rotateAnimation.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '7200deg'],
    });

    const animatedStyle = {
        color:'red',
        fontSize:60,
      transform: [
        {
          rotate: interpolateRotating,

        },
      ],
    };

return (
    <TouchableOpacity
      onPress={ () => handleAnimation()}
      style={{ flex:1, justifyContent:'center', alignItems:'center' }}
    >
      <Animated.Text style={animatedStyle}>TASK1</Animated.Text>
    </TouchableOpacity>
  );
};

export default ButtonWithSpin;

