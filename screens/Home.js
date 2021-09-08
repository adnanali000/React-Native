import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,FlatList,TouchableOpacity,Modal} from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../style/global'
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({navigation}) {
    const [modalOpen,setModalOpen] = useState(false)
    const [reviews,setReviews] = useState([
        {title:'Zeida,Breath of Fresh Air',rating:'5',body:'lorem epsum',key:'1'},
        {title:'Not so final fantasy',rating:'4',body:'lorem epsum',key:'2'},
        {title:'Gotta catch them all',rating:'2',body:'lorem epsum',key:'3'},
        {title:'Review app',rating:'1',body:'lorem epsum',key:'4'},
    ])
    
    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                <MaterialIcons
                name='close'
                size={24}
                style={{...styles.modalToggle,...styles.modalClose}}
                onPress={()=>setModalOpen(false)}
            />
                    <ReviewForm />
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(true)}
            />


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

const styles = StyleSheet.create({
  modalToggle:{
      borderWidth:1,
      marginBottom:10,
      borderColor:'grey',
      padding:10,
      borderRadius:10,
      alignSelf:'center'
  },
  modalClose:{
      marginTop:20,
      marginBottom:0
  },
  modalContent:{
      flex:1
  } 
})