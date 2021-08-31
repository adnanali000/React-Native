import React from 'react'
import { StyleSheet, Text,TouchableOpacity} from 'react-native';



export default function TodoItem({item,deleteHandler}) {
    return (
        <TouchableOpacity onPress={()=>deleteHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
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
        borderRadius:10

    }

})
