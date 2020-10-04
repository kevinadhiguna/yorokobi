import React from 'react';
import {Image, StyleSheet, View, Platform, StatusBar} from 'react-native';

import Colors from '../config/colors';

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
