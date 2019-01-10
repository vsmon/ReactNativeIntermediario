import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exscrollview from './exscrollview';
import Exflatlist from './exflatlist';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Exscrollview/>  */}
        <Exflatlist/>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
