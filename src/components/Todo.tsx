import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../slices/todo/todoSlice"; // Đổi từ features thành slices

const Todo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo: { id: number; text: string }) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
