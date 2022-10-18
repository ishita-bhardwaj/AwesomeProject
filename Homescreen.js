import React, { Component } from 'react';
import { AppRegistry, StatusBar, View, Image, Text, SafeAreaView, Button, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import App from './App';
import screen from './screen';
import screen2 from './screen2';
import otpScreen from './otpScreen';

class Homescreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>HOME SCREEN </Text>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.assignOne}
                        onPress={() => this.props.navigation.navigate('Assignment1')} >
                        <Text style={styles.submittext}>Assignment-1</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.assignOne}
                        onPress={() => this.props.navigation.navigate('Assignment2')}>
                        <Text style={styles.submittext}>Assignment-2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.assignOne}
                        onPress={() => this.props.navigation.navigate('Assignment3')} >
                        <Text style={styles.submittext}>Assignment-3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.assignOne}
                        onPress={() => this.props.navigation.navigate('Assignment4')} >
                        <Text style={styles.submittext}>Assignment-4</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>


        );
    }
}

export default Homescreen;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor:'white'
    },
    header: {

        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    headertext: {
        color: 'black',
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 30

    },

    assignOne: {
        alignItems: 'center',
        backgroundColor: 'pink',
        //borderRadius: 20,
        justifyContent: 'center',
        width: 180,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',

    },
    submittext: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'arial',
    }


})




