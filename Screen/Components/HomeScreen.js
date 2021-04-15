// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import AxisPad from 'react-native-axis-pad';

function Item({ item }) {
  return (
     <TouchableOpacity >
    <View style={styles.listItem}>
      <Image source={require('../Image/robot3.png')} style={{ width: 60, height: 60, borderRadius: 30 }} />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>

      </View>

     </View>
      </TouchableOpacity>
  
  );
}
class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "name": "Manual",
          "photo": "../Image/manual.jpg"
        },
        {
          "name": "Autonomous",
          "photo": "auto1.png"
        }]
    }
  }
  render() {


    return (
//      <View style={styles.container}>
//        <FlatList
//          style={{ flex: 1 }}
//          data={this.state.data}
//          renderItem={({ item }) => <Item item={item} />}
//          keyExtractor={item => item.name}
//        />
//      </View>
 <View style={{alignSelf: "center",padding:120}}>
 <AxisPad
     resetOnRelease={true}
     autoCenter={true}
     onValue={({ x, y }) => {
         // values are between -1 and 1
         console.log(x, y);
     }}>

 </AxisPad>
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
    margin: 30,
    padding: 30,
    backgroundColor: "#87cefa",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  }
});
export default HomeScreen;
