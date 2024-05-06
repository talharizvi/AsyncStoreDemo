import * as React from 'react';
import {View, Text} from 'react-native';

const ListItem = ({id, name, bloodType, sickness}) => {
  return (
    <View style={{margin:8}}>
      <Text>Id: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>BloodType: {bloodType}</Text>
      <Text>Sickness: {sickness}</Text>
    </View>
  );
};

export default ListItem;
