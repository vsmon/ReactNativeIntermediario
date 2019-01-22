import React, {Component} from 'react';
import {Text, View, AsyncStorage, StyleSheet, Button, TextInput} from 'react-native';


export default class ExAsyncStorage extends Component{

    constructor(props){
        super(props);
        this.state = {valor:'', retorno:''};        

        this.SalvaValor = this.SalvaValor.bind(this);
    };
    componentWillMount(){

    }

    SalvaValor(valor){
        let s = this.state;
        s.valor = valor;
        AsyncStorage.setItem("valor",valor);
    }
    
    RetornaValor(){
        AsyncStorage.getItem('valor').then((value)=>this.setState({retorno:value}));
    }

    render(){
        return(
            <View style={styles.body}>
                <Text>{this.state.retorno}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>this.SalvaValor(value)}
                
                />
                <Button
                    title="Retorna Valor armazenado"
                    onPress={()=>this.RetornaValor()}
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
    },
    input:{
        height:40,
        width:200,
        borderWidth:1
    }
})