import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setList([...list, { key: Math.random().toString(), value: item }]);
      setItem('');
    }
  };

  const deleteItem = (key) => {
    setList(list.filter((i) => i.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>

      <Card style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter notes"
            value={item}
            onChangeText={setItem}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={addItem}>
                <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Card>

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.value}</Text>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => deleteItem(item.key)}
            >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#198450'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#E5F6DF',
    marginRight: 10,
    color: '#006D2C'
  },
  buttonContainer: {
    width: 70,
  },
    addButton: {
    backgroundColor: '#C7E9C0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#198450',           
    fontWeight: 'bold',
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
  },
  listText: {
    fontSize: 16,
    flex: 1,
    color: '#198450',
  },
  doneButton: {
    backgroundColor: '#90EE90',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  doneText: {
    color: '#198450',
    fontWeight: 'bold',
  },
});
