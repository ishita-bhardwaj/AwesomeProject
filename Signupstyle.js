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
    marginTop:4
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

export default styles;