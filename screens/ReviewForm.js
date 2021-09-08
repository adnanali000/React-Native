import React from 'react';
import {View,Text,Button,StyleSheet,TextInput,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from '../style/global'
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/Button';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5','Rating must be a number 1-5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:'',body:'',rating:''}}
                validationSchema={reviewSchema}
                onSubmit={(values,actions)=>{
                    actions.resetForm();
                    addReview(values);
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
                        onBlur={formikProps.handleBlur('title')}
                    />
                    <Text style={globalStyles.error}>{formikProps.touched.title && formikProps.errors.title}</Text>
                    <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Review body'
                        onChangeText={formikProps.handleChange('body')}
                        value={formikProps.values.body}
                        onBlur={formikProps.handleBlur('body')}
                    /> 
                    <Text style={globalStyles.error}>{formikProps.touched.body && formikProps.errors.body}</Text>

                    <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Rating 1-5'
                        onChangeText={formikProps.handleChange('rating')}
                        value={formikProps.values.rating}
                        keyboardType='numeric'
                        onBlur={formikProps.handleBlur('rating')}

                    />
                    <Text style={globalStyles.error}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
                    
                    <FlatButton text="submit" onPress={formikProps.handleSubmit} />

                </View>
            )}

            </Formik>

        </View>
    )
}