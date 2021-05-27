import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const ButtonComp = ({ type, textt }) => {

    const backGroundColor = type === 'primary' ? '#171A2077' : '#ffffffA6'
    const text = type === 'primary' ? '#ffffff' : '#171A2077'
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backGroundColor }]}
                onPress={() => console.warn('Custom Order')}>
                <Text style={[styles.text, { color: text }]}>{textt} </Text>
            </Pressable>
        </View>
    )
}

export default ButtonComp

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100 %',
        height: 50,
        borderRadius: 25
    },
    text: {
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 16
    }
})
