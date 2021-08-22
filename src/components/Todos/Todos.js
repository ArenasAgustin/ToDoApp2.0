import React from 'react';
import Todo from "../Todo/Todo.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Todos.css';

export function Todos({ todoList, status }){
  let auxTodoList = todoList.filter(todo => todo.status === status)
  return (
    <div className='carTodos'>
      <span className='titulos'>{status}</span>
      {auxTodoList.map((tD) => (
        <Link className='tarea' to={`/edit/${tD.id}`}>
          <Todo title={tD.title}/>
        </Link>
      ))}
    </div>
  )
};

function mapStateToProps(state) {
  return {
    todoList: state
  };
}

export default connect(mapStateToProps)(Todos);