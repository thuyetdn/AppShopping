import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  menubar: {
    flex: 1,
    width: 50,
    backgroundColor: '#B8B8B8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbar: {
    flex: 0.65,
  },
  mainbar: {
    flex: 8.35,
  },
  textinputcontainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(238,237,237)',
  },
  textinput: {
    height: 45,
    width: 280,
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  carticon: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  phan1menubar: {
    flex: 1,
  },
  phan2menubar: {
    flex: 2,
    backgroundColor: 'green',
  },
});
export default class SignUp extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <StatusBar hidden={true} />
            <View style={styles.menubar}>
              <View style={{justifyContent: 'flex-start'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.toggleDrawer()}>
                  <Image
                    source={require('../Image/menu.png')}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <View style={{justifyContent: 'flex-end'}}>
                  <View style={styles.carticon}>
                    <Text>0</Text>
                  </View>
                  <Image
                    source={require('../Image/shopping-bag.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchbar}>
            <View style={styles.textinputcontainer}>
              <TextInput style={styles.textinput} placeholder="search" />
            </View>
          </View>
          <View style={styles.mainbar}>
            <View style={styles.phan1menubar}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Image
                  source={require('../Image/online-shopping-banner-ladies-goods-icons-cartoon-sketch-271573.jpg')}
                  style={{width: 416, height: 200}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.phan2menubar} />
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
