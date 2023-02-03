import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './src/theme/appTheme';
import {colors} from './src/constants/colors';

export default function App() {
  
  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar
        backgroundColor={colors.mainDarkColor}
        // change bar color on IOS devices
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
}
