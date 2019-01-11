import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { parse } from 'qs';

export default class Exflatlist extends Component{

    constructor(props){
        super(props);
         this.state = {
            flatData:[
                {key:'1', nome:'Rodrigo', idade:'35'},
                {key:'2', nome:'Rodrigo2', idade:'36'},
                {key:'3', nome:'Rodrigo3', idade:'37'},
                {key:'4', nome:'Rodrigo4', idade:'38'},
                {key:'5', nome:'Rodrigo5', idade:'39'},
                {key:'6', nome:'Rodrigo', idade:'35'},
                {key:'7', nome:'Rodrigo2', idade:'36'},
                {key:'8', nome:'Rodrigo3', idade:'37'},
                {key:'9', nome:'Rodrigo4', idade:'38'},
                {key:'10', nome:'Rodrigo5', idade:'39'},
                {key:'11', nome:'Rodrigo', idade:'35'},
                {key:'12', nome:'Rodrigo2', idade:'36'},
                {key:'13', nome:'Rodrigo3', idade:'37'},
                {key:'14', nome:'Rodrigo4', idade:'38'},
                {key:'15', nome:'Rodrigo5', idade:'39'},
            ],
            pedidos:[],
            ceps:[],
            saldo:[]

        }; 
        this.consultaCep = this.consultaCep.bind(this);
        this.consultaPedidos = this.consultaPedidos.bind(this);
        
    }
    componentWillMount(){        
        this.consultaSaldo('w8p-100', 'PA');
        //this.consultaPedidos('01/10/2019','atacado 25');
        //this.consultaCep('18085305');
    }
    componentDidMount(){
        //console.log(this.state.flatData);
        //console.log(this.state.pedidos);

    }
    async consultaSaldo(pItCodigo,pCodDepos){
        try {
            const url = `http://192.168.0.133/busca.php?it_codigo=${pItCodigo}&cod_depos=${pCodDepos}`;
            const resposta = await fetch(url);
            const json = await resposta.json();
            let s = this.state;        
            s.saldo = json;            
            this.setState(s); 
            console.log(this.state.pedidos)           
        } catch (error) {
            console.log(error)
        }
    }
    async consultaPedidos(pDtImplant,pNomeAbrev){
        try {
            const url = `http://192.168.0.133/busca.php?data_implant=${pDtImplant}&nome_abrev=${pNomeAbrev}`;
            const resposta = await fetch(url);
            const json = await resposta.json();
            let s = this.state;        
            s.pedidos = json; //[{KEY:"1",NRPEDIDO:"10 01souza",NOMEABREV:"ATACADO 25"},{KEY:"2",NRPEDIDO:"teste",NOMEABREV:"ATACADO 25"}]; 
            //console.log(s.pedidos);           
            this.setState(s); 
            console.log(this.state.pedidos)           
        } catch (error) {
            console.log(error)
        }
        
    }
    async consultaCep(pCep){
        const url = `http://viacep.com.br/ws/${pCep}/json/`;
        const resposta = await fetch(url);
        const json = await resposta.json();
        let s = this.state;
        s.ceps = [json];        
        this.setState(s);    
        console.log(s.ceps);
    }
    flatItem(item){        
        return(    
            <View style={{backgroundColor:'gray', padding:30}}>
                <View style={{backgroundColor:'red', padding:10, borderColor:'black', borderWidth:3}}>
                    <Text>{item.CODESTABEL}</Text>
                    <Text>{item.CODDEPOS}</Text>
                    <Text>{item.ITCODIGO}</Text>  
                    <Text>{item.QUANTIDADE}</Text>                  
                </View>                
            </View>            
        );
    }

    render(){
        return(
            <View style={{paddingTop:20}}>
                <FlatList 
                    data={this.state.saldo}                     
                    renderItem={({item})=>this.flatItem(item)}
                    keyExtractor = {(item)=>item.ITCODIGO}
                />
            </View>
        );
    }
}