/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import math from 'mathjs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';




function App(): JSX.Element {
  const [Display,SetDisplay] = useState("0");
  return (
    <ScrollView>
    <View style={{marginTop:10}}>
      <TextInput placeholder='0' style={styles.inputCop} value={Display}></TextInput>
      <View style={{flex:1, flexDirection: 'row', flexWrap:'wrap'}}>
        
        <Text style={styles.Prebutton} onPress={()=>{SetDisplay(Display+'+')}} >+</Text>
        <Text style={styles.Prebutton} onPress={()=>{}} >-</Text>
        <Text style={styles.Prebutton} onPress={()=>{}} >*</Text>
        <Text style={styles.Prebutton} onPress={()=>{}} >/</Text>
        
        <Text style={styles.button} onPress={()=>{SetDisplay(Display+'7')}} >7</Text>
        <Text style={styles.button} onPress={()=>{}} >8</Text>
        <Text style={styles.button} onPress={()=>{}} >9</Text>

        <Text style={styles.button} onPress={()=>{}} >4</Text>
        <Text style={styles.button} onPress={()=>{}} >5</Text>
        <Text style={styles.button} onPress={()=>{}} >6</Text>

        <Text style={styles.button} onPress={()=>{}} >1</Text>
        <Text style={styles.button} onPress={()=>{}} >2</Text>
        <Text style={styles.button} onPress={()=>{}} >3</Text>
        <Text style={styles.Probutton} onPress={()=>{SetDisplay('')}} >Clear</Text>
        <Text style={styles.Probutton} 
        onPress={()=>{let a = math.compile("7+7");SetDisplay(String(a));}} >Calc</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputCop: {
    fontSize:30,
    borderWidth:2,
    borderColor:"black",
    borderRadius:23,
    marginTop:10,
  },
  Prebutton: {
    marginTop:15,
    fontSize: 34,
    backgroundColor: 'red',
    color:'white',
    fontWeight: '800',
    marginRight: 10,
    marginBottom:10,
    width:88,
    borderRadius:50,
    textAlign:'center',
    textAlignVertical: 'center',

  },
  button: {
    marginTop:15,
    fontSize: 54,
    backgroundColor: 'black',
    color:'white',
    fontWeight: '800',
    marginRight: 10,
    marginBottom:10,
    width:120,
    borderRadius:50,
    textAlign:'center',
    textAlignVertical: 'center',

  },
  Probutton: {
    marginTop:15,
    fontSize: 44,
    backgroundColor: 'blue',
    color:'white',
    fontWeight: '800',
    marginRight: 10,
    marginBottom:10,
    width:185,
    borderRadius:50,
    textAlign:'center',
    textAlignVertical: 'center',

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
