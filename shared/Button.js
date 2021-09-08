import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../style/global';

export default function FlatButton({text,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        borderWidth:1,
        backgroundColor:'red',
        borderColor:'red'
    },
    buttonText:{
        color:'red',
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'white',
        fontSize:16,
        textAlign:'center'
    }
})