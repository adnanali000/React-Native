import React from 'react'
import { View, StyleSheet, Text,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function TodoItem({item,deleteHandler}) {
    return (
        <TouchableOpacity onPress={()=>deleteHandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name='delete' size={16} color='red'/> 
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>  
        
    )
}

const styles = StyleSheet.create({
    item:{
        color:'gray',
        borderWidth:1,
        marginTop:10,
        padding:16,
        borderColor:'red',
        borderRadius:10,
        fontSize:16,
        flexDirection:'row'

    },
    itemText:{
        marginLeft:10,
        color:'grey',
        fontWeight:'bold'

    }

})
