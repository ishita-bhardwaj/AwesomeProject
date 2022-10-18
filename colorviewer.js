import React, { Component } from 'react';
import { AppRegistry, StatusBar, View, Image, Text, SafeAreaView, Button, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';


    class colorviewer extends Component {
        constructor() {
            super();
            state = {
                color: randomHex()
            }
            onClick = () => {
                this.setState({ color: randomHex() })
            }
            function randomHex() {
                //console.log("Func Called")
                let letters = "0123456789ABCDEF";
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            };
        };
       

        render() {
            return (

                <SafeAreaView>
                    <View style={styles.header}>
                        <Text style={styles.headertext}>Color Viewer</Text>
                    </View>
                    <View style={styles.colorbox}  >
                        <View style={styles.colorboxstyle}  >
                        </View>
                    </View>
                    <View style={styles.colorinput}  >
                        <TextInput style={styles.inputstyle} placeholder='Enter color' >
                           
                        </TextInput>
                        <TouchableOpacity
                            style={styles.submitbutton} onPress={this.onClick} >
                            <Text style={styles.submittext}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

            );
        }
    }
export default colorviewer;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    },
    headertext: {
        color: 'black',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 20

    },
    colorbox: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20

    },
    colorboxstyle: {
        height: 80,
        width: 180,
        backgroundColor: 'onClick()',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        
    },
    colorinput: {
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputstyle: {
        height: 50,
        width: 180,
        fontWeight: 'bold',
        fontFamily: 'arial',
        //borderColor: 'rgb(226,226,226)',
        borderWidth: 2,
        //borderRadius: 5,
        textAlign: 'center',
        color: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        marginBottom: 40
    },
    submitbutton: {
        alignItems: 'center',
        backgroundColor: 'pink',
        //borderRadius: 20,
        justifyContent: 'center',
        width: 180,
        height: 50,
        borderWidth: 2,
        borderColor: 'black'

    },
    submittext: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'arial',
    }


})