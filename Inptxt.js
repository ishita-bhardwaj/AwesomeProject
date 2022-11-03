import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState, Component} from 'react';
import styles from './Signupstyle';

const Inptxt = (props) => {
  console.log()
    return (
      <View key={props.index} style={styles.Head}>
        
        <View style={styles.box1}>
          <Image
            style={styles.icon}
            resizeMode={'contain'}
            source={props.image}
          />
          <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            onChangeText= {(text) => props.onChangeInput(text,props.title)}></TextInput>
        </View>
      </View>
    );
  };

export default Inptxt;
