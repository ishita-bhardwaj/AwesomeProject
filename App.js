// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */


// import React, {Component} from 'react';
// import  {Node} from 'react-native';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         {/* <Header /> */}
//         <View
//         style={{
//           flexDirection: "row",
//           height: 100,
//           padding: 20
//         }}
//       >
        
//         <Text>Hello World!</Text>
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

//export default App;

import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import ShowCounter from './ShowCounter';

class App extends Component {
  
  constructor(props){
    console.log("cons called")
    super(props);
    this.state = { counter: 0 };
  }

  static getDerivedStateFromProps() {
    console.log("getderivedstatefromprops")
    return null;
  }

  componentDidMount() {
    console.log("compdidmount")
  }

 

  shouldComponentUpdate() {
    console.log(" child shouldComponentUpdate")
        return true;
  
  }

  getSnapshotBeforeUpdate() {
    console.log("getsnap")
    return null;
  }

  componentDidUpdate() {
    console.log("compdidupdate")
  }

  onDecrement = () => {
    if (this.state.counter <= 0){
      alert("Value of counter cannot be less than 0");
    }
    else{
      this.setState({
        counter : this.state.counter - 1
      }
      )
    }
  }
  onIncrement = () => {
    if (this.state.counter >= 10){
      alert("Value of counter cannot be incremented");
    }
    else{
      this.setState({
        counter : this.state.counter + 1
      })
    }
  }
  

  onReset = () => {
    this.setState({
      counter : this.state.counter = 0
    })
  }

  render(){
    console.log("render")
    return(
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            Counter Application
          </Text>
          

          < ShowCounter counter={
            this.state.counter
          }/>
          <TouchableOpacity 
          style={styles.Decrement} 
          onPress={this.onDecrement} 
          >
          <Text style= {styles.text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.Increment}
          onPress={this.onIncrement}
          >
          <Text style= {styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      <View>
         <TouchableOpacity
           style={styles.button}
           onPress={this.onReset}
         >
           <Text style={styles.reset}>Reset</Text>
         </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    

  },
  
  title: {
    top: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  
  count: {
    top: 250,
    padding: 0,
    fontSize: 90,
    textAlign: 'center',
    fontFamily: 'arial',
  },

  Decrement: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    marginLeft: 40,
    width: 100,
    height: 40,
    padding: 10,
  },

  text: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'arial',
  },

  Increment: {
    alignItems: 'center',
    backgroundColor:'#DDDDDD',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    marginLeft: 250,
    width: 100,
    height: 40,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    marginLeft: 10,
    width: 370,
    height: 40,  
  },

  reset: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'arial',
  }

})


  
