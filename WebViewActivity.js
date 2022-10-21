import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import WebView  from 'react-native-webview';

export default class WebViewActivity extends Component {
    ActivityIndicatorElement() {
      return (
        <ActivityIndicator
         color="#000000"
          size="large"
          style={styles.ActivityIndicatorStyle}
        />
      );
    };
    render() {
      return <WebView style={styles.mainscreen} source={{ uri: 'https://github.com/ishita-bhardwaj?tab=repositories' }}
      renderLoading={this.ActivityIndicatorElement}
      startInLoadingState={true}
      />
    }
  }
  const styles = StyleSheet.create ({
    ActivityIndicatorStyle: {
      //flex: 1,
      //justifyContent: 'space-around',
    //   marginBottom:400
    height: '100%',
    //backgroundColor: 'pink'
      
      
    },
    mainscreen:{
        flex:1,
        //marginTop:20
    }
  })