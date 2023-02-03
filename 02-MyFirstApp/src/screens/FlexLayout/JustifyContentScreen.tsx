import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {PreviewLayout} from '../../components/Fab/PreviewLayout/index';

export const JustifyContentScreen = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');
  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      setSelectedValue={setJustifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}>
      <View style={[styles.box, {backgroundColor: '#1D3557'}]} />
      <View style={[styles.box, {backgroundColor: '#457B9D'}]} />
      <View style={[styles.box, {backgroundColor: '#ADB6C4'}]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});
