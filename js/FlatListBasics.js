/**
 * Created by zhoujian on 2019/4/9.
 */


import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {name: 'Devin'},
                        {name: 'Jackson'},
                        {name: 'James'},
                        {name: 'Joel'},
                        {name: 'John'},
                        {name: 'Jillian'},
                        {name: 'Jimmy'},
                        {name: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})