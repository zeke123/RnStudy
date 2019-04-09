/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

export default class FlexDimensionsBasics extends Component {

    render() {
        return (
            //flexDirection: 决定布局的方向
            // row 水平方向  column：竖直方向

            //justifyContent:决定其子元素沿着主轴的排列方式
            //flex-start、center、flex-end、space-around、space-between以及space-evenly

            //alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
            //flex-start、center、flex-end以及stretch
            <View style={{flex: 1,flexDirection:'column',justifyContent:'space-evenly',alignItems:'stretch'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}