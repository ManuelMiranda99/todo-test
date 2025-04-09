import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: ["TEST", "STUFF"],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo !== action.payload
      );

      state.todos = filteredTodos;
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
