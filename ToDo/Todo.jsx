import React from 'react';
import { useState } from 'react';
import '../index.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return
    setTodos((prev) => {
        const maxId = prev.length === 0 ? 0 : Math.max(...prev.map((t) => t.id))
        const newId = maxId + 1
        return [...prev, {text: input, id: newId}]
    });

    setInput('');
  };

  const removeTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input type="text" placeholder="New Todo" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
