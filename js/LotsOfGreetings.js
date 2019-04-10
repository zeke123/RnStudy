/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Greeting from '../js/Greeting';

type Props = {};
export default class LotsOfGreetings extends Component<Props>{
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Greeting name ="java" />
                <Greeting name ="React Native" />
            </View>
        );
    }
}