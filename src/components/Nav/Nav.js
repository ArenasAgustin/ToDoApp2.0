import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

export function Nav() {
  return (
    <div className='navbar'>
      <Link className='link' to='/'>
        <span>TODOS</span>
      </Link>
      
      <Link className='link' to='/add'>
        <span>Add Todo</span>
      </Link>
    </div>
  )
};

export default Nav;
