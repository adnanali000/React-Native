import React from 'react';
import {View,Text,Button} from 'react-native';
import { globalStyles } from '../style/global'


export default function ReviewDetails({route:{params}}) {

    const {title} = params;
    const {rating} = params;
    const {body} = params;
  
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text style={globalStyles.titleText}>{body}</Text>
            <Text style={globalStyles.titleText}>{rating}</Text>

            
        </View>
    )
}

