/**
 * Created by zhoujian on 2019/4/9.
 */
import React, {Component} from 'react';

import {Image} from 'react-native';

export default class Bananas extends Component{
    //以常见的基础组件Image为例，在创建一个图片时，可以传入一个名为source的 prop 来指定要显示的图片的地址，以及使用名为style的 prop 来控制其尺寸
    render(){
        let pic = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return(
            <Image source={pic} style={{width:200,height: 200}}/>
        );
    }
}
