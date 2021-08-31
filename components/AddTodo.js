import React,{useState} from 'react'
import { StyleSheet, Text,View,TextInput,Button} from 'react-native';



export default function AddTodo({addTodo}) {
    const [text,setText] = useState('');

    const changeHandler = (val)=>{
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='add todo...'
                onChangeText={changeHandler}
                clearButtonMode="always"
            />
            <View style={styles.btn}>
            <Button onPress={()=> addTodo(text)} title='Add todo' color="white"/>
            </View>
        </View>   
        
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'red',
        fontSize:16,
        marginTop:10,
        padding:10

    },
    btn:{
        backgroundColor:'red',
        marginTop:14
    }    


})
