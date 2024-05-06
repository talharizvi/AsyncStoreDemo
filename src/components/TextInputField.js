
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const TextInputField = ()=>{
    return(<View style={{borderWidth: 1, borderColor:'grey', marginHorizontal: 16}}>
    <TextInput placeholder='Enter Id' value={id} onChangeText={(text)=>setId(id)}/>
</View>)
}

export default TextInputField