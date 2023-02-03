import React from 'react';
import {SafeAreaView} from 'react-native';
// import {StylesHomeworkScreen} from './src/screens/StylesHomeworkScreen';
// import {AlignItemsScreen} from './src/screens/FlexLayout/AlignItemsScreen';
import {JustifyContentScreen} from './src/screens/FlexLayout/JustifyContentScreen';
// import {FlexScreen} from './src/screens/FlexLayout/FlexScreen';
// import {AbsolutePositionScreen} from './src/screens/AbosulePositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <AbsolutePositionScreen /> */}
      {/* <FlexScreen /> */}
      <JustifyContentScreen />
      {/* <AlignItemsScreen /> */}
      {/* <StylesHomeworkScreen /> */}
    </SafeAreaView>
  );
};

export default App;
