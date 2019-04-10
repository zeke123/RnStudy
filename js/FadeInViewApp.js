/**
 * Created by zhoujian on 2019/4/10.
 */

import React from 'react';
import {Animated, Text, View} from 'react-native';
import FadeInView from '../js/FadeInView'

export default class FadeInViewApp extends React.Component {

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <FadeInView style={{width:200,height:60,backgroundColor:'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        );
    }
}