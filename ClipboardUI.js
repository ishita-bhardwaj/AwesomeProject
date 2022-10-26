import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert,
    Clipboard,
    BackHandler, StyleSheet
  } from 'react-native';
  // import Clipboard from '@react-native-clipboard/clipboard';
  import React, {useEffect, useState} from 'react';
  //import style from './ClipboardStyle';
  
  export default function ClipboardUI(props) {
  
    const [copiedText, setCopiedText] = useState('');
    const [showCopiedText, setShowCopiedText] = useState(false);
  
    useEffect(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => props.navigation.goBack() }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);
  
    const copyToClipboard = () => {
      Clipboard.setString(copiedText);
      // Alert.alert('Copied to clipboard');
    };
  
    const fetchCopiedText = async () => {
      const text = await Clipboard.getString();
       setCopiedText(text);
      await Alert.alert('Copied Text',copiedText);
  
    }
  
    
  
    return (
      <SafeAreaView>
        <View style={style.mainCont}>
          <TextInput
            onChangeText={text => setCopiedText(text)}
            value={copiedText}
            style={style.input}
            placeholder="Enter Text To Be Copied"></TextInput>
          <TouchableOpacity onPress={copyToClipboard} style={style.copyBtn}>
            <Text style={style.btnText}>COPY</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={style.copyBtn} onPress= {fetchCopiedText}>
              <Text style={style.btnText}>SHOW COPIED TEXT</Text>
              {/* <Text style= {style.copiedText}>{copiedText}</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

const style = StyleSheet.create({
    mainCont: {
        alignItems: 'center'
    },
    input: {
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
    },
    copyBtn: {
        backgroundColor: 'pink',
        width: 200,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
        
    },
    btnText: {
        fontWeight: 'bold',
        color: 'black',
        textDecoration: 'underline'
    },
    copiedText: {
        
    }   


})

  
  