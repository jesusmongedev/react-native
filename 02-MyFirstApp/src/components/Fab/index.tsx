import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';
import React from 'react'

interface FabProps {
    title: string,
    position?: 'bl' | 'br',
    action: () => void
}

export const Fab = ({  title, position = 'br', action }: FabProps) => {

    const android = () => {
        return (
            <View 
                style={[
                    styles.fabVerticalLocation,
                    ( position === 'bl' ) ? styles.fabLeft : styles.fabRight
                ]}
            >
                <TouchableNativeFeedback
                    onPress={action}
                    background={TouchableNativeFeedback.Ripple('#c49dfc', false, 30)}
                >
                <View style={styles.fab}>
                    <Text style={styles.fabLabel}> { title } </Text>
                </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    const ios = () => {
        return (
            <TouchableOpacity 
                style={[
                    styles.fabVerticalLocation,
                    ( position === 'bl' ) ? styles.fabLeft : styles.fabRight
                ]}
                onPress={action}
                activeOpacity={0.75}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabLabel}> { title } </Text>
                </View>
            </TouchableOpacity>
        )
    }

  return (
    (Platform.OS === 'android') ? android() : ios()
  )
}

const styles = StyleSheet.create({
    fabVerticalLocation: {
        position: 'absolute',
        bottom: 30,
    },
    fabRight: {
        right: 25,
    },
    fabLeft: {
        left: 25
    },
    fab: {
        width: 60,
        height: 60,
        backgroundColor:'#a66afc',
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity:  0.3,
        shadowRadius: 5.62,
        elevation: 10
    },
    fabLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})