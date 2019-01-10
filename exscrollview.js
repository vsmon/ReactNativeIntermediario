import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default class Exscrollview extends Component{
    render(){
        return(
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text>HEADER</Text>
                </View>
                <ScrollView>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                </ScrollView>
                <View style={styles.bottom}>
                    <Text>BOTTOM</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        paddingTop:30
    },
    quadrado1:{
        height:200,        
        backgroundColor:'red'
    },
    quadrado2:{
        height:300,
        backgroundColor:'yellow'
    },
    header:{
        backgroundColor:'blue',
        height:50
    },
    bottom:{
        backgroundColor:'gray',
        height: 50
    }
})