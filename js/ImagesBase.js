/**
 * Created by zhoujian on 2019/4/9.
 */
import React, {Component} from 'react';
import {View, Image,StyleSheet} from 'react-native';

export default class ImagesBase extends Component<Props> {

    render() {
        // return (
        //     <View style={styles.container}>
        //
        //         {/*加载本地图片*/}
        //         <Image source={require('../image/scenery.jpg')}
        //                style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}/>
        //     </View>
        // );


        return (
            <View style={styles.container}>

                {/*加载网络图片*/}
                <Image source={{uri:'https://facebook.github.io/react/logo-og.png'}}
                       style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },

});
