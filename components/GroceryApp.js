import React, {Component} from 'react';
import {View, StyleSheet, Text, ListView,Alert} from 'react-native';
import * as firebase from 'firebase';
import StatusBar from './StatusBar';
import ActionButton from './ActionButton';
import ListItem from './ListItem';

const firebaseConfig = {
    apiKey:' AIzaSyD2nNpD1dbvnyw_z9G0nj354MAibqqRM04',
    authDomain:'grocery-607a9.firebaseapp.com',
    databaseURL:'https://grocery-607a9.firebaseio.com/',
    // storageBucket:'grocery-607a9.appspot.com',
    // messagingSenderId: '344198934115'
};

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

        this.itemsRef = firebaseApp.database().ref('items');
    }

    _addItem(){
        Alert.alert(
            'Add a New Item',
            null,
            [
                {
                    text:'OK', 
                    onPress:(text)=>{
                        console.log('Ok Pressed');
                        this.itemsRef.push({title:text});
                      },
                },
                {
                    text:'Cancel',
                    onPress:()=>console.log('Cancel Pressed'),
                    style:'cancel'
                }
            ],
            {cancelable:false}
        )
    }

    listenForItems(itemsRef){

        console.log('onListenForItems',itemsRef);
        // itemsRef.on('value',(snap)=>{
        //     let items = [];
        //     console.log('items',items);
        //     snap.forEach((child)=>{
                
        //         items.push({
        //             title:child.val().title,
        //             _key:child.key
        //         });
        //     });

        //     this.setState({
        //         dataSource:this.state.dataSource.cloneWithRows(items)
        //     });
          
        // });

        itemsRef.once('value')
            .then((snapshot)=>{
                let items = [];
                snapshot.forEach((child)=>{
                    items.push({
                        key:child.key,
                        title:child.val().title
                    });

                });
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(items)
                });
                console.log('items',items);
            });
    }
    _renderItem(item){
        const onPress = ()=>{
            Alert.alert(
                'Complete Item',
                null,
                [
                    {
                        text:'Complete',
                        onPress:(text)=>this.itemsRef.child(item._key).remove()
                    },
                    {
                        text:'Cancel',
                        onPress:(text)=>console.log('cancel')
                    }
                ],
                'default'
            );
        };
        return(
            <ListItem item = {item} onPress = {onPress} />
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
                        <ActionButton title = "Add" onPress = {this._addItem.bind(this)} />
                 </View>
        )
    }

    componentDidMount(){
        this.listenForItems(this.itemsRef);
        
    }
}

