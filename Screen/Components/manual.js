
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import AxisPad from 'react-native-axis-pad';

import AsyncStorage from '@react-native-community/async-storage';

class Manual extends Component {


    constructor(props) {
        super(props);
        this.state = {
            token:'',
            mode: 0,
            x: Number,
            y: Number

        }
   

    }


    senddata() {
        AsyncStorage.getItem('token')
        .then(res => this.state.token=res)
      
        fetch("http://192.168.1.2:9000/robot", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token,
               
            },
            body: JSON.stringify({ mode: 0, x: this.state.x, y: this.state.y })

        })
       


    }
   componentDidMount() {
        this.senddata();

        setInterval(this.senddata.bind(this), 5000);


    }
//     componentWillUnmount() {
//         clearInterval(this.intervalID);



//     }
   render() {

        return (

            <View style={{ alignSelf: "center", padding: 120 }}>
                <AxisPad
                    resetOnRelease={true}
                    autoCenter={true}
                    onValue={({ x, y }) => {
                        this.state.x = x;
                        this.state.y = y;
                        this.senddata();
                        console.log(x, y);
                    }}>

                </AxisPad>
            </View>


        )
    }

}

export default Manual;












