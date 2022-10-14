import React, { Component } from 'react';
import { StatusBar, View, Image, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet, TextInput, ScrollView, } from 'react-native';


class Screen2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView >
                    <View style={styles.header}  >
                        <Image style={styles.back} resizeMode={'contain'} source={require('./back.png')} />
                        <Text>Product Details</Text>
                        <Image style={styles.save} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/157912.png')} />
                    </View>
                    <View style={styles.scroll}>
                        <View style={styles.desc}>
                            <Image style={styles.poster} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/Brahmastra-twitter-696x870.jpg')} />
                            <Text style={styles.title}>Brahmastra</Text>
                            <Text style={styles.title2}>Part one : SHIVA</Text>
                        </View>
                        <View style={styles.qualityline}  >
                            <TouchableOpacity style={styles.quality}>
                                <Text style={styles.quality} >Adventure</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.quality}>
                                <Text style={styles.quality} >Love</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.quality}>
                                <Text style={styles.quality} >Fantasy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.line}  >

                        </View>

                        <View style={styles.yearline1}  >
                            <Text style={styles.year1}>Year</Text>
                            <Text style={styles.year1}>Country</Text>
                            <Text style={styles.year1}>Length</Text>
                        </View>

                        <View style={styles.yearline2}  >
                            <Text style={styles.year2}>2022</Text>
                            <Text style={styles.year2}>India</Text>
                            <Text style={styles.year2}>150 mins</Text>
                        </View>
                        <View style={styles.abouttitle}  >
                            <Text style={styles.about1}>About Movie</Text>
                            <Text style={styles.about2}>This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.</Text>

                        </View>
                        <View style={styles.abouttitle}  >
                            <Text style={styles.about1}>Screenshots</Text>
                            <ScrollView horizontal={true}>
                                <Image style={styles.ss} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/Brahmastra.webp')} />
                                <Image style={styles.ss} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/8405832.jpg')} />

                                <Image style={styles.ss} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/brahmastra_165527163960.jpg')} />
                                <Image style={styles.ss} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/WhatsApp_Image_2022_06_15_at_2_36_22_PM__1_.jpeg.webp')} />


                            </ScrollView>

                        </View>
                        <View style={styles.buyview}  >
                            <TouchableOpacity style={styles.buyy}

                            >
                                <Text style={styles.buy} >BUY TICKET</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}
export default Screen2;
const styles = StyleSheet.create({
    header: {
        // top: 50,
        //flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginHorizontal: 20
        // alignItems: 'center',
        // position: 'absolute',

    },
    back: {
        width: 20,
        height: 20,
    },
    save: {
        // flex: 1,
        flexDirection: 'row',
        marginRight: 0,
        width: 20,
        height: 20,
    },
    scroll: {
        margin: 10,
        //backgroundColor: 'rgb(248,249,252)',
    },
    desc: {
        // top: 90,
        //flex: 2,
        paddingTop: 5,
        marginTop: 5,
        backgroundColor: 'rgb(248,249,252)',
        justifyContent: 'center',
        alignItems: 'center',
        //marginLeft: 150,
        // position: 'absolute',

    },
    poster: {
        //top:50,
        //textAlign:'center',
        width: 270,
        height: 370,
        //marginLeft: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingBottom: 10,
        resizeMode: 'stretch'
    },
    title: {
        //fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom:10,
        fontSize: 20,
        color: 'grey'
    },
    title2: {
        //fontWeight: 'bold',
        // paddingTop:10,
        fontSize: 10,
        color: 'darkgrey'
    },
    quality: {
        //flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: 'rgb(59,107,246)',
        borderRadius: 40,
        padding: 6,
        color: 'white'


    },
    qualityline: {
        paddingTop: 20,
        paddingHorizontal: 35,
        paddingVertical: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(248,249,252)',
        alignItems: 'center',
        paddingBottom: 100,


    },
    year1: {
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
        fontSize: 10,
        color: 'darkgrey'

    },
    year2: {
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
        fontSize: 10,
        color: 'grey'

    },
    yearline1: {
        paddingHorizontal: 35,
        paddingVertical: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(248,249,252)',
        alignItems: 'center',

    },
    yearline2: {
        paddingHorizontal: 35,
        paddingVertical: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(248,249,252)',
        alignItems: 'center',

    },
    abouttitle: {
        paddingTop: 20,
        backgroundColor: 'rgb(248,249,252)',
        paddingBottom: 20
    },
    about1: {
        color: 'grey',

        fontSize: 20,
    },
    about2: {
        paddingTop: 20,
        fontSize: 15,
        color: 'darkgrey'

    },
    ss: {
        margin: 10,
        width: 200,
        height: 115,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        paddingBottom: 5,
        resizeMode: 'contain',
        justifyContent: 'space-around',

    },
    buyview: {
        //paddingTop:20,
        backgroundColor: 'rgb(248,249,252)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyy: {
        width: 350,
        height: 40,
        textAlign: 'center',
        backgroundColor: 'rgb(59,107,246)',
        padding: 10,
        // color:'white',
        borderRadius: 5



    },
    buy: {
        // width: 350,
        // height: 40,
        textAlign: 'center',
        // backgroundColor: 'blue',
        // padding:10,
        color: 'white',

    },
    line: {
        borderBottomColor: 'rgb(242,243,248)',
        borderBottomWidth: 1,
        marginBottom: 20

    }


})