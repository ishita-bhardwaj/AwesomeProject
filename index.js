/**
 * @format
 */
import {View,} from 'react-native'
import {AppRegistry} from 'react-native';
import App2 from './App2';
import {name as appName} from './app.json';
import DrawerNavigation from './Drawernavigation';

AppRegistry.registerComponent(appName, () => DrawerNavigation);

// /**
//  * @format
//  */
//  import {View,} from 'react-native'
//  import {AppRegistry} from 'react-native';
//  import {name as appName} from './app.json';
//  import  Tabnavigation from './Tabnavigation';
 
//  AppRegistry.registerComponent(appName, () => Tabnavigation);
