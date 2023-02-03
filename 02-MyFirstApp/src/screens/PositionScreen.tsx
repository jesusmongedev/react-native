import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={styles.purpleBox }/>
        <View style={styles.orangeBox}/>
        <View style={{...styles.purpleBox, top: -175, left: 30}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28c4d9'
    },
    purpleBox: {
        width: 150,
        height: 150,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        zIndex: 3,
        top: 25,
        left: -30
    },
    orangeBox: {
        width: 150,
        height: 150,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        bottom: 75,
        zIndex: 4
    }
});

