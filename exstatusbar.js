import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet, Button} from 'react-native';


export default class ExStatusBar extends Component{
    
    constructor(props){
        super(props);

        this.state = {barState:'light-content'};

        this.MudaStatusBar = this.MudaStatusBar.bind(this);
    }
    
    MudaStatusBar(){
        let s = this.state;

        if(s.barState == 'dark-content'){
            s.barState = 'light-content';
        }else{
            s.barState = 'dark-content';
        }
        
        this.setState(s);
    };
    
    render(){
        return(
            <View style={styles.body}>
                <Button
                    title="Muda Cor Status Bar"
                    onPress={()=>this.MudaStatusBar()}
                />
                <StatusBar
                    barStyle={this.state.barState}                                        
                />
            </View>            
        );

    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})