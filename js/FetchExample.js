/**
 * Created by zhoujian on 2019/4/9.
 */

import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Text, View, Alert} from 'react-native';


export default class FetchExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, function () {

            });

        }).catch((error) => {
            console.error(error);
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            );
        }
    }
}


