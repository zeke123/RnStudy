/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Blink from '../js/Blink'


export default class BlinkApp extends Component {

    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    }
}