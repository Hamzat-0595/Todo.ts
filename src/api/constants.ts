const BASE_URL = "https://todo-server-taj0.onrender.com";

const getTodosUrl = () => `${BASE_URL}/todos`;
const addTodosUrl = () => `${BASE_URL}/todos`;
const changeTodosUrl = (todoId: string) => `${BASE_URL}/todos/${todoId}`;
const deleteTodosUrl = (todoId: string) => `${BASE_URL}/todos/${todoId}`;

export { BASE_URL, addTodosUrl, changeTodosUrl, deleteTodosUrl, getTodosUrl };
