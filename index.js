import {AppRegistry, View, Text, StatusBar,Image,StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './src/Screen/Main';
import Login from './src/Screen/Login';
import SignUp from './src/Screen/SignUp';
const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
      container:{
        flex:1,
        flexDirection :"column",
      },
      iconmenu:{
        flex : 2,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
      },
      profile:{
        flex :8,
        backgroundColor:"yellow"
      },

})
function CustomDrawer (props){
  return(
    <View style={styles.container}>
      <View style={styles.iconmenu}>
      <Image
                source={require('./src/Image/user.png')}
                style={{width: 80, height: 80}}
              />
      </View>
      <View style={styles.profile}>
        <Text>asfdasf</Text>
      </View>
    </View>
  )
}
export default class MyApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="SignUp" drawerContent={props=>CustomDrawer(props)}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="SignUp" component={SignUp} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
