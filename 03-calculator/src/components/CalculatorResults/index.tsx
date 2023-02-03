import { Text, StyleSheet } from 'react-native';
import React from 'react'
import { CalcScreenProps } from '../../models/index';

export default function CalculatorResults({value,prevValue}: CalcScreenProps) {
  return (
    <>
      { prevValue !== '0'  && <Text style={[styles.result, styles.smallResult]}>{ prevValue }</Text> }
      <Text 
        style={ styles.result }
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        { value }
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginRight: 10
      },
      smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
      },
});