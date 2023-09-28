import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ChecklistScreen = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    setList([...list, input]);
    setInput('');
  };

  const handleDeleteItem = index => {
    setList(list.filter((_, i) => i !== index));
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Add checklist item" />
      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList data={list} keyExtractor={(item, index) => index.toString()} renderItem={({
      item,
      index
    }) => <View style={styles.listItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteItem(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  deleteText: {
    color: 'red'
  }
});
export default ChecklistScreen;