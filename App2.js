import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import App from './App';
import screen from './screen';
import screen2 from './screen2';
import otpScreen from './otpScreen';



const Stack = createNativeStackNavigator();

function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Assignment1" component={App} />
                <Stack.Screen name="Assignment2" component={screen} />
                <Stack.Screen name="Assignment3" component={screen2} />
                <Stack.Screen name="Assignment4" component={otpScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App2;