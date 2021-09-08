import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>

            <View>
                <Text style={styles.headerText}>Taj Gasoline</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItemsL:'center',
        justifyContent:'center'

    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'red',
        letterSpacing:1
    }
})