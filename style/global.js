import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        padding:20,
        flex:1
    },
    titleText:{
        fontSize:18,
        fontFamily:'nunito-bold',
        color:'grey'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
        fontFamily:'nunito-regular'

    },
    buttton:{
        borderWidth:1,
        fontSize:16,
        borderColor:'red',
        margin:16,
    },
    input:{
        borderWidth:1,
        padding:10,
        margin:10,
        fontSize:18,
        borderColor:'grey',
        borderRadius:5,
        color:'grey',
    },
    error:{
        color:'red',
        fontSize:10,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:10
    }

})

export const  images = {
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}