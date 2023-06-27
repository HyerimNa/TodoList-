import React, { useState, useRef } from "react";
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import { createGlobalStyle } from 'styled-components';
import './App.css'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {

    const [inputs, setInputs] = useState({
        title: '',
        body: ''
      });

      const { title, body } = inputs;

      const onChange = e => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };

      const [todos, setTodos] = useState([
        {
          id: 1,
          title: '리액트',
          body: '공부',
          isDone: false,
        },
        {
          id: 2,
          title: 'js문법',
          body: '빡세게',
          isDone: true,
        },
        {
          id: 3,
          title: 'css',
          body: '예쁘게',
          isDone: false,
        }
      ])

      const nextId = useRef(4);
      const onCreate = () => {
          if(title === '' || body === '') {
            alert('투 두 리스트를 입력해주세요.');
            return;
          }

        const todo = {
            id: nextId.current,
            title,
            body,
            isDone:false,
          };
          setTodos(todos.concat(todo));

        setInputs({
            title: '',
            body: ''
          });
    
        nextId.current += 1;
      };

      const onRemove = id => {
        const deltodos = todos.filter(todo =>todo.id !== id);
        setTodos(deltodos);
      };


      const onToggle = (id) => {
        // 완료 버튼 id를 받아서 해당 id의 todo의 isDone을 true로 변경
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodos(updatedTodos);       
      };

      const onCancel = (id) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: false } : todo
        );
        setTodos(updatedTodos);
      };
      
      return(
        <>
         <GlobalStyle />
         <div className="todotemplates">
         <div className="title">
          <h2>My Todo List</h2>
        </div> 
         <CreateTodo
            title={title}
            body={body}
            onChange={onChange}
            onCreate={onCreate}
         />
         
         <h2>Working...🔥</h2>
         <div className="list-wrapper"> 
         {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <div className="todo-container">
                {todo.title}<br></br>{todo.body}
                <div className="button-set">
                <button className='todo-delbtn' onClick={() => onRemove(todo.id)}>삭제</button>
                <button className="todo-donebtn"  onClick={() => onToggle(todo.id)}>
                        {todo.isDone ? "취소" : "완료"}
                </button>
              </div></div>
            );
          })}
          </div>
          <div>
            <h2>Done..! 🎉</h2>
            <div className="list-wrapper">
            {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <div className="todo-container">
                  {todo.title}<br></br>{todo.body}
                   <div className="button-set">
                  <button className='todo-delbtn' onClick={() => onRemove(todo.id)}>삭제</button>
                  <button className="todo-donebtn"  onClick={() => onCancel(todo.id)}>
                        {todo.isDone ? "취소" : "완료"}
                </button>
                </div></div>
              );
            })}
            </div>
          </div></div>
        </>
      )    
    
}
export default App;