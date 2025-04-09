import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const addTodo = () => {
    navigation.navigate("AddTask");
  };

  const removeTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  return (
    <View style={styles.container}>
      <Text>To Do's</Text>

      <Button label="Add ToDo" onPress={addTodo} />

      <FlatList
        data={todos}
        renderItem={(todo, index) => (
          <Pressable onPress={() => removeTodo(todo.item)}>
            <Text>{todo.item}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
