import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import AxisPad from 'react-native-axis-pad';

import AsyncStorage from '@react-native-community/async-storage';


class Auto extends Component {

    constructor(props) {
        super(props);
        this.state={

        token:'',
        }

        this.sendmode = this.sendmode.bind(this);
    }



    sendmode() {


        AsyncStorage.getItem('token')
            .then(res => this.state.token = res)

        fetch("http://192.168.1.6:9000/robot", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token,

            },
            body: JSON.stringify({ x: this.state.x, y: this.state.y,mode:1 })

        })

    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(res => this.state.token = res)
    }



    render() {

        return (
            <TouchableOpacity onPress={this.sendmode} >
                <View >

                    <Image source={require('../Image/robot3.png')} style={{ width: 200, height: 200, borderRadius: 30 }} />

                </View>
            </TouchableOpacity>


        )



    }

}

export default Auto;

