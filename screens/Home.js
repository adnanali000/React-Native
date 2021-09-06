import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { globalStyles } from '../style/global'



export default function Home({navigation}) {

    const pressHandler = ()=>{
        navigation.push('ReviewDetails')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <View style={globalStyles.buttton}>
            <Button title="go to review details" onPress={pressHandler} />
            </View>
        </View>
    )
}

