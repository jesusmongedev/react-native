import React, {useState} from 'react';
import {View} from 'react-native';
import {PreviewLayout} from '../../components/Fab/PreviewLayout';

export const FlexScreen = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>
      <View style={{flex: 1, backgroundColor: '#262730'}} />
      <View style={{flex: 1, backgroundColor: '#77BA99'}} />
      <View style={{flex: 1, backgroundColor: '#D7C0D0'}} />
    </PreviewLayout>
  );
};
