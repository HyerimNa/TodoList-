import React from 'react';

function CreateTodo({ title, body, onChange, onCreate }) {
  return (
    <div className="todo-input">
      <div className="input-group">
      <label className="form-label">제목</label> 
        <input 
          name="title"
          className="add-input"
          placeholder="제목을 입력하세요"
          onChange={onChange}
          value={title}
        />
      <label className="form-label">내용</label> 
        <input 
          name="body"
          className="add-input"
          placeholder="내용을 입력하세요"
          onChange={onChange}
          value={body}
        />
      <button className="add-btn" onClick={onCreate}>추가하기</button>
    </div>
    </div>
  );
}

export default CreateTodo;