import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName] = useState('adnan');
  const [person,setPerson] = useState({skill:'Web Developer',age:21})

  const clickHandler = ()=>{
    setName('adnan ali');
    setPerson({skill:'Web and Mobile App Developer',age:22});
  }
  return (
    <View style={styles.container}>
          <Text>My name is {name}</Text>
          <Text>My age is {person.age} and I'm a {person.skill}</Text>
          <View style={styles.btnContainer}>
            <Button title='click to Update' onPress={clickHandler} />
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer:{
    margin:10,
    backgroundColor:'wheat',
  }
 
});
