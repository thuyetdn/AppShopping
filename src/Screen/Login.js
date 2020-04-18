import React, {Component} from 'react';
import {
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  View,
  Button,
  Keyboard,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  hinhnen: {
    width: 430,
    height: 700,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  up: {
    flex: 3,
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textinputcontainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(238,237,237)',
  },
  textinput: {
    height: 40,
    width: 280,
  },
  loginbutton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(112,112,112)',
  },
  loginbuttontitle: {
    fontSize: 18,
    color: 'white',
  },
  line: {
    height: 2,
    flex: 2,
    backgroundColor: 'rgb(112,112,112)',
  },
  textOr: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
  devider: {
    flexDirection: 'row',
    height: 40,
    width: 292,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Login extends Component {
  render() {
    const Divider = props => {
      return (
        <View {...props}>
          <Text style={styles.line} />
          <Text style={styles.textOr}>OR</Text>
          <Text style={styles.line} />
        </View>
      );
    };
    return (
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../Image/Login.png')}
          style={styles.hinhnen}>
          <StatusBar hidden={true} />
          <View style={styles.container}>
            <View style={styles.up} />
            <View style={styles.down}>
              <View style={styles.textinputcontainer}>
                <TextInput
                  style={styles.textinput}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  placeholder="Enter your Email"
                />
              </View>
              <View style={styles.textinputcontainer}>
                <TextInput
                  style={styles.textinput}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                style={styles.loginbutton}
                onPress={() => this.props.navigation.navigate('Main')}>
                <Text style={styles.loginbuttontitle}>Login</Text>
              </TouchableOpacity>
              <Divider style={styles.devider} />
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 45,
                  borderRadius: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#2B4D93',
                }}
                onPress={() => this.props.navigation.navigate('Main')}>
                <Image
                  source={require('../Image/IconFaceBook.png')}
                  style={{width: 45, height: 45}}
                />
                <Text style={styles.loginbuttontitle}>
                  {' '}
                  Login with Facebook
                </Text>
              </TouchableOpacity>
              <Divider style={styles.devider} />
              <TouchableOpacity
                style={styles.loginbutton}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.loginbuttontitle}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableNativeFeedback>
    );
  }
}
