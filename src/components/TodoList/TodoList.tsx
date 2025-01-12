import { useEffect } from "react";
import "./TodoList.css";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { getTodos } from "src/store/reduser/user/todoAction";
import TodoItem from "./component/TodoItem/TodoItem";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { todos, isLoading } = useAppSelector((state) => state.todos);

  const completedTodos = todos.filter((todo) => todo.completed === true);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (isLoading) {
    <h1>Loading</h1>;
  }
  return (
    <div>
      <div className="conterWrapper">
        <div className="counterTask">
          Всего задач <p className="count">{todos.length}</p>
        </div>
        <div className="counterDone">
          Выполнено
          <p className="count">
            {completedTodos.length} из {todos.length}
          </p>
        </div>
      </div>
      <div className="navbar">
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
