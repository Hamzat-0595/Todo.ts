import plus from "../../assets/plus.png";
import "./AddTodo.css";

const AddTodo = () => {
  return (
    <div className="inputWrapper">
      <input className="input" placeholder="Что вы планируете сделать?" />
      <button className="button">
        Добавить <img className="plus" src={plus} />
      </button>
    </div>
  );
};

export default AddTodo;
