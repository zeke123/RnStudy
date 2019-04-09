/**
 * Created by zhoujian on 2019/4/9.
 */


import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';


export default class Scrolled extends Component {

    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:100}}>Scroll</Text>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Image source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:100,height:100}}/>
                <Text style={{fontSize:100}}>Scroll</Text>
            </ScrollView>
        );
    }
}