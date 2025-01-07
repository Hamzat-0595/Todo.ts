import React, { useEffect, useState } from "react";
import TodoItem from "./component/TodoItem/TodoItem";
import axios from "axios";
import "./TodoList.css";

const baseURL = "https://todo-server-taj0.onrender.com/todos";

type Props = {
  _id: string;
  title: string;
  completed: boolean;
  created_at: string;
  __v: number;
};

const TodoList: React.FC = () => {
  const [posts, setPosts] = useState<Props[] | null>(null);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPosts(response.data);
      console.log(response);
    });
  }, []);

  if (!posts) {
    return <div className="noData">У вас пока нет добавленных задач!</div>;
  }

  return (
    <div>
      <div className="navbar">
        {posts.map((post) => (
          <span key={post._id}>{post.title}</span>
        ))}
      </div>
      <TodoItem />
    </div>
  );
};

export default TodoList;
