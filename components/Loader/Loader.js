import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Colors from '../../styles/Colors.js';

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={Colors.blue} />
    </View>
  );
};

export default Loader;
