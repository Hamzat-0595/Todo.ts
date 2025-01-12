import { deleteTodo } from "src/store/reduser/user/todoAction";
// import "./DeleteTodo.css";
import { useAppDispatch } from "src/hooks/hooks";
import deleteIcon from "src/assets/delete.png";

type DeleteTodoProps = {
  _id: string;
};

const DeleteTodo = ({ _id }: DeleteTodoProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ _id: _id }));
  };

  return (
    <div>
      <button className="deleteBtn" onClick={handleDeleteTodo}>
        <img src={deleteIcon} />
      </button>
    </div>
  );
};

export default DeleteTodo;
