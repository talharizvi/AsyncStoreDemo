import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [sickness, setSickness] = useState('');
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('data');
      console.log('jsonValue', data);
      setData(data ? JSON.parse(data) : []);
      //return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async value => {
    try {
      console.log('value', value);
      setData(prev => [...prev, value]);
      const prevData = await AsyncStorage.getItem('data');
      const newData = JSON.stringify([...JSON.parse(prevData || '[]'), value]);
      await AsyncStorage.setItem('data', newData);
      navigation.navigate('Detail');
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const clearAsyncData = async () => {
    try {
      await AsyncStorage.removeItem('data');
    } catch (e) {
      // remove error
    }
    console.log('Done.');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Enter Id"
          value={id}
          keyboardType="numeric"
          onChangeText={text => setId(text)}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Enter Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Enter Blood Type"
          value={bloodType}
          onChangeText={text => setBloodType(text)}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Enter Sickness"
          value={sickness}
          onChangeText={text => setSickness(text)}
        />
      </View>

      <View style={{marginVertical: 8}}>
        <Button
          title="Save details"
          onPress={() => {
            storeData({
              id: id,
              name: name,
              sickness: sickness,
              bloodType: bloodType,
            });
          }}
        />
      </View>

      <Button
        title="Clear details"
        onPress={() => {
          clearAsyncData();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default HomeScreen;
