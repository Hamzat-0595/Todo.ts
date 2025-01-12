import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodosUrl, deleteTodosUrl, getTodosUrl } from "src/api/constants";
import { ICreatePost, ITodo } from "src/types/ITodos";

export const getTodos = createAsyncThunk("user/upload", async function () {
  const res = await fetch(getTodosUrl());
  return await res.json();
});

export const addTodo = createAsyncThunk<ITodo, ICreatePost>(
  "users/create",
  async (arg) => {
    const response = await fetch(addTodosUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "appLication/json",
      },
      body: JSON.stringify({
        title: arg.title,
      }),
    });
    return await response.json();
  }
);
export const deleteTodo = createAsyncThunk<string, Pick<ITodo, "_id">>(
  "users/delete",
  async (arg) => {
    await fetch(deleteTodosUrl(arg._id), {
      method: "DELETE",
    });
    return arg._id;
  }
);
