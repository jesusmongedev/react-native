import { useRef, useState } from 'react'
import { Operators } from '../models/index';

export const useCalculator = () => {
  
  const [value, setValue] = useState('100');
  const [prevValue, setPrevValue] = useState(value);
    
  const lastOperation = useRef<Operators>();

  const concatValue = (currentValue: string) => {
    // Does not accept double point 0..
    if (value.includes('.') && currentValue === '.') return;

    if (value.startsWith('0') || value.startsWith('-0')) {
      // Validate Decimal point
      if (currentValue === '.') {
        setValue(value + currentValue);

        // Evaluate if is another 0 and there is a point
      } else if (currentValue === '0' && value.includes('.')) {
        setValue(value + currentValue);

        // Review if input value is not equal to '0' and value has not '.'
      } else if (currentValue !== '0' && !value.includes('.')) {
        setValue(currentValue);

        // Avoid 0000.0
      } else if (currentValue === '0' && !value.includes('.')) {
        setValue(value);
      } else if (currentValue === "Can't divide by zero") {
        console.log(value);

        setValue(value);
      } else {
        setValue(value + currentValue);
      }
    } else {
      setValue(value + currentValue);
    }
  };

  const reset = () => setValue('0');

  const reverseNumberSign = () => {
    if (!value.includes('-')) {
      setValue(`-${value}`);
    } else {
      setValue(value.replace('-', ''));
    }
  };

  const deleteButton = () => {
    if (value.length > 1) {
      if (value.includes('-') && value.length === 2) {
        setValue('0');
      } else {
        setValue(value.slice(0, -1));
      }
    } else {
      setValue('0');
    }
  };

  const changePrevValue = () => {
    if (value.endsWith('.')) {
      setPrevValue(value.slice(0, -1));
    } else {
      setPrevValue(value);
    }
    setValue('0');
  };

  const divideBtn = () => {
    changePrevValue();
    lastOperation.current = Operators.divide;
  };

  const multipleBtn = () => {
    changePrevValue();
    lastOperation.current = Operators.multiple;
  };
  const substractBtn = () => {
    changePrevValue();
    lastOperation.current = Operators.substract;
  };
  const addBtn = () => {
    changePrevValue();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num2 = Number(value);
    const num1 = Number(prevValue);

    switch (lastOperation.current) {
      case Operators.add:
        setValue(`${num1 + num2}`);
        break;

      case Operators.substract:
        setValue(`${num1 - num2}`);
        break;

      case Operators.multiple:
        setValue(`${num1 * num2}`);
        break;

      case Operators.divide:
        //TODO add logic to round decimals just if needed
        if (num2 === 0) {
          setValue(`Can't divide by zero`);
        } else {
          setValue(`${num1 / num2}`);
        }
        break;
    }
    setPrevValue('0');
  };

  return {
    value,
    prevValue,
    reset,
    reverseNumberSign,
    deleteButton,
    divideBtn,
    concatValue,
    multipleBtn,
    substractBtn,
    addBtn,
    calculate
  }


}
