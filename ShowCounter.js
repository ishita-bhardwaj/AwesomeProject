import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

class ShowCounter extends Component {
    constructor(props){
        
        super(props);

    this.state = { counter: 0 };
        console.log("calling the child constructor");
    }

    static getDerivedStateFromProps(props,state) {
        console.log("child getderivedstatefromprops")
        return null;
      }
    
      componentDidMount() {
        console.log("child compdidmount")
      }
    
     
    
      shouldComponentUpdate() {
        console.log(" child shouldComponentUpdate")
        return true;
      }
    
      getSnapshotBeforeUpdate() {
        console.log("child getsnap")
        return null;
      }
    
      componentDidUpdate() {
        console.log("child compdidupdate")
      }

    render(){
        console.log("calling the child render()");
        return (
            <Text style={styles.count}>
            {this.props.counter}
          </Text> 
        )
    }
    
}

export default ShowCounter;

const styles = StyleSheet.create({
    count: {
        top: 250,
        padding: 0,
        fontSize: 100,
        textAlign: 'center',
        fontFamily: 'arial',
      }
})