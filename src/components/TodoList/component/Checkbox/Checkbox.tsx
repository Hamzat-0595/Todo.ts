import { ITodo } from "src/types/ITodos";
import "./Checkbox.css";

type CheckboxProps = {
  onClick: () => void;
  completed: ITodo["completed"];
  _id: ITodo["_id"];
};

const Checkbox = ({ onClick, completed, _id }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper-15">
      <input
        className="inp-cbx"
        id={_id}
        type="checkbox"
        hidden
        checked={completed}
        onClick={onClick}
      />
      <label className="cbx" htmlFor={_id}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
