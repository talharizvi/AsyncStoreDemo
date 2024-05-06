import * as React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../components/ListItem';

const DetailsScreen = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const dataValue = await AsyncStorage.getItem('data');
      console.log('dataValue', dataValue);
      setData(JSON.parse(dataValue));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    console.log('inside useeffect')
    getData();
  }, []);

  console.log('detail screen');
  return (
    <View style={{flex: 1}}>
      <Text>Details Screen</Text>
      {data?.map(item => (
        <ListItem
          key={item?.id}
          id={item?.id}
          name={item?.name}
          bloodType={item?.bloodType}
          sickness={item?.sickness}
        />
      ))}
    </View>
  );
};

export default DetailsScreen;
