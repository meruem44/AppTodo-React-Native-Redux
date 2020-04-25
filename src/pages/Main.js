import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/MaterialIcons';

import TodoList from '../store/ListTodo';
import Item from '../components/item';

import styles from './styles';

export default function Main() {

  const [item, setItem] = useState('');
  const [state, addItem, checkItem, removeItem] = TodoList();

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#c31432', '#240b36']}>

      <View style={styles.header}>

        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#eeee"
          onChangeText={setItem}
          value={item}
          placeholder="Adicionar tarefa"
          style={styles.input} />

        <TouchableOpacity
          onPress={() => {
            addItem(item);
            setItem('');
          }}
          style={styles.button}>
          <Icon
            color="#fff"
            name="add-circle"
            size={40} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={state}
        keyExtractor={item.id}
        renderItem={({ item }) => (
          <Item
            handleCheck={checkItem}
            handleDelete={removeItem}
            id={item.id}
            title={item.title}
            check={item.check}
          />
        )}
      />

    </LinearGradient>
  );
}
