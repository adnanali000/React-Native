import React from 'react'
import { StyleSheet, Text, View,FlatList} from 'react-native';


export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxone}>Sandbox</Text>
            <Text style={styles.boxtwo}>Sandbox</Text>            
            <Text style={styles.boxthree}>Sandbox</Text>            
            <Text style={styles.boxfour}>Sandbox</Text>            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    boxone:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    boxtwo:{
        flex:2,
        backgroundColor:'green',
        padding:20
    },
    boxthree:{
        flex:1,
        backgroundColor:'blue',
        padding:30
    },
    boxfour:{
        flex:2,
        backgroundColor:'yellow',
        padding:40
    }

})