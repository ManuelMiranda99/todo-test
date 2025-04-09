import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-slice";
import Button from "../components/Button";

export default function AddTaskScreen({ navigation }) {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    navigation.goBack();
  };

  const handleSetTodo = (text) => {
    setTodo(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={todo}
        onChangeText={handleSetTodo}
        placeholder="ToDo..."
      />

      <Button label="Add ToDo" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 4,
  },
});
