import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import ButtonComp from './ButtonComp'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car
    console.log(props.car)
    return (
        <View style={styles.carcontainer}>
            <ImageBackground source={image}
                style={styles.image} />
            <View style={styles.titels}>
                <Text style={styles.titel}>{name}</Text>
                <Text style={styles.subtite}>{tagline} {' '}
                    <Text style={{ textDecorationLine: 'underline' }}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComp type='primary' textt='custom order' />
                <ButtonComp type='secondary' textt='existing investory' />
            </View>

        </View>
    )
}

export default CarItem

const styles = StyleSheet.create({
    carcontainer: {

        width: '100%',
        height: Dimensions.get('window').height + 32,



    }, titels: {
        alignItems: 'center',
        marginTop: '30%'

    }


    ,
    titel: {
        fontSize: 50,
        fontWeight: '500',

    },
    subtite: {
        color: 'gray',
        fontSize: 15
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }

})
