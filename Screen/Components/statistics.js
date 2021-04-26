// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


class Statistics extends Component {

  intervalID;
  constructor(props) {

    super(props);
    this.state = {
      moves: [
        { x: Number, y: Number }
      ], isclicked: false, alerts: String, isalert: false,
      // HeadTable: ['X', 'Y'],
    

    };
    

  }
  componentDidMount() {
    this.getData();

    console.log('hello friend');

    this.intervalID = setInterval(this.getData.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);



  }

  getData = () => {
    // do something to fetch data from a remote API.

    fetch("http://192.168.1.6:9000/robot", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {

        return response.json();
      })
      .then(move => {

        console.log(move);

        this.setState({ moves: move });

      });
  }


 


  render() {

    const state = this.state;
    return (
      <View >
      
      </View>
    )
  
  };

}


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});
  export default Statistics;



  // class Statistics extends Component {

  //   intervalID;
  //   constructor(props) {
  
  //     super(props);
  //     this.state = {
  //       moves: [
  //         { x: Number, y: Number }
  //       ], isclicked: false, alerts: String, isalert: false,
  //       HeadTable: ['X', 'Y'],
  
  
  //     };
  
  
  //   }
  //   componentDidMount() {
  //     this.getData();
  
  //     console.log('hello friend');
  
  //     this.intervalID = setInterval(this.getData.bind(this), 5000);
  //   }
  
  //   componentWillUnmount() {
  //     clearInterval(this.intervalID);
  
  
  
  //   }
  
  //   getData = () => {
  //     // do something to fetch data from a remote API.
  
  //     fetch("http://192.168.1.6:9000/robot", {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(function (response) {
  
  //         return response.json();
  //       })
  //       .then(move => {
  
  //         console.log(move);
  
  //         this.setState({ moves: move });
  
  //       });
  //   }
  
  
  //   render() {
  
  //     if (this.state.moves != null) {
  
  //       const state = this.state;
  //       return (
  //         <View style={styles.container}>
  //           <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
  //             <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
  //             <Rows data={state.moves} textStyle={styles.TableText} />
  //           </Table>
  //         </View>
  //       )
  //     }
  //     else {
  
  //       return (
  //         <View>ali</View>
  
  
  //       )
  
  //     }
  
  //   }
  // }
  
  
  //   const styles = StyleSheet.create({
  //     container: { 
  //       flex: 1,
  //       padding: 18,
  //       paddingTop: 35,
  //       backgroundColor: '#ffffff' 
  //     },
  //     HeadStyle: { 
  //       height: 50,
  //       alignContent: "center",
  //       backgroundColor: '#ffe0f0'
  //     },
  //     TableText: { 
  //       margin: 10
  //     }
  //   });

  //   export default Statistics;