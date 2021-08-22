import React from 'react';
import Todos from '../Todos/Todos.js'
import './Home.css';

export function Home() {
  return (
    <div className='TodoCards'>
      <Todos status="Todo"/>
      <Todos status="InProgress"/>
      <Todos status="Done"/>
    </div>
  )
};

export default Home;
