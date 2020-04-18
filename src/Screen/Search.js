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
  Dimensions,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Swiper from 'react-native-web-swiper';

const {height} = Dimensions.get('window');
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  phanmenubar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    backgroundColor: 'white',
  },
  productContainer: {
    width: 170,
    height: 230,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 170,
    height: 180,
  },
  texproduct: {
    fontSize: 20,
  },
  textprice: {
    fontSize: 15,
    color: 'green',
  },
});
const {width} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;
export default class Search extends Component {
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
            <View style={styles.phanmenubar}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.productContainer}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.productImage}
                  />
                  <Text style={styles.texproduct}>Áo Thun</Text>
                  <Text style={styles.textprice}>20$</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.productContainer}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.productImage}
                  />
                  <Text style={styles.texproduct}>Áo Thun</Text>
                  <Text style={styles.textprice}>20$</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.productContainer}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.productImage}
                  />
                  <Text style={styles.texproduct}>Áo Thun</Text>
                  <Text style={styles.textprice}>20$</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.productContainer}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.productImage}
                  />
                  <Text style={styles.texproduct}>Áo Thun</Text>
                  <Text style={styles.textprice}>20$</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.productContainer}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.productImage}
                  />
                  <Text style={styles.texproduct}>Áo Thun</Text>
                  <Text style={styles.textprice}>20$</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.productContainer}>
                  <Image
                    source={require('../Image/ao1.jpg')}
                    style={styles.productImage}
                  />
                  <Text style={styles.texproduct}>Áo Thun</Text>
                  <Text style={styles.textprice}>20$</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
