import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default function CarImputComponent(){

    return (
        <View>
            <TextInput placeholder='Marca do Carro'/>
            <TextInput placeholder='Modelo do Carro'/>
            <Button title='Adicionar' onPress={}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})