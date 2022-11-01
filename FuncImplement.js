import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {DATA} from './data';
import React, {useCallback, useRef, useState} from 'react';

const FuncImplement = () => {
  const [text, setText] = useState('');
  const [ref, setRef] = useState(null);
  const [isEnd, setIsEnd] = useState(false)
  var flatlistRef = useRef(null).current
  const _keyExtractor = useCallback((_, index) => index.toString());
  const _getItemLayout = useCallback(((_, index) => (
    { length: 400, offset: 400 * index, index }
  )))

  const onEnd = () => {
    setIsEnd(true);
  }

  let len = DATA.length;
  let total = len*400;
  const onScrollEvent = ({contentOffset}) => { 
    return contentOffset.y <= 15370
  };

  const onBtnPressHandler = () => {
    const id= DATA.findIndex((item)=> item.id=== parseInt(text))
    ref.scrollToIndex({index: id});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{padding: 10, margin: 20}}>
          <TextInput
            style={styles.InputBox}
            value={text}
            placeholder="Type a Id"
            onChangeText={text => {
              setText(parseInt(text));
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1} onPress={onBtnPressHandler}>
              Go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
      <FlatList
        ref={ref => {
          setRef(ref);
        }}
        //style={{flex: 1}}
        data={DATA}
        getItemLayout={_getItemLayout}
        keyExtractor={(item, index) => `${item.id + index}`}
        onEndReached={onEnd}
        onEndReachedThreshold={0.1}
        onScroll={({nativeEvent}) => {
          if(onScrollEvent(nativeEvent)){
            setIsEnd(false)
          }}}
        renderItem={({item, index}) => {
          return (
              <View
                key={index}
                style={{
                  margin: 5,
                  justifyContent: 'center',
                }}>
                <View>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={{
                    //   height: "100%",
                    //   width: "100%",
                    height:200,
                    width:200,

                      alignSelf: 'center',
                      margin: 10,
                    }}
                  />
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      paddingStart: 5,
                      paddingEnd: 16,
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    {item.id}
                  </Text>
                </View>
              </View>
             
          );
        }}
      />
       {isEnd && <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    ref.scrollToIndex({
                      index: 0,
                      animated: true,
                      viewPosition: 1,
                    });
                  }}>
                  <Text style={styles.buttonText}>Back to top</Text>
                </TouchableOpacity>
              </View>}
              </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    width: '80%',
    // marginTop: 50,
    marginLeft: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
  },
  InputBox: {
    borderWidth: 5,
    borderColor: 'black',
    width: '100%',
    borderWidth: 1,
    height: 30,
    width: 200,
    textAlign: 'center',
  },
  button1: {
    backgroundColor: 'pink',
    marginTop: 30,
    height: 30,
    width: 70,
  },
  buttonText1: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginTop: 6,
  },
});

export default FuncImplement;
