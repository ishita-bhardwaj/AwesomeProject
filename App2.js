import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import App from './App';
import screen from './screen';
import screen2 from './screen2';
import otpScreen from './otpScreen';
import WebViewActivity from './WebViewActivity';
import WebViewSlider from './WebViewSlider';
import SectionLists from './SectionLists';
import AlertImplement from './AlertImplement';
import ClipboardUI from './ClipboardUI';
import AnimImplement from './AnimImplement';
import AnimationImplement from './AnimationImplement';
const Stack = createNativeStackNavigator();

function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Counter" component={App} />
                <Stack.Screen name="LoginScreen" component={screen} />
                <Stack.Screen name="TicketBooking" component={screen2} />
                <Stack.Screen name="Otpscreen" component={otpScreen} />
                <Stack.Screen name="Webviewactivity" component={WebViewActivity} />
                <Stack.Screen name="Webviewslider" component={WebViewSlider} />
                <Stack.Screen name="SectionList" component={SectionLists} />
                <Stack.Screen name="AlertImplement" component={AlertImplement} />
                <Stack.Screen name="ClipboardUI" component={ClipboardUI} />
                <Stack.Screen name="AnimImplement" component={AnimImplement} />
                <Stack.Screen name="AnimationImplement" component={AnimationImplement} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App2;