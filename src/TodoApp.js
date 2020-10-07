import React, { useState } from 'react';

// child components
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

// styles
import './app.css';

function TodoApp() {
  // temp local state data (TODO: persist with localStorage, get via API, store in DB etc)
  const initialTodos = [
    { title: 'Dev a Cool React TodoApp with Hooks', isCompleted: true },
    { title: 'Get a New React Gig', isCompleted: false },
    { title: 'Have a Big Beer', isCompleted: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // component methods
  const addTodo = (title) => {
    const newTodos = [...todos, { title: title, isCompleted: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div>
      <header className="app-header">
        <h1>Todo App</h1>
        <ul className="app-todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              title={todo.title}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default TodoApp;
