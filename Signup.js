
import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TextInput, ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState, Component} from 'react';

class OtpScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.safeview}>
          <ImageBackground
            resizeMode={'stretch'}
            source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/blue_background_picture_2_169441.jpg')}>
            <View style={styles.main}>
                <View style={styles.Head}>
              <Text style={styles.Headtext}>Let's Get Started!</Text>
              <Text style={styles.Headtext2}>Create an account to Q Allure to get all features</Text>
              </View>

              <View style={styles.Head}>
                <View style={styles.box}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3177440.png')} /> 
              <Text style={styles.text} >Jhone Williams</Text>
              </View>

              <View style={styles.box1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/526913.png')} /> 
                <TextInput style={styles.input} placeholder= 'Email'></TextInput>
              </View>

              <View style={styles.box1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/2948005.png')} /> 
                <TextInput style={styles.input} placeholder= 'Phone'></TextInput>
              </View>
              <View style={styles.box1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/5672647.png')} /> 
                <TextInput style={styles.input} placeholder= 'Password'></TextInput>
              </View>
              <View style={styles.box1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/5672647.png')} /> 
                <TextInput style={styles.input} placeholder= 'Confirm Password'></TextInput>
              </View>
              <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              CREATE
            </Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
          <Text style={styles.bottomText}>Already have an account?</Text>
          <Text style={styles.bottomText2}> Login here</Text>
            </View>

              </View>
            </View>
          </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default OtpScreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
main:{
    height:"92%",
    width:'92%',
    //justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    backgroundColor:'white',
    margin:20,
    padding:10

},
Head:{ 
    //justifyContent:'space-around',
    alignItems:'center',
    paddingTop:22
},
Headtext:{
    fontSize:25,
    fontWeight:'bold'
},
Headtext2:{
    fontSize:15,
    color:'grey',
    paddingTop:8
},
box:{
    width:300,
    height:60,
    borderColor:'blue',
    borderWidth:2,
    borderRadius:50,
    overflow:'hidden',
    flexDirection:'row',
    //justifyContent:'center'
},
icon:{
    width:30,
    height:30,
    margin:10
},
text:{
    fontSize:15,
    color:'blue',
    margin:10,
    paddingTop:5
},
box1:{
    width:300,
    height:60,
    borderColor:'lightgrey',
    borderWidth:2,
    borderRadius:50,
    overflow:'hidden',
    flexDirection:'row',
    marginTop:20
},
button:{
    width:200,
    height:55,
    backgroundColor:'blue',
    borderRadius:50,
    marginTop:30,
    justifyContent:'center',
    alignItems:'center'

},
buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
},
bottom:{
    flexDirection:'row',
    alignItems:'center',
    padding:30
},
bottomText:{
color:'grey'
},
bottomText2:{
color:'blue',
fontWeight:'bold'
}


});
