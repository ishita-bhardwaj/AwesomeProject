import * as React from 'react';
import { View, Text,Alert, StyleSheet, Button, LogoTitle, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenClothingPage from './MenClothingPage';

class Categories extends React.Component{
    render(){
        return(
            alert("Inside Category")
        );
    }
}
class MyCart extends React.Component{
    render(){
        return(
            alert("Inside MY CART")
        );
    }
}
class Wishlist extends React.Component{
    render(){
        return(
            alert("Inside Wishlist")
        );
    }
}

class Account extends React.Component{
    render(){
        return(
            alert("Inside Account")
        );
    }
}




const Tab = createBottomTabNavigator()


function Tabnavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home"  component={MenClothingPage} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => 
                   
                    <Image  style={styles.icon} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/263115.png')}/>
                    
                }}
           
                />
                <Tab.Screen name="Categories" component={Categories} options={{
                    tabBarLabel: 'Categories',
                   
                    tabBarIcon: ({ color, size }) => 
                  
                    <Image  style={styles.icon} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/561184.png')}/>
                    
                }}/>
                <Tab.Screen name="My Cart" component={MyCart}  options={{
                    tabBarLabel: 'My Cart',
                    tabBarIcon: ({ color, size }) => 
                  
                    <Image  style={styles.icon} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/5061532.png')}/>
                    
                }} />
                <Tab.Screen name="Wishlist" component={Wishlist} options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ color, size ,focused}) => 
                 
                    <Image  style={styles.icon} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3132924.png')}/>
                   
                }} />
                <Tab.Screen name="Account" component={Account} options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => 
                  
                    <Image  style={styles.icon} source={require('/Users/ishitabhardwaj/Desktop/AwesomeProject/3033143.png')}/>
                    
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabnavigation;
const styles = StyleSheet.create({
    icon: {
        height:20,
        width:22
    },
})

