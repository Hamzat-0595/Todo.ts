import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodosUrl,
  changeTodosUrl,
  deleteTodosUrl,
  getTodosUrl,
} from "src/api/constants";
import { ITodo } from "src/types/ITodos";

export const getTodos = createAsyncThunk("user/upload", async function () {
  const res = await fetch(getTodosUrl());
  return await res.json();
});

export const addTodo = createAsyncThunk<ITodo, Pick<ITodo, "title">>(
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

export const changeTodo = createAsyncThunk<
  Pick<ITodo, "_id" | "completed">,
  Pick<ITodo, "_id" | "completed">
>("users/patch", async (arg) => {
  await fetch(changeTodosUrl(arg._id), {
    method: "PATCH",
    headers: {
      "Content-Type": "appLication/json",
    },
    body: JSON.stringify({
      completed: arg.completed,
    }),
  });
  return arg;
});
