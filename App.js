import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos,setTodos] = useState([
    {text:'create an todo app',key:'1'},
    {text:'create an travel app',key:'2'},
    {text:'create an food delivery app',key:'3'},
  ])

  const deleteHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
        {/* header */}
        <Header/>
        <View style={styles.content}>
          {/* todo form */}
          <View style={styles.list}>
            {/* list item  */}
              <FlatList
                data={todos}
                renderItem = {({item})=>(
                    <TodoItem item={item} deleteHandler={deleteHandler} />
                )}
              />

          </View>
        </View>
     </View> 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40
  },
  list:{
    marginTop:30
  }

 
 
});
