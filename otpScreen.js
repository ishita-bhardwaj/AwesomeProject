import React, { Component } from 'react';
import { StatusBar, View, Image, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet, TextInput, ScrollView, Modal, } from 'react-native';


class otpScreen extends Component {
    constructor() {
        super();
        this.state = {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
        };
    }
        render() {
            return (
                <View style={styles.safeview}>
                    <SafeAreaView>
                        <StatusBar barStyle='light-content' />
                        {/* <ScrollView > */}
                        <View style={styles.header}  >
                            <Text style={styles.headertext}>Log into Saavn</Text>
                        </View>
                        <View style={styles.line1}  >

                        </View>
                        <View style={styles.line2}  >

                        </View>
                    </SafeAreaView>
                    <View style={styles.mainscreen}  >

                        <Text style={styles.enterotp}>
                            Enter your code
                        </Text>


                        <View style={styles.otp}>
                        {/* <TextInput style={styles.otpstyle} > </TextInput>
                        <TextInput style={styles.otpstyle} > </TextInput>
                        <TextInput style={styles.otpstyle} > </TextInput>
                        <TextInput style={styles.otpstyle} > </TextInput> */}
                            <TextInput ref={'otp1ref'}
                                onChangeText={otp1 => {
                                    this.setState({ otp1: otp1 });
                                    if (otp1 != '') {
                                        this.refs.otp2ref.focus();
                                    }
                                }}
                                value={this.state.otp1}
                                maxLength={1} style={styles.otpstyle} /> 
                            <TextInput ref={'otp2ref'}
                                onChangeText={otp2 => {
                                    this.setState({ otp2: otp2 });
                                    if (otp2 != '') {
                                        this.refs.otp3ref.focus();
                                    }
                                    else {
                                        this.refs.otp1ref.focus();
                                    }
                                }}
                                value={this.state.otp2}
                                maxLength={1}  style={styles.otpstyle} /> 
                            <TextInput ref={'otp3ref'}
                                onChangeText={otp3 => {
                                    this.setState({ otp3: otp3 });
                                    if (otp3 != '') {
                                        this.refs.otp4ref.focus();
                                    }
                                    else{
                                        this.refs.otp2ref.focus();
                                    }
                                }}
                                value={this.state.otp3}
                                maxLength={1}  style={styles.otpstyle} /> 
                            <TextInput ref={'otp4ref'}
                                onChangeText={otp4 => {
                                    this.setState({ otp4: otp4 });
                                    if(otp4 != ''){
                                    
                                    }
                                    else{
                                        this.refs.otp3ref.focus();
                                    }
                                    
                                }}
                                
                                value={this.state.otp4}
                                maxLength={1}  style={styles.otpstyle} /> 
                
                        </View>

                        <View style={styles.continue}>
                            <TouchableOpacity
                                style={styles.continuestyle} >
                                <Text style={styles.continuetxt}>Continue</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.bottom}  >

                        {/* <Text  style={styles.sbstyle} >hello</Text> */}
                        <View style={styles.screenbottom} >
                            <TouchableOpacity
                                style={styles.sbstyle}
                                 onPress={console.log("1")}>

                                <Text style={styles.text1}>1</Text>
                                {/* <Text style={styles.text2}>Continue</Text> */}
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("2")} >

                                <Text style={styles.text1}>2</Text>
                                <Text style={styles.text2}>ABC</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("3")}>

                                <Text style={styles.text1}>3</Text>
                                <Text style={styles.text2}>DEF</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.screenbottom} >
                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("4")} >

                                <Text style={styles.text1}>4</Text>
                                <Text style={styles.text2}>GHI</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("5")}>

                                <Text style={styles.text1}>5</Text>
                                <Text style={styles.text2}>JKL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("6")}>

                                <Text style={styles.text1}>6</Text>
                                <Text style={styles.text2}>MNO</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.screenbottom} >
                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("7")} >

                                <Text style={styles.text1}>7</Text>
                                <Text style={styles.text2}>PQRS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("8")}>

                                <Text style={styles.text1}>8</Text>
                                <Text style={styles.text2}>TUV</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("9")}>

                                <Text style={styles.text1}>9</Text>
                                <Text style={styles.text2}>XYZ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.screenbottom2} >
                            <TouchableOpacity
                                style={styles.sbstyle}
                                onPress={console.log("0")}>

                                <Text style={styles.text1}>0</Text>
                                {/* <Text style={styles.text2}>PQRS</Text> */}
                            </TouchableOpacity>
                            <Image resizeMode={'contain'} style={styles.Logo} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/clear-symbol--v1.png')} />
                        </View>



                    </View>



                    {/* </ScrollView> */}

                </View>
            );
        }
    }
export default otpScreen;

    const styles = StyleSheet.create({
        safeview: {
            flex: 1,
            backgroundColor: 'rgb(109,187,120)',
            color: 'white'

        },
        header: {
            // flexDirection: 'row',
            backgroundColor: 'rgb(109,187,120)',
            justifyContent: 'center',
            padding: 10

        },
        headertext: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center'

        },
        line1: {
            borderBottomColor: 'rgb(99,171,116)',
            borderBottomWidth: 2,
            //marginBottom: 20

        },
        line2: {
            borderBottomColor: 'rgb(181,212,188)',
            borderBottomWidth: 2,
            //marginBottom: 20

        },
        mainscreen: {
            // flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
            //  padding: 10

        },
        enterotp: {
            color: 'rgb(133,133,133)',
            fontSize: 20,
            padding: 60,
            textAlign: 'center'
        },
        otp: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingLeft: 70,
            paddingRight: 70

        },
        otpstyle: {
            height: 42,
            width: 42,
            borderColor: 'rgb(226,226,226)',
            borderWidth: 2,
            borderRadius: 5,
            textAlign:'center'
        },
        continue: {
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 80,
            paddingBottom: 200

        },
        continuestyle: {
            height: 45,
            width: 260,
            borderColor: 'rgb(109,187,120)',
            borderWidth: 2,

            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'

        },
        continuetxt: {
            color: 'rgb(109,187,120)',
            fontSize: 17
        },
        bottom: {
            flex: 1,
            backgroundColor: 'rgb(212,214,222)',
            padding: 5

        },
        screenbottom: {
            //backgroundColor: 'rgb(212,214,222)',
            justifyContent: 'space-around',
            flexDirection: 'row',
            padding: 5
        },
        sbstyle: {
            backgroundColor: 'white',
            height: 45,
            width: 115,
            //borderWidth: 2,
            borderRadius: 5,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'

        },
        text1: {
            fontSize: 25,


        },
        text2: {
            fontSize: 10,
            justifyContent: 'space-between'

        },
        screenbottom2: {
            //backgroundColor: 'rgb(212,214,222)',
            justifyContent: 'space-around',
            flexDirection: 'row',
            padding: 5,
            paddingLeft: 105
        },
        Logo: {
            marginTop:5,
            marginRight:10,
            paddingRight: 40,
            width: 30,
            height: 30,
        },



    })