import React, { Component } from 'react';
import { StatusBar, View,Image, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet, TextInput,  } from 'react-native';


class Screen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}  >
               
                <View style={styles.container} >
                <Image resizeMode={'contain'} style={styles.ImageLogo} source ={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/amazon-prime-video-pdvg.png')} />
                    <Text style={styles.title}>
                        Sign in with your Amazon account
                    </Text>
                    
                        <TextInput style={styles.email} placeholder= 'Email or Mobile number'></TextInput>
                        <TextInput style={styles.password} placeholder= 'Password'></TextInput>
                    
                    <TouchableOpacity
                        style={styles.signin}

                    >
                        <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={styles.forgot}>
                        Forget your password?
                    </Text>
                    <Text style={styles.new}>
                        ---------- New to Amazon ? ----------
                    </Text>
                    <TouchableOpacity
                        style={styles.create}

                    >
                        <Text style={styles.text}>Create a new account</Text>
                    </TouchableOpacity>
                    <Text style={styles.last}>
                        By signing in, you agree to the <Text style={styles.orange}>Prime Vedio Terms of use</Text> and license agreements which can be found on the Amazon website
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Screen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    title: {
        top: 200,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: "white"

    },
    email: {
        fontWeight: 'bold',
        fontFamily: 'arial',
        alignItems: 'center',
        backgroundColor: 'white',
        //borderRadius: 20,
        justifyContent: 'center',
        position: 'absolute',
        top: 225,
        marginLeft: 10,
        width: 370,
        height: 40,
        paddingLeft: 5
    },
    password: {
        fontWeight: 'bold',
        fontFamily: 'arial',
        alignItems: 'center',
        backgroundColor: 'white',
        //borderRadius: 20,
        justifyContent: 'center',
        position: 'absolute',
        top: 270,
        marginLeft: 10,
        width: 370,
        height: 40,
        paddingLeft: 5
    },
    signin: {
        fontWeight: 'bold',
        fontFamily: 'bold',
        alignItems: 'center',
        backgroundColor: 'grey',
        //borderRadius: 20,
        justifyContent: 'center',
        position: 'absolute',
        top: 350,
        marginLeft: 10,
        width: 370,
        height: 40,

    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    orange: {
        fontWeight: 'bold',
        color: 'orange'
    },
    forgot: {
        top:380,
        textAlign: 'center',
        color: 'orange'
    },
    new: {
        top: 440,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: "grey"

    },
    create: {
        fontWeight: 'bold',
        fontFamily: 'bold',
        alignItems: 'center',
        backgroundColor: 'orange',
        // borderRadius: 20,
        justifyContent: 'center',
        position: 'absolute',
        top: 500,
        marginLeft: 10,
        width: 370,
        height: 40,
       
    },
    last: {
        top: 600,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: "grey"
    },
    ImageLogo:{
        top:50,
        textAlign:'center',
        width:200,
        height:200,
        marginLeft: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    }

})