import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>HELLO WORLD</Text>
      </View>

      <View style={styles.header}>
          <Text style={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text style={styles.title}>Lorem, ipsum dolor sit amet adipisicing elit.</Text>
          <Text style={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text style={styles.title}>Lorem, ipsum dolor sit consectetur adipisicing elit.</Text>
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
  header:{
    backgroundColor:'red',
    padding:20,
    marginTop:10
  },
  title:{
    color:"white",
    fontWeight:"bold"
  },
  para:{
    color:"white",
  }
});
