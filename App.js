/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, Animated, TouchableWithoutFeedback
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  state= {
    animation: new Animated.Value(0) // default opacity to 1 otherwise it will be hidden
  }
 startAnimation=()=>{
   Animated.timing(this.state.animation,{
     toValue: 300,
     duration: 1500
   }).start(()=>{
    Animated.timing(this.state.animation,{
      toValue: 0,
      duration: 1500
    }).start()
   })
 }

  render() {
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    }
    return (
      <View style={styles.container}>
       <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box,animatedStyles]}/>
       </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  }
});
