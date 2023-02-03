import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {PreviewLayout} from '../../components/Fab/PreviewLayout/index';

export const AlignItemsScreen = () => {
  const [alignItems, setAlignItems] = useState('stretch');
  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      setSelectedValue={setAlignItems}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}>
      <View style={[styles.box, {backgroundColor: '#1D3557'}]} />
      <View style={[styles.box, {backgroundColor: '#457B9D'}]} />
      <View
        style={[
          styles.box,
          {width: 'auto', minWidth: 100, backgroundColor: '#ADB6C4'},
        ]}
      />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});
