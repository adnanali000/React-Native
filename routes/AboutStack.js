import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import {View} from 'react-native'

const Stack = createStackNavigator();

export default AboutStack = ()=>{
     return (
     <>
         {/* same styling of header on all screens belong to this stack  */}
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'red'
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    color:'white',
                },
                headerBackTitleStyle:{
                    color:'white'
                },
                headerTintColor: 'white',
                headerShown:false
              }}
            >
            <Stack.Screen 
                name='About App' 
                component={About} 
            />
        </Stack.Navigator>
    </>
     )
}
