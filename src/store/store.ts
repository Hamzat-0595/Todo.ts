import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./reduser/user/todoSlice";

const rootReduser = combineReducers({ todos: todoSlice });

export const store = configureStore({ reducer: rootReduser });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
