
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import AxisPad from 'react-native-axis-pad';

import AsyncStorage from '@react-native-community/async-storage';

class Manual extends Component {

    intervalID;
    constructor(props) {
        super(props);
        this.state = {
            token:'',
           
            x: 0,
            y:0,

        }

        this.senddata=this.senddata.bind(this);
    }
    senddata() {
    
        AsyncStorage.getItem('token')
         .then(res => this.state.token=res)
      
        fetch("http://192.168.1.4:9000/robot", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token,
               
            },
            body: JSON.stringify({x: this.state.x, y: this.state.y,mode:0 })

        })
       
    }

    componentDidMount() {


      if(this.state.x!=0 && this.state.y!=0){
       
        AsyncStorage.getItem('token')
        .then(res => this.state.token=res)
   
        
    
        this.intervalID = setInterval(this.senddata.bind(this), 2);
      }
    }
    
      componentWillUnmount() {
        clearInterval(this.intervalID);

      }

   
    render() {
        return (
            <View style={{ alignSelf: "center", padding: 120 }}>
                <AxisPad
                    resetOnRelease={true}
                    autoCenter={true}
                    onValue={({ x, y }) => {
                        this.state.x = x*100;
                        this.state.y =y*100;
                        this.senddata();
                        
                        console.log(x, y);
                    }}>

                </AxisPad>
            </View>
        )
    }

}

export default Manual;












