import React from 'react'
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

// current window's dimensions does not update on new device orientazion
// const {width, height} = Dimensions.get('window')

export const DimensionsScreen = () => {
    
  // current window's dimensions and updated value on new device orientazion
  const { width, height } = useWindowDimensions()

  return (
    <View>
        <View style={styles.container}>
            <View 
                style={{
                    ...styles.purpleBox,
                    width: width * 0.2
                }}
            />
            <View 
                style={{
                    ...styles.orangeBox,
                    width: height * 0.3
                }}
            />
        </View>
        <Text style={styles.text}> W: {width} - H: {height} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        backgroundColor: '#1A1D1A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    purpleBox: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: '34%',
        backgroundColor: '#C287E8' 
    },
    orangeBox: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: '34%',
        backgroundColor: '#E7A977'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1A1D1A',
        textAlign: 'center',
        marginVertical: 30
    }
});