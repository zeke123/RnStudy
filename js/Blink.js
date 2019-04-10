/**
 * Created by zhoujian on 2019/4/9.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Blink extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                    return {isShowingText: !previousState.isShowingText};
                }
            );
        }, 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null
        } else {
            return (
                <Text>{this.props.text}</Text>
            );
        }
    }
}