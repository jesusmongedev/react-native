import React from 'react';
import {View} from 'react-native';
import {styles} from '../homeworkStyles/10';

export const StylesHomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
};
