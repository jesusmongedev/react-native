import {View} from 'react-native';
import React from 'react';

import {styles} from '../theme/appTheme';
import CalcBtn from '../components/Common/CalculatorButton/index';
import CalculatorResults from '../components/CalculatorResults/index';
import { useCalculator } from '../hooks/useCalculator';

export default function CalculatorScreen() {

  const { 
    value, 
    prevValue, 
    addBtn, 
    calculate, 
    concatValue, 
    deleteButton, 
    divideBtn,
    multipleBtn,
    reset,
    reverseNumberSign,
    substractBtn 
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {/* Results Screen */}
      <CalculatorResults value={value} prevValue={prevValue} />

      {/* Mathematical operations symbols and numbers */}
      <View style={styles.buttonsBg}>
        {/* First Row */}
        <CalcBtn label="C" bgColor="#A5A5A5" action={reset} />
        <CalcBtn label="⁺∕₋" bgColor="#A5A5A5" action={reverseNumberSign} />
        <CalcBtn label="&#8592;" bgColor="#A5A5A5" action={deleteButton} />
        <CalcBtn label="÷" bgColor="#FEA00A" action={divideBtn} />

        {/* Second Row */}
        <CalcBtn label="7" action={concatValue} />
        <CalcBtn label="8" action={concatValue} />
        <CalcBtn label="9" action={concatValue} />
        <CalcBtn label="*" bgColor="#FEA00A" action={multipleBtn} />

        {/* Third Row */}
        <CalcBtn label="4" action={concatValue} />
        <CalcBtn label="5" action={concatValue} />
        <CalcBtn label="6" action={concatValue} />
        <CalcBtn label="-" bgColor="#FEA00A" action={substractBtn} />

        {/* Fourth Row */}
        <CalcBtn label="1" action={concatValue} />
        <CalcBtn label="2" action={concatValue} />
        <CalcBtn label="3" action={concatValue} />
        <CalcBtn label="+" bgColor="#FEA00A" action={addBtn} />

        {/* Fifth Row */}
        <CalcBtn label="0" double action={concatValue} />
        <CalcBtn label="." action={concatValue} />
        <CalcBtn label="=" bgColor="#FEA00A" action={calculate} />
      </View>
    </View>
  );
}
