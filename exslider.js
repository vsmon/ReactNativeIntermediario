import React, {Component} from 'react';
import {Slider, View, Text, StyleSheet} from 'react-native';

export default class ExSlider extends Component{

    constructor(props){
        super(props);
        this.state = {r:255,g:0,b:0};
    }

    render(){
        return(
            <View style={styles.principal}>
                <Slider style={{padding:20}}
                    minimumValue={0} 
                    maximumValue={255} 
                    value={this.state.r} 
                    onValueChange={(valor)=>this.setState({r:valor})}
                />
                <Text>RED: {this.state.r}</Text>
                <Slider style={{padding:20}}
                    minimumValue={0} 
                    maximumValue={255} 
                    value={this.state.g} 
                    onValueChange={(valor)=>this.setState({g:valor})}
                />
                <Text>GREEN: {this.state.g}</Text>
                <Slider style={{padding:20}}
                    minimumValue={0} 
                    maximumValue={255} 
                    value={this.state.b} 
                    onValueChange={(valor)=>this.setState({b:valor})}
                />
                <Text>BLUE: {this.state.b}</Text>
                <View style={{justifyContent:'center',alignItems:'center',height:300,width:300,backgroundColor:`rgb(${this.state.r},${this.state.g},${this.state.b})`}}>
                    <Text>RGB</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    quadrado:{
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:`rgb(${this.props.r},${this.props.g},${this.props.b})`,
        //backgroundColor:'red',
        height:100,
        width:100
    },
    principal:{
        flex:1,
        padding:30,
    }
})