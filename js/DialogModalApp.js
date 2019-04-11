/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    Button
} from 'react-native';

import DialogModal from '../js/DialogModal'

export default class DialogModalApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDialog: false,
        };
        this.clearLog = this.clearLog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <DialogModal
                    content='确定删除个人信息吗？'
                    confirm={this.clearLog}
                    cancel={this.closeDialog}
                    visible={this.state.isShowDialog}/>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => {
                            this.setState({isShowDialog: true});
                        }}
                        title="点击我"
                        color="#841584"/>
                </View>
            </View>
        );
    }

    // 确认
    clearLog() {
        this.setState({isShowDialog: false});
    }

    //取消
    closeDialog() {
        this.setState({isShowDialog: false});
    }
}

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        backgroundColor: 'rgba(242, 242, 242, 0.5)',
    },
    buttonContainer: {
        margin: 20
    },
});