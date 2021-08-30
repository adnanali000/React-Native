import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name:'adnan',id:'1'},
    {name:'faham',id:'2'},
    {name:'wasim',id:'3'},
    {name:'suffyan',id:'4'},
    {name:'najam',id:'5'},
    {name:'tayyab',id:'6'},
    {name:'fazeel',id:'7'},
    {name:'anas',id:'8'},
    {name:'salman',id:'9'},
    {name:'ahmed',id:'10'},

  ]);
  
  const pressHandler = (id)=>{
    // alert(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id);
    })
  }

  return (
    <View style={styles.container}>

    <FlatList
      numColumns={2}
      keyExtractor={(item)=>item.id}
      data = {people}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
          <Text style={styles.li}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
      

    {/* <ScrollView>  
     {
       people.map((item)=>{
         return(
            <View key={item.key}>
                <Text  style={styles.li}>{item.name}</Text>
            </View>
         )
       })
     }
     </ScrollView> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  li:{
    color:'white',
    fontSize:24,
    textAlign:"center",
    marginTop:30,
    padding:30,
    backgroundColor:"red",
    marginHorizontal:10,
    width:170

  }
 
});
