import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default HomeStack = ()=>{
     return (
     <NavigationContainer>
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
                headerTintColor: 'white'
              }}
            >
            <Stack.Screen 
                name='Home' 
                component={Home}  
            />
            <Stack.Screen
             name='ReviewDetails' 
             component={ReviewDetails}
             />
        </Stack.Navigator>
    </NavigationContainer>
     )
}
