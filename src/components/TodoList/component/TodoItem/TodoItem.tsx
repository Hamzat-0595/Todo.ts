import { ITodo } from "src/types/ITodos";
import "./TodoItem.css";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import Checkbox from "../Checkbox/Checkbox";
import { useAppDispatch } from "src/hooks/hooks";
import { changeTodo } from "src/store/reduser/user/todoAction";

const TodoItem = ({ title, _id, completed }: ITodo) => {
  const dispatch = useAppDispatch();

  const completeTodo = () => {
    dispatch(changeTodo({ _id, completed: !completed }));
  };

  return (
    <div className="todo">
      <div className="wrapper">
        <Checkbox completed={completed} onClick={completeTodo} _id={_id} />
        <div className="title">{title}</div>
        <DeleteTodo _id={_id} />
      </div>
    </div>
  );
};

export default TodoItem;
