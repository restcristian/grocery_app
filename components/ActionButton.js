import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
const styles = require('./styles/styles');
const constants = styles.constants;

export default class ActionButton extends Component{
    render(){
        return(
            <View style= {styles.action}>
                <TouchableHighlight 
                    underlayColor = {constants.actionColor}
                    onPress = {this.props.onPress}>
                    <Text style = {styles.actionText}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}