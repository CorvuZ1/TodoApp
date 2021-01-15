import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import { AddTodo } from './src/addTodo';
import { NavBar } from './src/NavBar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  addTodo = title => {
    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
      <View>
        <NavBar title="Todo App"/>
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo}/>

          <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Todo todo={item} onRemove={removeTodo} onDoneTodo={onDoneTodo}/>
            )}
          />

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingVertical: 20,
    height: "100%",
    marginRight: 3
  }
});
