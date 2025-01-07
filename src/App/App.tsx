import TodoList from "src/components/TodoList/TodoList";
import "./App.css";
import Header from "src/layout/Header/Header";
import AddTodo from "src/components/AddTodo/AddTodo";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
