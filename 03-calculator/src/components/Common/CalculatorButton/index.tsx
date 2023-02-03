import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {CalcBtnProps} from '../../../models';
import {colors} from '../../../constants/colors';

export default function CalculatorButton({
  label,
  bgColor = '#333333',
  double,
  action,
}: CalcBtnProps) {
  return (
    <TouchableOpacity
      style={{
        ...styles.fabBg,
        backgroundColor: bgColor,
        width: double ? 140 : 60,
      }}
      onPress={() => action(label)}>
      <Text
        style={{
          ...styles.fabText,
          color: bgColor === '#A5A5A5' ? colors.mainDarkColor : 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fabBg: {
    marginBottom: 14,
    marginHorizontal: 10,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    fontSize: 25,
    fontWeight: '300',
    textAlign: 'center',
  },
});
