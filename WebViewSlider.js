

import { Text, View, StyleSheet, Switch } from 'react-native'
import React, { Component, useState } from 'react'
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';

const WebViewSlider = () => {

    const [show, setShow] = useState(false);
    const [value, setValue] = useState(0);
    return (
        <View >
            <View style={styles.container}>

            <Switch
                value={show}
                style={styles.switch}
                onValueChange={(switchValue) => setShow(switchValue)} />
            </View>
            {show && <View>
                <Text style= {{textAlign: 'center'}}>
                    {value}
                </Text>
                <Slider
                style= {styles.slider}
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    minimumTrackTintColor="purple"
                    maximumTrackTintColor="black"
                    value={value}
                    onValueChange={sliderValue => setValue(sliderValue)}
                /></View>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // textAlign: 'center',
        // justifyContent: 'center',
        // flex: 1,
    },
    switch: {
        alignItems: 'center'
    },
    slider: {
        // flex: 1,
        width: '100%'
    }
})

export default WebViewSlider;