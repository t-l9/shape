/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as firebase from 'firebase';
// import {
//     Container,
//     Content,
//     Header,
//     Form,
//     Input,
//     Item,
//     Button,
//     Label
// } from 'native-base';


import HomeView from './views/home/index';
import WorkoutsView from './views/workouts/index';
// import { createBottomTabNavigator } from 'react-navigation';



var config = {
    apiKey: "AIzaSyABKEUohSD6hfKoLVcwg4gGkxyhXPFT3GM",
    authDomain: "shape-b5eb3.firebaseapp.com",
    databaseURL: "https://shape-b5eb3.firebaseio.com",
    projectId: "shape-b5eb3",
    storageBucket: "shape-b5eb3.appspot.com",
    messagingSenderId: "801849288613"
};

firebase.initializeApp(config);

// export default class App extends Component<Props> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <HomeView />
//                 <WorkoutsView />
//                 <Text style={styles.welcome}>Welcome to React Native!</Text>
//                 <Text style={styles.instructions}>To get started, edit App.js</Text>
//                 <Text style={styles.instructions}>{instructions}</Text>
//             </View>
//         );
//     }
// }

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    signUpUser(email, password) {
        try {
            if(!this.state.password.length < 6) {
                firebase.auth().createUserWithEmailAndPassword(email, password);
            } else {
                alert('please enter more than 6 characters');
                return;
            }
        } catch (error) {
            console.log(error.toString());
        }
    }

    loginUser(email, password) {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
               console.log(user)
            });
        } catch (error) {
            console.log(error.toString());
        }
    }

    render() {
        return (
            <View style={styles.container}>
                
                
                    <Text>
                        Email 
                    </Text>
                    <TextInput 
                        autoCorrect={false}
                        autoCapitalize="none" 
                        onChangeText={(email) => this.setState({email})}
                    />
                
                
                
                    <Text>
                        Password 
                    </Text>
                    <TextInput 
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none" 
                        onChangeText={(password) => this.setState({password})}
                    />
                
                <Button 
                    style={{marginTop: 20}}
                    onPress={() => this.loginUser(this.state.email, this.state.password)}
                    title="Login">
                    Login
                </Button>

                <Button 
                    style={{marginTop: 10}}
                    onPress={() => this.signUpUser(this.state.email, this.state.password)}
                    title="SignUp">
                    Sign Up
                </Button>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10
    }
});