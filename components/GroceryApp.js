import React, {Component} from 'react';
import {View, StyleSheet, Text, ListView} from 'react-native';
import * as firebase from 'firebase';
import StatusBar from './StatusBar';
import ActionButton from './ActionButton';
import ListItem from './ListItem';

const firebaseConfig = {
    apiKey:'',
    authDomain:'',
    databaseURL:'',
    storageBucket:''
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const styles = require('./styles/styles.js');

export default class GroceryApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2)=>row1 !== row2,
            })
        };
    }

    _renderItem(item){
        return(
            <ListItem item = {item} onPress = {()=>{}} />
        );
    }
    render(){
        return (
                 <View style = {styles.container}>
                     <StatusBar title = "Grocery List" />
                     <ListView 
                        dataSource= {this.state.dataSource}
                        renderRow = {this._renderItem.bind(this)}
                        style = {styles.listview}
                        />
                        <ActionButton title = "Add" onPress = {()=>{}} />
                 </View>
        )
    }

    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows([{title:'Pizza'}])
        });
    }
}

