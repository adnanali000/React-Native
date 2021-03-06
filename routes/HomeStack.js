import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import {View} from 'react-native'

const Stack = createStackNavigator();

export default HomeStack = ()=>{
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
                name='home' 
                component={Home} 
                options={{ title: 'My home' }}
            />
            <Stack.Screen
             name='ReviewDetails' 
             component={ReviewDetails}
             options={{ title: 'My ReviewDetail' }}
             />
        </Stack.Navigator>
    </>
     )
}
