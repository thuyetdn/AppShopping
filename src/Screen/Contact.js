import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
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
    flex: 0.7,
  },
  mainbar: {
    flex: 8.3,
    backgroundColor: '#E1E1E1',
  },
  textinputcontainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgb(238,237,237)',
  },
  textinput: {
    backgroundColor: 'white',
    height: 45,
    width: 390,
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
    height: 270,
    width: 390,
    backgroundColor: 'white',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  map: {
    height: 270,
    width: 390,
  },
  phan2menubar: {
    height: 60,
    width: 390,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  phan3menubar: {
    height: 45,
    width: 370,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 20,
    color: 'blue',
  },
});

export default class Product extends Component {
  render() {
    return (
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
              onPress={() => this.props.navigation.navigate('Cart')}>
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
          <ScrollView>
            <View style={styles.phan1menubar}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 21.038236,
                  longitude: 105.782715,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.004,
                }}
              />
            </View>
            <View style={styles.phan2menubar}>
              <View style={styles.phan3menubar}>
                <Image
                  source={require('../Image/map.png')}
                  style={{width: 45, height: 45}}
                />
                <Text style={styles.textstyle}>144 Xuân Thuỷ , Cầu Giấy</Text>
              </View>
            </View>
            <View style={styles.phan2menubar}>
              <View style={styles.phan3menubar}>
                <Image
                  source={require('../Image/phone.png')}
                  style={{width: 45, height: 45}}
                />
                <Text style={styles.textstyle}>+84378526528</Text>
              </View>
            </View>
            <View style={styles.phan2menubar}>
              <View style={styles.phan3menubar}>
                <Image
                  source={require('../Image/mail.png')}
                  style={{width: 45, height: 45}}
                />
                <Text style={styles.textstyle}>thuyet1231999@gmail.com</Text>
              </View>
            </View>
            <View style={styles.phan2menubar}>
              <View style={styles.phan3menubar}>
                <Image
                  source={require('../Image/plane.png')}
                  style={{width: 45, height: 45}}
                />
                <Text style={styles.textstyle}>Đỗ Ngọc Thuyết</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
