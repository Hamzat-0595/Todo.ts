import { ITodo } from "src/types/ITodos";
import "./TodoItem.css";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

const TodoItem = ({ title, _id }: ITodo) => {
  return (
    <div className="todo">
      <div className="wrapper">
        <div className="title">{title}</div>
      </div>
      <DeleteTodo _id={_id} />
    </div>
  );
};

export default TodoItem;
