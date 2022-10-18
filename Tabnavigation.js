import * as React from 'react';
import { View, Text, StyleSheet, Button, LogoTitle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './Homescreen';
import App from './App';
import screen from './screen';
import screen2 from './screen2';
import otpScreen from './otpScreen';



const Tab = createBottomTabNavigator();

function Tabnavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Homescreen}
                //     options={
                //         headerTitle : (props) => <LogoTitle {...props}
                // }
                />
                <Tab.Screen name="Assignment1" component={App} />
                <Tab.Screen name="Assignment2" component={screen} />
                <Tab.Screen name="Assignment3" component={screen2} />
                <Tab.Screen name="Assignment4" component={otpScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabnavigation;