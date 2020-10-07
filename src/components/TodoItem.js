import React from 'react';

function TodoItem({ title, index, isCompleted, completeTodo, deleteTodo }) {
  return (
    <li key={index} index={index}>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {title}
      </span>
      <button onClick={() => completeTodo(index)}> Done </button>
      <button onClick={() => deleteTodo(index)}> X </button>
    </li>
  );
}

export default TodoItem;
