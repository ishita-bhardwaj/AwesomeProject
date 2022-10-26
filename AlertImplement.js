import React, { Component } from 'react';
import { BackHandler ,StatusBar, View,Image, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet, TextInput,  } from 'react-native';


class AlertImplement extends Component {
    
      BackPress = () => {
        // alert("THANKS")
        Alert.alert(
            "Alert",
            "Press confirm to back",
        
            [
              {
                text: "CANCEL",
                onPress: () => null,
                // style: "button"
              },
              {
                text: "CONFIRM",
                onPress: () => this.props.navigation.goBack(),
                // style: "button"
              }
            ]
          );
      };

      componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          this.BackPress
        );
      }
    
      componentWillUnmount() {
        this.backHandler.remove();
      }
    
    render() {
        return (
            <SafeAreaView  >
               
                <View style={styles.container} >
                <TouchableOpacity
                        style={styles.click} 
                        onPress={this.BackPress}
                    >
                        <Text style={styles.text}>Click me </Text>
                    </TouchableOpacity>
               
                {/* <Text>Click back button!</Text> */}
                </View>
            </SafeAreaView>
        );
    }
}

export default AlertImplement;
const styles = StyleSheet.create({
    container:{
        marginTop:200,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    click: {
        
        alignItems: 'center',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: 'pink',
        
        //marginLeft: 10,
        width: 120,
        height: 50,

    },
    text:{
        fontWeight: 'bold',
       
    }


})

