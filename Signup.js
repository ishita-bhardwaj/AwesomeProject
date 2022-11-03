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
  AsyncStorage,
} from 'react-native';
import React, {useRef, useState, Component} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './Signupstyle';
import Inptxt from './Inptxt';
import Getdata from './Getdata';
import {useCallback} from 'react';

const data = [
  {
    title: 'name',
    image: require('./3177440.png'),
    placeholder: 'Name',
  },
  {
    title: 'email',
    image: require('./526913.png'),
    placeholder: 'Email',
  },
  {
    title: 'phone',
    image: require('./2948005.png'),
    placeholder: 'Phone',
  },
  {
    title: 'password',
    image: require('./5672647.png'),
    placeholder: 'Password',
  },
  {
    title: 'confirmpassword',
    image: require('./5672647.png'),
    placeholder: 'Confirm Password',
  },
];

const Signup = props => {
  //const navigation=useNavigation();
  const [titleText, setTitleText] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
  });

  const changetext = (text, title) => {
    setTitleText({...titleText, [title]: text});
  };

  const onPress = async () => {
    await AsyncStorage.setItem('det', JSON.stringify(titleText));
    try {
      props.navigation.navigate('Getdata');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <ImageBackground
        resizeMode={'stretch'}
        source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/blue_background_picture_2_169441.jpg')}>
        <View style={styles.main}>
          <View style={styles.Head}>
            <Text style={styles.Headtext}>Let's Get Started!</Text>
            <Text style={styles.Headtext2}>
              Create an account to Q Allure to get all features
            </Text>
          </View>

          {data.map((item, index) => (
            <Inptxt
              type={index}
              onChangeInput={changetext}
              title={item.title}
              image={item.image}
              placeholder={item.placeholder}></Inptxt>
          ))}
          <TouchableOpacity style={styles.button} onPress={
           
            onPress
            
          
          
          
          }>
            <Text style={styles.buttonText}>CREATE</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <Text style={styles.bottomText2}> Login here</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;
