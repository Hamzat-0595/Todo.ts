import { createSlice } from "@reduxjs/toolkit";
import { todoState } from "src/types/ITodos";
import { addTodo, changeTodo, deleteTodo, getTodos } from "./todoAction";

const initialState: todoState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });

    builder.addCase(addTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.unshift(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });

    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      state.isLoading = false;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });

    builder.addCase(changeTodo.pending, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.meta.arg._id) {
          return { ...todo, completed: action.meta.arg.completed };
        }
        return todo;
      });
      state.isLoading = true;
    });
    builder.addCase(changeTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.meta.arg._id) {
          return { ...todo, completed: !action.meta.arg.completed };
        }
        return todo;
      });
      state.isLoading = false;
      state.error = action.error.message ?? "";
    });
  },
});

export default todoSlice.reducer;
