import React, {Component, useState} from 'react';
import {Text,AsyncStorage, SafeAreaView, StyleSheet, View, TouchableOpacity, useNavigation, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import styles from './Signupstyle';
import { useEffect } from 'react';



// const Getdata = (props) => {
//     const [detinfo, setdetinfo] = useState({})
//     useEffect{()=>
//     {
//         Getdata()
//     }}
//     return (
//       <View>

//         <View style={styless.button}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => props.navigation.navigate('Signup')}>
//           <Text style={styles.buttonText}>Click</Text>
//         </TouchableOpacity>
//       </View>
//       </View>
//     );
//   }

// export default Getdata;
// const styless = StyleSheet.create({
//     button: {
//         alignItems:'center',
        

//     },
// })

const Getdata = (props) => {
    const [detInfo, setdetInfo] = useState({});
    //const navigation = useNavigation();
    const clearAsyncStorage = async() => {
        AsyncStorage.removeItem('det');
    }
    logoutFunction = () => {
      Alert.alert('Alert Title', 'Do you want to leave this page', [
        {
          text: 'NO',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
              clearAsyncStorage()
            props.navigation.replace('Signup');
            // props.navigation.reset({
            //     index: 0,
            //     routes: [{name: 'Signup'}],
            //   });
          },
        },
      ]);
    };
    useEffect(() => {
      getData();
    }, []);
    const getData = () => {
      AsyncStorage.getItem('det').then(data => {
        setdetInfo(JSON.parse(data));
      });
    };
    console.log('detInfo ======>', detInfo);
    return (
      <SafeAreaView style={{flex: 1,margin:100}}>
          <Text style={styles.MainText}>Data :</Text>
        <Text style={styles.MainText}>Name:{detInfo.name}</Text>
        <Text style={styles.MainText}>Email:{detInfo.email}</Text>
        <Text style={styles.MainText}>Phone:{detInfo.phone}</Text>
        <Text style={styles.MainText}>Password:{detInfo.password}</Text>
        <TouchableOpacity style={styles.button} onPress={logoutFunction}>
          <Text style={{color: 'white'}}>Click</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  export default Getdata;