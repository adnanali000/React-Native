import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name:'adnan',key:'1'},
    {name:'faham',key:'2'},
    {name:'wasim',key:'3'},
    {name:'suffyan',key:'4'},
    {name:'najam',key:'5'},
    {name:'tayyab',key:'6'},
    {name:'fazeel',key:'7'},
    {name:'anas',key:'8'},

  ]);
  

  return (
    <View style={styles.container}>

    <ScrollView>  
     {
       people.map((item)=>{
         return(
            <View key={item.key}>
                <Text  style={styles.li}>{item.name}</Text>
            </View>
         )
       })
     }
     </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  li:{
    color:'white',
    fontSize:24,
    textAlign:"center",
    marginTop:20,
    padding:30,
    backgroundColor:"red",

  }
 
});
