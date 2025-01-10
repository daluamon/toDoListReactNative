import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../components/Header"
import { HeaderLabel } from '../components/HeaderLabel';
import { EmptyList } from '../components/EmptyList';
import { ItemList } from '../components/ItemList';
import uuid from 'react-native-uuid';

type Todo = {
  id: string;
  value: string;
  complete: boolean;
};

export const Home = () => {
  const plus = require('../../assets/plus.png')
  const [todos, setTodos] = useState<Todo[]>([])
  const [todo, setTodo] = useState<string>('')

  const handleAddTodos = () => {
    if (!todo) {
      return Alert.alert('Campo não informado', 'Adicione uma nova tarefa!')
    }
    const newItem = {
      id: uuid.v4(),
      value: todo,
      complete: false
    }
    setTodos((prevTodos) => [...prevTodos, newItem])
    setTodo('')
  }

  const handleRemoveTodo = (id: string) => {
    Alert.alert(
      'Confirmar Deleção',
      'Você tem certeza que deseja excluir este item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => {
            setTodos((prevTodos) => prevTodos.filter(item => item.id !== id))
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  }

  const handleCompleteTodo = (id: string) => {
    const items = todos.map(item => {
      if (item?.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      }
      return item
    })
    setTodos(items)
  }

  return (
    <>
      <Header />

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={'#808080'}
          value={todo}
          onChangeText={(value) => setTodo(value)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTodos}
        >
          <Image
            source={plus}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.base}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 60,
          marginBottom: 30,
          paddingHorizontal: 30,
          width: '100%',
        }}>
          <HeaderLabel
            label="Criadas"
            value={todos.length || 0}
            color="#4EA8DE"
          />
          <HeaderLabel
            label="Concluídas"
            value={todos.reduce((accumulator, current) => {
              if (current?.complete) {
                return accumulator + 1;
              }
              return accumulator;
            }, 0)}
            color="#8284FA"
          />
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <ItemList
              item={item}
              onRemove={handleRemoveTodo}
              onComplete={handleCompleteTodo}
            />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </>
  )
}