import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const datalist = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];
const numColumns = 2;
const width = Dimensions.get('window').width;
function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
export default class SignUp extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={datalist}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 1,
    height: width / numColumns,
  },
  title: {
    fontSize: 32,
  },
});
