/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View} from 'react-native';

export default class ButtonBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="Press me"/>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="Press Me"
                        color="#841584"/>
                </View>

                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="This looks great!"/>
                    <Button
                        onPress={this.onPressButton}
                        title="OK!"
                        color="#841584"/>
                </View>
            </View>
        );
    }

    onPressButton() {
        Alert.alert('You tapped the button!')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
