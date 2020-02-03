import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

const Header = (): Node => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('./background.jpg')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Catch'em all!</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 40,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
