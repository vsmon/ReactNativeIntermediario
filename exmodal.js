import React, {Component} from 'react';
import { Modal,View, Text, Button } from 'react-native';


export default class ExModal extends Component{

    constructor(props){
        super(props);
        this.state = {modalVisible:false}
    }
    render(){
        return(
            <View>
                <Modal 
                    animationType='slide'
                    visible={this.state.modalVisible}
                    onRequestClose={()=>alert('Modal foi fechado!')}                
                >
                    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                        <Text>Modal</Text>
                        <Button
                            title='Fechar Modal'
                            onPress={()=>this.setState({modalVisible:false})}
                        />
                    </View>
                </Modal>
                <Button 
                    title='Mostra Modal' 
                    onPress={()=>this.setState({modalVisible:true})}
                    />
            </View>
        );
    }
}