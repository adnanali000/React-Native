import React from 'react';
import {View,Text,Button,StyleSheet,TextInput,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from '../style/global'
import {Formik, formik} from 'formik';

export default function ReviewForm(){
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:'',body:'',rating:''}}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
            
            {(formikProps)=>(
                <View>
                     <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={formikProps.handleChange('title')}
                        value={formikProps.values.title}
                    />
                    <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Review body'
                        onChangeText={formikProps.handleChange('body')}
                        value={formikProps.values.body}
                    />
                    <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Rating 1-5'
                        onChangeText={formikProps.handleChange('rating')}
                        value={formikProps.values.rating}
                        keyboardType='numeric'
                    />

                <View style={globalStyles.buttton}>
                    <Button title='submit' color='red' onPress={formikProps.handleSubmit} />
                </View>
                
                </View>
            )}

            </Formik>

        </View>
    )
}