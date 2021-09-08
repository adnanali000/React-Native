import React from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import Card from '../shared/Card';
import { globalStyles,images } from '../style/global';


export default function ReviewDetails({route:{params}}) {

    const {title} = params;
    const {rating} = params;
    const {body} = params;
  
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text style={globalStyles.titleText}>{body}</Text>
            <Text style={globalStyles.titleText}>{rating}</Text>
            <View style={styles.rating}>
                <Text>GameZone Rating:</Text>
                <Image source={images.ratings[rating]} />
            </View>
            </Card>
            
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})