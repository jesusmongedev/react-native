import React from 'react';
import {Text, View} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 45,
          color: '#121212',
          fontWeight: '500',
        }}>
        Hello World!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 35,
          color: 'navy',
          fontWeight: '500',
        }}>
        I'm Jesus Monge
      </Text>
    </View>
  );
};
