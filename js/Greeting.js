/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Text>Hello {this.props.name}</Text>
            </View>
        );

    }
}
