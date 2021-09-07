import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from '../style/global'



export default function Home({navigation}) {
    const [reviews,setReviews] = useState([
        {title:'Zeida,Breath of Fresh Air',rating:'5',body:'lorem epsum',key:'1'},
        {title:'Not so final fantasy',rating:'4',body:'lorem epsum',key:'2'},
        {title:'Gotta catch them all',rating:'2',body:'lorem epsum',key:'3'},

    ])
    
    return (
        <View style={globalStyles.container}>
            <FlatList
                data = {reviews}
                renderItem = {({item})=>(
                    <TouchableOpacity onPress={()=>navigation.push('ReviewDetails',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    )
}

