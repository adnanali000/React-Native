import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
// import Header from './components/Header';
// import TodoItem from './components/TodoItem';
// import AddTodo from './components/AddTodo';
// import Sandbox from './components/Sandbox';


export default function App() {
  // const [todos,setTodos] = useState([
  //   {text:'create an todo app',key:'1'},
  //   {text:'create an travel app',key:'2'},
  //   {text:'create an food delivery app',key:'3'},
  //   {text:'create an tax delivery app',key:'4'},
  //   {text:'create an e-commerce delivery app',key:'5'},

  // ])

  // const deleteHandler = (key)=>{
  //   setTodos((prevTodos)=>{
  //     return prevTodos.filter(todo => todo.key != key);
  //   })
  // }

  // const addTodo = (text)=>{
  //   if(text.length > 3){
  //     setTodos((prevTodos)=>{
  //       return [
  //         {text:text,key:Math.random().toString()},
  //         ...prevTodos
  //       ]
  //     })
  //   }else{
  //     Alert.alert('Oops','Todo must be more than 3 char long',[
  //       {text:'Understood',onPress:()=>console.log('alert fired')}
  //     ])
  //   }
    
  // }


  return (


    <View>
      <Text>Hello world</Text>
    </View>

















    // <Sandbox />
  // <TouchableWithoutFeedback onPress={()=>{
  //   Keyboard.dismiss();
  // }}>
  //   <View style={styles.container}>
  //       {/* header */}
  //       <Header/>
  //       <View style={styles.content}>
  //         {/* todo form */}
  //         <AddTodo addTodo = {addTodo} />
  //         <View style={styles.list}>
  //           {/* list item  */}
  //             <FlatList
  //               data={todos}
  //               renderItem = {({item})=>(
  //                   <TodoItem item={item} deleteHandler={deleteHandler} />
  //               )}
  //             />

  //         </View>
  //       </View>
  //    </View> 
  //    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // content:{
  //   padding:40,
  //   // backgroundColor:'pink',
  //   flex:1
  // },
  // list:{
  //   marginTop:30,
  //   // backgroundColor:'yellow',
  //   flex:1
  // }

 
 
});
