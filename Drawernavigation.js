import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Homescreen from './Homescreen';
import App from './App';
import screen from './screen';
import screen2 from './screen2';
import otpScreen from './otpScreen';

import {View,} from 'react-native'

 const Drawer = createDrawerNavigator();

 export default function DrawerNavigation(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {/* <Drawer.Screen name="Home" component={Homescreen}
                
                /> */}
                 <Drawer.Screen name="Assignment1" component={App} />
                <Drawer.Screen name="Assignment2" component={screen} />
                <Drawer.Screen name="Assignment3" component={screen2} />
                <Drawer.Screen name="Assignment4" component={otpScreen} />
                

            </Drawer.Navigator>
        </NavigationContainer>
        // <View style={{backgroundColor:'red',flex:1}}></View>
    );
}
