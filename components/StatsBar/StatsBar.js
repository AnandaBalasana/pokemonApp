import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../styles/Colors';

const StatsBar = props => {
  return (
    <View style={styles.barContainer}>
      <Text style={{marginRight: 20}}>{props.stats.name}</Text>
      <View style={styles.bar}>
        <View
          style={{
            backgroundColor: Colors.yellow,
            height: 15,
            width: props.stats.value,
            zIndex: 3,
          }}
        />
        <View
          style={{
            backgroundColor: Colors.dark,
            height: 15,
            width: 200,
            marginLeft: -props.stats.value,
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
};

export default StatsBar;
