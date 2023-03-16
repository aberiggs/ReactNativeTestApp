import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';

import Main from './components/Src'

import {textStyle} from './styles/Main'

const STYLES = ['default', 'dark-content', 'light-content'];

export default function App() {
  const [pageNum, setPageNum] = useState(0);

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);

  const Nav = () => {

    return (
        <View style={styles.nav}>
          <Pressable onPress={() => setPageNum(0)} style={styles.navOp}>
            <Text style={textStyle.small}>Counter</Text>
          </Pressable>

          <Pressable onPress={() => setPageNum(1)} style={styles.navOp}>
            <Text style={textStyle.small}>TODO</Text>
          </Pressable>
        </View>
    )
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden='Hidden' barStyle={'dark-content'} style='light-content'/>
      <View style={styles.main}>
        <Main page={pageNum}/>
      </View>
     
      <Nav />
      
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'start',
  },
  nav: {
    width: '100%',
    height: '8%',
    //backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navOp: {
    padding: 20,
  },
  main: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: '#cc91cc',
  }

});
