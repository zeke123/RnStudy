/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {AppRegistry, View,StyleSheet} from 'react-native';

export default class FixedDimensionsBasics extends Component {

    render() {
        return (
            <View>
                <View style={styles.viewOneStyle}/>
                <View style={styles.viewTwoStyle}/>
                <View style={styles.viewThreeStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewOneStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    viewTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    viewThreeStyle: {
        width: 150,
        height: 150,
        backgroundColor: 'steelblue'
    },
});
