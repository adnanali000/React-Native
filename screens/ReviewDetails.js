import React from 'react';
import {View,Text,Button} from 'react-native';
import { globalStyles } from '../style/global'


export default function ReviewDetails({navigation}) {
    const pressHandler = ()=>{
        navigation.push('Home')
    }
    return (
        <View style={globalStyles.container}>
            <Text> Review Details Screen</Text>
            <View style={globalStyles.buttton}>
            <Button title="go to home screen" onPress={pressHandler} />
            </View>
        </View>
    )
}

