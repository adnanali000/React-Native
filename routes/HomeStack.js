import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default HomeStack = ()=>{
     return (
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ReviewDetails' component={ReviewDetails} />
        </Stack.Navigator>
    </NavigationContainer>
     )
}
