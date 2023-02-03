import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const handleCounter = (value: number) => {
    setCounter(counter + value)
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.title}> Counter: </Text>
        <View style={styles.counterContainter}>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
      </View>

            {/* Increment */}
          <Fab 
            title='+1' 
            action={() => handleCounter(1)}
          />

            {/* Decrement */}
          <Fab 
            title='-1' 
            position='bl'
            action={() => handleCounter(-1)}
          />
          
      </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    headerContainer: {
      flexDirection: 'row',
      top: -20,
      justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
    counterContainter: {
      justifyContent: 'center',
      width: 60,
      height: 60,
      backgroundColor: '#03DaC6',
      borderRadius: 100, 
    },
    counterText: {
      fontSize: 35,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#fff',
    },
})