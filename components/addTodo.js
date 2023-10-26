import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder='Add todo...'
        onChangeText={changeHandler}
        style={styles.text}
      />
      <Button onPress={() => submitHandler(text)} title='Add' color='coral' />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
});
