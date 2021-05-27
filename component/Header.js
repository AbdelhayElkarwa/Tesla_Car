import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../assets/images/menu.png')} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15,
        position: 'absolute',
        top: 50,
        zIndex: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'

    },
    menu: {
        width: 25,
        height: 25,

    }
})
