import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('adnan');
  const [age,setAge] = useState('21');

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g adnan'
        multiline
        onChangeText={(value)=>setName(value)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g 25"
        keyboardType="numeric"
        onChangeText={(value)=>setAge(value)}
      />
        <Text>Name: {name}, age: {age}</Text>
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
  input:{
    borderWidth:1,
    padding:10,
    width:200,
    margin:10

  }
 
});
