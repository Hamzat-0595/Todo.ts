import { addTodo } from "src/store/reduser/user/todoAction";
import plus from "../../assets/plus.png";
import "./AddTodo.css";
import { useAppDispatch } from "src/hooks/hooks";
import { useState } from "react";

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ title: value, body: value }));
    setValue("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="inputWrapper">
      <input
        className="input"
        placeholder="Что вы планируете сделать?"
        type="text"
        value={value}
        onChange={onChangeInput}
        onKeyDown={handleKeyPress}
      />
      <button className="button" onClick={handleAddTodo}>
        Добавить <img className="plus" src={plus} />
      </button>
    </div>
  );
};

export default AddTodo;
