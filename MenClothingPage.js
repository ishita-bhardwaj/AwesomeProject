import React, { Component } from 'react';
import { StatusBar, View, Image, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet, TextInput, ScrollView, ImageBackground, } from 'react-native';


class MenClothingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { count: false };
    }
    onadd = () => {
       this.setState({count:!this.state.count})
        // alert("Added to wishlist");

    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <View style={styles.header}  >
                        <Image style={styles.back} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/sort-left.png')} />
                        <Text>App Store</Text>

                    </View> */}

                    <View style={styles.belowheader}  >
                        <Image style={styles.backicon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/507257.png')} />
                        <Text style={styles.title}>MEN CLOTHING</Text>

                    </View>

                    <View style={styles.line}  >

                    </View>
                    <View style={styles.sortarea}  >
                        <Text style={styles.items}>195 items</Text>
                        <View style={styles.sortfilter}>
                            <View   >
                                <TouchableOpacity style={styles.sort}>
                                    <Image style={styles.sorticon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/164018.png')} />
                                    <Text style={styles.sorttext}>SORT</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.linevertical}  >

                            </View>
                            <View   >
                                <TouchableOpacity style={styles.filter}>
                                    <Image style={styles.filtericon} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/1159641.png')} />
                                    <Text>FILTER</Text>

                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={styles.line}  >

                    </View>
                    <View style={styles.categories}  >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.category}>
                                <Text>Polo Shirts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.category}>
                                <Text>Dress Shirts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.category}>
                                <Text>Shorts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.category}>
                                <Text>T-Shirts </Text>
                            </TouchableOpacity>


                        </ScrollView>

                    </View>

                    <View style={styles.products}  >
                        <View style={styles.product}  >
                            <View >
                                <ImageBackground style={styles.productimg} resizeMode={'stretch'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/DM14998_YBR_FNT.jpeg')} >
                                    <Text style={styles.new}>NEW</Text>

                                    <TouchableOpacity onPress={this.onadd}>
                                        
                                        {this.state.count == 0 ?
                                            <Image style={styles.wishlistlogo} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3286801.png')} />:
                                        
                                            <Image style={styles.wishlistlogo} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3287041.png')} />}

                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <Text style={styles.producttext1}>Tommy Hilfiger</Text>
                            <Text style={styles.producttext2}>Men's Morrison Stripe Polo, Limelight Combo </Text>
                            <Text style={styles.producttext3}>USD 23</Text>
                        </View>

                        <View style={styles.product}  >
                            <View>
                                <ImageBackground style={styles.productimg} resizeMode={'stretch'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/DM14998_YBR_FNT.jpeg')} >
                                    <Text style={styles.new}>NEW</Text>
                                    <TouchableOpacity onPress={this.onadd} >
                                        <Image style={styles.wishlistlogo} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3286801.png')} />

                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <Text style={styles.producttext1}>Tommy Hilfiger</Text>
                            <Text style={styles.producttext2}>Men's LongSleeve Hooded Sweater, White/Red/Blue </Text>
                            <Text style={styles.producttext3}>USD 23</Text>

                        </View>
                    </View>

                    <View style={styles.products}  >
                        <View style={styles.product}  >
                            <View>
                                <ImageBackground style={styles.productimg} resizeMode={'stretch'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/DM14998_YBR_FNT.jpeg')} >
                                    <Text style={styles.new}>NEW</Text>
                                    <TouchableOpacity onPress={this.onadd} >
                                        <Image style={styles.wishlistlogo} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3286801.png')} />

                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <Text style={styles.producttext1}>Tommy Hilfiger</Text>
                            <Text style={styles.producttext2}>Men's Morrison Stripe Polo, Limelight Combo </Text>
                            <Text style={styles.producttext3}>USD 23</Text>
                        </View>

                        <View style={styles.product}  >
                            <View>
                                <ImageBackground style={styles.productimg} resizeMode={'stretch'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/DM14998_YBR_FNT.jpeg')} >
                                    <Text style={styles.new}>NEW</Text>
                                    <TouchableOpacity onPress={this.onadd}>
                                        <Image style={styles.wishlistlogo} resizeMode={'contain'} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3286801.png')} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <Text style={styles.producttext1}>Tommy Hilfiger</Text>
                            <Text style={styles.producttext2}>Men's LongSleeve Hooded Sweater, White/Red/Blue </Text>
                            <Text style={styles.producttext3}>USD 23</Text>

                        </View>
                    </View>


                </ScrollView>

            </SafeAreaView>
        );
    }
}
export default MenClothingPage;

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    back: {
        width: 30,
        height: 20,
    },
    belowheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingRight: 150,
        //marginHorizontal: 5,

    },
    backicon: {
        width: 25,
        height: 20,
    },
    title: {
        fontWeight: 'bold',
        fontsize: 20
    },
    line: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,

    },
    sortarea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginHorizontal: 5,
        padding: 20,


    },
    // items: {
    //     color: 'grey'
    // },
    sort: {
        flexDirection: 'row',
        JustifyContent: 'space-between',
        paddingHorizontal: 10
    },
    sorticon: {
        width: 20,
        height: 15,

    },
    sorttext: {
        //color:'grey'

    },
    filter: {
        flexDirection: 'row',
        JustifyContent: 'space-between',
        paddingHorizontal: 10
    },
    filtericon: {
        width: 20,
        height: 15,

    },
    sortfilter: {
        flexDirection: 'row',
        JustifyContent: 'space-around',

    },
    linevertical: {
        height: '100%',
        width: 1,
        backgroundColor: 'grey'
    },
    categories: {
        padding: 10,
        justifyContent: 'space-around',

    },
    category: {
        width: 100,
        height: 40,
        borderRadius: 10,
        //backgroundColor:'rgb(244,244,244)',
        //borderWidth: 2,
        //borderColor: 'green',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 2

    },
    products: {
        padding: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',

    },
    product: {
        width: '49%',
        //padding:5,
        justifyContent: 'center',
        //flexDirection: 'row',
        //margin:2
        //backgroundColor:'red'

    },
    productimg: {
        width: '100%',
        height: 240,
        //position:'absolute'
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3
    },
    producttext1: {
        fontSize: 15,
        fontWeight: 'bold',
        //padding:2
    },
    producttext2: {
        fontSize: 10,
        padding: 2
    },
    producttext3: {
        fontSize: 18,
        fontWeight: 'bold',
        //padding:2
    },

    wishlistlogo: {
        width: 20,
        height: 20,
        marginRight: 8
        //marginLeft: 158,
        //marginTop: 10
    },
    new: {
        width: 30,
        height: 18,
        //borderRadius: 10,
        backgroundColor: 'green',
        color: 'white',
        fontSize: 10,
        padding: 2
        // alignContent:'center',
        // justifyContent:'center',
        //alignItems:'center',
        //marginTop:10



    }





})