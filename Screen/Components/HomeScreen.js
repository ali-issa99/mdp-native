// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import AxisPad from 'react-native-axis-pad';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state={
      token:"",
      auto:false
    }

    this.gomanual = this.gomanual.bind(this)
    this.sendmode = this.sendmode.bind(this)
  }


  Item({ item }) {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.listItem}>
          <Image source={require('../Image/robot3.png')} style={{ width: 60, height: 60, borderRadius: 30 }} />
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>

          </View>

        </View>
      </TouchableOpacity>

    );
  }


  gomanual() {

    this.props.navigation.navigate("Manual");
  }



  sendmode() {
    let mode;

    if(this.state.auto){
      mode=0
      this.state.auto=false
    }
    else{
      this.state.auto=true,
      mode=1
    }
       
    AsyncStorage.getItem('token')
      .then(res => this.state.token = res)

    fetch("http://192.168.1.4:9000/robot", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.token,

      },
      body: JSON.stringify({ x: 0, y:0, mode: mode })

    })
    

    if(this.state.auto==true) alert("Auto mode started"); else alert("Auto mode ended")

  }


  

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(res => this.state.token = res)
  }


  render() {


    return (
      <View style={styles.container}>


        <TouchableOpacity onPress={this.gomanual}>
          <View style={styles.listItem} >
            <Image source={require('../Image/robot3.png')} style={{ width: 60, height: 60, borderRadius: 30,alignSelf: "center" }} />
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>Manual</Text>

            </View>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.sendmode} >
          <View style={styles.listItem}>
            <Image source={require('../Image/robot3.png')} style={{ width: 60, height: 60, borderRadius: 30,alignSelf: "center", }} />
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>Autonomous</Text>

            </View>

          </View>
        </TouchableOpacity>
      </View>

    );


  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  },
  listItem: {
    margin: 40,
    padding: 30,
    backgroundColor: "#87cefa",
    width: "80%",
    height:"80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  }
});
export default HomeScreen;
