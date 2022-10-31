import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ButtonWithSpin = () => {
  const rotateAnimation = new Animated.Value(0);
  const left = new Animated.Value(0);
  const top = new Animated.Value(0);
  const right = new Animated.Value(0);
  const down = new Animated.Value(0);

  const top2 = new Animated.Value(0);
 
  const down2 = new Animated.Value(0);


  const handleAnimation = () => {
    Animated.timing(left, {
        toValue: Dimensions.get('screen').width -150,
        duration: 5000,
      }).start(() => {
        left.setValue(0);
      })
      
      Animated.timing(right, {
        toValue: Dimensions.get('screen').width-150,
        duration: 5000,
      }).start(() => {
        right.setValue(0);
      })
      Animated.timing(top, {
        toValue: Dimensions.get('screen').height-150 ,
        duration: 5000,
      }).start(() => {
        top.setValue(0);
      })
      Animated.timing(top2, {
        toValue: Dimensions.get('screen').height-100 ,
        duration: 5000,
      }).start(() => {
       top2.setValue(0);
      })
      Animated.timing(down, {
        toValue: Dimensions.get('screen').height-150 ,
        duration: 5000,
      }).start(() => {
        down.setValue(0);
      })
      Animated.timing(down2, {
        toValue: Dimensions.get('screen').height-100 ,
        duration: 5000,
      }).start(() => {
        down2.setValue(0);
      })
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 8000,
    }).start(() => {
      rotateAnimation.setValue(0);
    })
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '7200deg'],
  });

  const animatedStyle = {
    color: 'red',
    fontSize: 60,
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    
    <View style={{flex: 1, justifyContent: 'space-between', padding:10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Animated.View style={{left: left, top:top}}>

       
        <TouchableOpacity
          onPress={() => handleAnimation()}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.Text style={animatedStyle}>TASK1</Animated.Text>
        </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ right: right,top:down}}>

       
        <TouchableOpacity
          onPress={() => handleAnimation()}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.Text style={animatedStyle}>TASK1</Animated.Text>
        </TouchableOpacity>
        </Animated.View>

      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Animated.View style={{left: left, bottom:top2}}>

       
        <TouchableOpacity
          onPress={() => handleAnimation()}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.Text style={animatedStyle}>TASK1</Animated.Text>
        </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ right: right,bottom:down2}}>

       
        <TouchableOpacity
          onPress={() => handleAnimation()}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.Text style={animatedStyle}>TASK1</Animated.Text>
        </TouchableOpacity>
        </Animated.View>

      </View>

    </View>
  
  );
};

export default ButtonWithSpin;
