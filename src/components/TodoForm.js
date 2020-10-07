import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  // state for input
  const [value, setValue] = useState('');

  // component methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      console.log('please enter a value');
      return;
    }
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add a Todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
