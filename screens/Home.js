import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../style/global'


export default function Home({navigation}) {
    const [reviews,setReviews] = useState([
        {title:'Zeida,Breath of Fresh Air',rating:'5',body:'lorem epsum',key:'1'},
        {title:'Not so final fantasy',rating:'4',body:'lorem epsum',key:'2'},
        {title:'Gotta catch them all',rating:'2',body:'lorem epsum',key:'3'},
        {title:'Review app',rating:'1',body:'lorem epsum',key:'4'},


    ])
    
    return (
        <View style={globalStyles.container}>
            <FlatList
                data = {reviews}
                renderItem = {({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    )
}

