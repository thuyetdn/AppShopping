import {
  AppRegistry,
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/Screen/Main';
import Login from './src/Screen/Login';
import SignUp from './src/Screen/SignUp';
import Contact from './src/Screen/Contact';
import Search from './src/Screen/Search';
import Product from './src/Screen/Product';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  iconmenu: {
    flex: 2,
    backgroundColor: '#D7D8D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    flex: 8,
  },
});
function CustomDrawer(props, isLogin) {
  const LogoutJ = (
    <View style={styles.profile}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Image
            source={require('./src/Image/home-run.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{fontSize: 20}}> Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Image
            source={require('./src/Image/IconLogin.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{fontSize: 20}}> Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const LoginJ = (
    <View style={styles.profile}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Image
            source={require('./src/Image/home-run.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{fontSize: 20}}> Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Image
            source={require('./src/Image/IconLogout.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={{fontSize: 20}}> Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const mainJ = isLogin ?  LoginJ : LogoutJ;
  return (
    <View style={styles.container}>
      <View style={styles.iconmenu}>
        <Image
          source={require('./src/Image/user.png')}
          style={{width: 80, height: 80}}
        />
      </View>
      {mainJ}
    </View>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: focused => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused ? require('./src/Image/home-run.png') : '';
          } else if (route.name == 'Search') {
            iconName = focused ? require('./src/Image/search.png') : '';
          } else if (route.name == 'Contact') {
            iconName = focused ? require('./src/Image/contacts.png') : '';
          }
          return <Image source={iconName} style={{width: 30, height: 30}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        activeBackgroundColor:'#D7D8D9'
      }}>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={props => CustomDrawer(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogin: false};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
