import {Dispatch, SetStateAction} from 'react';

export interface CalcScreenProps {
  value: string;
  prevValue: string;
}

export interface CalcBtnProps {
  label: string;
  bgColor?: string;
  double?: boolean;
  action: (currentValue: string) => void;
}

export interface CalcBtnsProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export enum Operators {
  add, substract, multiple, divide
}