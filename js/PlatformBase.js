/**
 * Created by zhoujian on 2019/4/10.
 */
import React, {Component} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';

export default class BlinkApp extends Component {


    componentDidMount() {
        //检测android版本
        if (Platform.Version === 25) {
            console.log("Running on android!");
        }


        //检测ios版本
        const versionIOS = parseInt(Platform.Version, 10)
        if (versionIOS <= 9) {
            console.log("Running on ios!");
        }
    }
}


const styles = StyleSheet.create({

    container: {
        //在ios上高度是200，在android设备上是100
        height: Platform.OS === "ios" ? 200 : 100,

        //iOS 上背景色为红色，而 android 为蓝色
        ...Platform.select({
            ios: {
                backgroundColor: "red"
            },
            android: {
                backgroundColor: "blue"
            }
        })
    },
});