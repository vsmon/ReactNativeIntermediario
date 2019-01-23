import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createTabNavigator,createSwitchNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import ExAsyncStorage from './exasynstorage';
import ExFlatList     from './exflatlist';
import ExModal        from './exmodal';
import ExScrollView   from './exscrollview';
import ExSlider       from './exslider';
import ExStatusBar    from './exstatusbar';
import Exscrollview from './exscrollview';

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
          <Button
            title='Exemplo AsyncStorage'
            onPress={()=>this.props.navigation.navigate('TelaAsyncStorage')}
          />
          <Button
            title='Exemplo FlatList'
            onPress={()=>this.props.navigation.navigate('TelaFlatList')}
          />
          <Button
            title='Exemplo Modal'
            onPress={()=>this.props.navigation.navigate('TelaModal',{nome:'Rodrigo'})}
          />
          <Button
            title='Exemplo ScrollView'
            onPress={()=>this.props.navigation.navigate('TelaScrollView')}
          />
          <Button
            title='Exemplo Slider'
            onPress={()=>this.props.navigation.navigate('TelaSlider')}
          />
          <Button
            title='Exemplo StatusBar'
            onPress={()=>this.props.navigation.navigate('TelaStatusBar')}
          />       
      </View>
    );
  }
}

class Teste extends Component{
  render(){
    return(
      <Text>TESTE</Text>
    );
  }
}

const navegador = createStackNavigator({
    Home:{screen:App},
    TelaAsyncStorage:{screen:ExAsyncStorage},
    TelaFlatList:{screen:ExFlatList},
    TelaModal:{screen:ExModal},
    TelaScrollView:{screen:Exscrollview},
    TelaSlider:{screen:ExSlider},
    TelaStatusBar:{screen:ExStatusBar}    
});
const home = createAppContainer(navegador);
export default home;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    padding:20
  },
});
