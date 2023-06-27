import React from 'react';
import './App.css'

function Todo({ todo, onRemove, onToggle}) {
  
 
  return (
    <div>
      <div>
        <b>{todo.title}</b> <span>({todo.body})</span>
        <button  onClick={() => onRemove(todo.id)}>삭제</button>
        <button  onClick={() => onToggle(todo.id)}>완료
        </button>
      </div>
  </div>
  );
}

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default TodoList;