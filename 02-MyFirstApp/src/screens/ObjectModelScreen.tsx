import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const ObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Object Model!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderWidth: 5,
        borderColor: '#BB86FC',
        backgroundColor: '#3700B3',
        borderRadius: 25,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 20,
    },
    text: {
        paddingVertical: 40, 
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'monospace',
        borderWidth: 5,
        borderColor: '#03DaC6',
        borderRadius: 25,
    }
});