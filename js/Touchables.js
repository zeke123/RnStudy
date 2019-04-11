/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {
    Alert,
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View
} from 'react-native';


export default class c extends Component {
    //TouchableHighlight:此组件的背景会在用户手指按下时变暗

    //TouchableOpacity:会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色。

    //TouchableNativeFeedback :在 Android 上,用户手指按下时形成类似墨水涟漪的视觉效果

    //TouchableWithoutFeedback:不显示任何视觉反馈


    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight onPress={this.onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>


                <TouchableOpacity onPress={this.onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>


                <TouchableNativeFeedback
                    onPress={this.onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>


                <TouchableWithoutFeedback
                    onPress={this.onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableHighlight onPress={this._onPressButton} onLongPress={this.onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>


            </View>

        );
    }

    onPressButton() {
        //Alert.alert('You tapped the button!')
    }

    onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})
