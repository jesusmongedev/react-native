import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AbsolutePositionScreen = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.yellowBox} /> */}
      <View style={styles.salmonBox} />
      <View style={styles.purpleBox} />
      <View style={styles.pinkBox} />
      {/* <View style={styles.greenBox} />
      <View style={styles.redBox} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // width: 360,
    // height: 400,
    backgroundColor: '#28c4d9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 4,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // right: 0,
  },
  pinkBox: {
    width: 100,
    height: 100,
    backgroundColor: '#E0479E',
    borderWidth: 4,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: '45%',
    // right: 125,
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: '#FF0000',
    borderWidth: 4,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  salmonBox: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    borderWidth: 4,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: '#56E39F',
    borderWidth: 4,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  // yellowBox: {
  //   backgroundColor: '#FFC100',
  //   borderWidth: 4,
  //   borderColor: 'white',
  //   // position: 'absolute',
  //   // bottom: 0,
  //   // left: 0,
  //   // right: 0,
  //   // top: 0
  //   // is the same as
  //   ...StyleSheet.absoluteFillObject,
  // },
});
